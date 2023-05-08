import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';
import { v4 as uuidv4 } from 'uuid';

const newID = uuidv4().substring(0, 8);

const router = Router();

router.get('/', async (req, res) => {
  const products = await productModel.find().lean().exec()
  res.render('index', { products })
});

router.get('/create', (req, res)=>{
  res.render('form')
})

router.get('/:pid', async (req, res) => {
  const id = req.params.name
  const product = await productModel.findOne({ id }).lean().exec()
  res.render('product', { product })
});

router.post('/', async (req, res ) => {
  const productForm = req.body
  const productNew = {...productForm, code: newID}
  const productGenerate = new productModel(productNew)
  await productGenerate.save()
  res.redirect('/realtimeproducts')
})

router.delete('/:pid', (req, res )=> {
 const pid = req.params.name
})

export default router