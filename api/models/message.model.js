import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 conversationId: { type: String, required: true },
 uderId: { type: String, required: true },
descreption: { type: String, required: true }

},{ timestamps: true 
});
export default mongoose.model("User", userSchema); 