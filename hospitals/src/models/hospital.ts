import mongoose from 'mongoose';

interface hospitalAttr {
      name:string
      location:string
      services?:[string]
}
interface hospitalDoc extends mongoose.Document {
      name:string
      location:string
      services?:[string]
}

interface hospitalModel extends mongoose.Model<hospitalDoc>{
      build(attrs: hospitalAttr):hospitalDoc
}
const HospitalSchema = new mongoose.Schema({
      name:{
            type: String,
            required: true,
      },
      location:{
            type:String,
            required: true
      },
      services:{
            type:[String],
            required: false
      }
  },
)

HospitalSchema.set("versionKey", "version");
HospitalSchema.statics.build = (attr: hospitalAttr)=>{
      return new Hospital(attr)
}

const Hospital = mongoose.model<hospitalDoc, hospitalModel>('Hospitals', HospitalSchema)

export {Hospital} 