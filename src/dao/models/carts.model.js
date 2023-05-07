import mongoose from "mongoose";

const cartsCollection = 'carts';

const cartSchema = new mongoose.Schema({
    id: Number,
    products: Array
})

const cartModel = mongoose.model( cartsCollection, cartSchema)

export default cartModel