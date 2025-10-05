import mongoose from "mongoose"

// id, hospital_id,user_id,rating,review,
//  created_at
interface reviewRatingAttr {
      hospital_id:string,
      device_uuid:string,
      rating:number,
      review?:string
}
interface reviewRatingDoc extends mongoose.Document{
      hospital_id:string,
      device_uuid:string,
      rating:number,
      review?:string
}
interface reviewRatingModel extends mongoose.Model<reviewRatingDoc>{
      build(attrs: reviewRatingAttr):reviewRatingDoc
}
const ReviewRatingSchema = new mongoose.Schema({
      hospital_id:{
            type: String,
            required: true,
      },
      device_uuid:{
            type: String,
            required: true
      },
      rating:{
            type:Number,
            required: true
      },
      review:{
            type:String,
      }
}, {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})
ReviewRatingSchema.set("versionKey", "version");
ReviewRatingSchema.statics.build=(attr:reviewRatingAttr)=>{
      return new ReviewRating(attr)
}
const ReviewRating=mongoose.model<reviewRatingDoc, reviewRatingModel>('ReviewRating', ReviewRatingSchema);

export {ReviewRating}