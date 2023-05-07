import express from 'express';
import { Router } from 'express'
import cartModel from '../dao/models/carts.model.js';


const router = Router();

router.get('/', async (req, res) => {
  const carts = await cartModel.find().lean().exec()
  res.render('carts', { carts })
});

router.get('/create', (req, res)=>{
})

router.get('/:pid', async (req, res) => {
  const id = req.params.name
  const carts = await cartModel.findOne({ id }).lean().exec()
  res.render('carts', { carts })
});

router.delete('/:pid', (req, res )=> {
 const pid = req.params.name
})

export default router