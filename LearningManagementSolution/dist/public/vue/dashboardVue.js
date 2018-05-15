
var app = new Vue({
    el: "#app",
    data: {
      batches: []
    },
    created() {
      this.getUpcomingBatches(); 
    },
  
    methods: {
      async getUpcomingBatches() {
        try {
          let response = await axios.get("/batches/upcoming");
          this.batches = response.data;
        } catch (error) {
          alert("There is some error ,try again later");
        }
      }
    }
   
  });


  Vue.use(require('vue-moment'))
  