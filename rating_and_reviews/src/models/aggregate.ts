// ,hospital_id, avg_rating, review_count,
//   latest_reviews

import mongoose from "mongoose";

interface aggregateAttr {
      hospital_id:string,
      avg_rating:number,
      review_count:number
}

interface aggregateDoc extends mongoose.Document{
      hospital_id:string,
      avg_rating:number,
      review_count:number
}

interface aggregateModel extends mongoose.Model<aggregateDoc>{
      build(attr: aggregateAttr):aggregateDoc
}

const AggregateSchema = new mongoose.Schema({
      hospital_id:{
            type: String,
            required:true
      },
      avg_rating:{
            type:Number,
            required:true
      },
      review_count:{
            type:String,
            required:true
      }

})
AggregateSchema.set("versionKey", "version")
AggregateSchema.statics.build= (attr: aggregateAttr)=>{
      return new Aggregate(attr)
}

const Aggregate=mongoose.model<aggregateDoc, aggregateModel>('aggregate', AggregateSchema);

export {Aggregate}



