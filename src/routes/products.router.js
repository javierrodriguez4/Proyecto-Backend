import express from 'express';
import { Router } from 'express'
import productModel from '../dao/models/products.model.js';


const router = Router();

router.get('/', async (req, res) => {
  const products = await productModel.find().lean().exec()
  res.render('index', { products })
});

router.get('/create', (req, res)=>{
  res.render('form')
})

router.get('/:pid', async (req, res) => {
  const pid = req.params.name
  res.render('product', { pid })
});

router.post('/', async (req, res ) => {
  const productNew = req.body
  const productGenerate = new productModel(productNew)
  await productGenerate.save()
  res.redirect('/realtimeproducts')
})

router.delete('/:pid', (req, res )=> {
 const pid = req.params.name
})

export default router