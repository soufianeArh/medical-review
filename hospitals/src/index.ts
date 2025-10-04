import {app} from "./app"

const start = async ()=> { 
      app.listen(3000, ()=>{
      console.log("express server running at 3000 via ts-node-dev");
})
}
start()