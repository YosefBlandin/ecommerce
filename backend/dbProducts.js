import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: Number,
    title: String,
    type: String,
    image: String,
    price: Number,
    description: String,
    amount: Number
});

export default mongoose.model('products', productSchema);