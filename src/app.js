import express from 'express';
import handlebars from 'express-handlebars'
import productsRouter from './routes/products.router.js';
//import cartsRouter from './routes/carts.router.js';

const app = express();
const port = 8080;

app.engine('handlebars', handlebars.engine());
app.set ('views', './src/views');
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
//app.use('/api/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});