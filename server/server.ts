import express, { Request, Response, json} from 'express';
import { connect } from 'mongoose';
import recipeToRouter from "./routes/recipe"
import categoryToRouter from './routes/category';
import cors from 'cors'

connect('mongodb://localhost:27017/recipes')

const app = express()
const port = 3000
app.use(json());
app.use(cors());

// Routes
app.use('/recipe', recipeToRouter)
app.use('/category', categoryToRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Server online!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})