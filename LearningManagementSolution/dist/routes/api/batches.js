"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
const sequelize_1 = __importDefault(require("sequelize"));
const route = express_1.Router();
const Op = sequelize_1.default.Op;
route.get("/", (req, res) => {
    db_1.Batch.findAll()
        .then((batches) => {
        res.status(200).send(batches);
    })
        .catch((error) => {
        res.status(500).send({
            error: "Could not retrieve batches"
        });
    });
});
route.get("/upcoming", (req, res) => {
    db_1.Batch.findAll({
        where: {
            startDate: {
                [Op.gt]: new Date()
            }
        }
    })
        .then((batches) => {
        res.status(200).send(batches);
    })
        .catch((error) => {
        res.status(500).send({
            error: "Could not retrieve batches"
        });
    });
});
exports.default = route;
