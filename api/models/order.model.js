import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordersSchema = new Schema({
    img: {
        type: String,
         required: false
    },
    title: {
        type: String, 
        required: true
    },
    price: {
        type: Number, required: true
    },
    sellerId: {
        type: string,
        required: true
    },
    buyerId: { 
        type: string, 
        required: true
     },
    isCompleted: { type: Boolean,
         default: false },
    payment_intent: {
        type: string, 
        required: true
    },

}, {
    timestamps: true
});
export default mongoose.model("Orders", ordersSchema); 