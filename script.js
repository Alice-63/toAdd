


const app=new Vue
({
    el:"#app",
  data:
  {
      zeile:
      [
          {vorname:"",nachname:""}
      ]
  },
  methods:{
    hinzufeugen(){
        this.zeile.push({vorname:"",nachname:""})
    },
    loeschen(index){
        this.zeile.splice(index,1)
    }
  }

})