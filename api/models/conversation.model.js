import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
 id:{
    type:String,
    required:true,
    unique:true
 },
 sellerId:{
    type:String,
    required:true,
 },
 buyerId:{
    type:Boolean,
    required:true,
 },
 readBySeller:{
    type:String,
    required:true,
 },
 
 readByBuyer:{
    type:Boolean,
    required:true,
 },
 lastMessage:{
    type:String,
    required:false,
 },
 
 
    
});
export default mongoose.model("Converation", ConversationSchema); 