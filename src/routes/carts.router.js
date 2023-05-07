import express from 'express';
import { Router } from 'express'


const router = Router();

router.get('/', (req, res) => {
  
});

router.get('/:pid', async (req, res) => {
  const pid = req.params.name

});

router.post('/', (req, res ) => {
  
})

router.delete('/:pid', (req, res )=> {
 const pid = req.params.name
})

export default router