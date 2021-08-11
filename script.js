


const app=new Vue
({
    el:"#app",
  data:
  {
      row:
      [
          {name:"",surname:""}
      ]
  },
  methods:{
    add(){
        this.row.push({name:"",surname:""})
    },
    del(index){
        this.row.splice(index,1)
    }
  }

})