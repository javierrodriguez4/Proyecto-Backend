import mongoose from "mongoose";

const productsCollection = 'products';

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: Number,
    stock: Number

})

const productModel = mongoose.model( productsCollection, productSchema)

export default productModel