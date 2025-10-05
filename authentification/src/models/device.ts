import mongoose from "mongoose";

interface deviceAttr {
      uuid:string
}
interface deviceDoc extends mongoose.Document{
      uuid:string
}
interface deviceModel extends mongoose.Model<deviceDoc>{
      build(attr: deviceAttr): deviceDoc
}
const DeviceSchema=new mongoose.Schema({
      uuid:{
            type:String,
            required:true
      }
})

DeviceSchema.set("versionKey", "version");
DeviceSchema.statics.build = (attr: deviceAttr)=>{
      return new Device(attr)
}

const Device=mongoose.model<deviceDoc, deviceModel>("devices", DeviceSchema)
export {Device}
