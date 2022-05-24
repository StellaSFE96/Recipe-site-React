import express, { Request, Response, json} from 'express';
import { connect } from 'mongoose';
import recipeToRouter from "./routes/recipe"
import categoryToRouter from './routes/category';
import cors from 'cors'
import dotenv from 'dotenv';


dotenv.config();

console.log(process.env.MONGO_DB_CONNECTION_STRING); 
connect(`${process.env.MONGO_DB_CONNECTION_STRING}`);
// if (process.env.MONGO_DB_CONNECTION_STRING) {
//     connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
//         app.listen(port, () => console.log('listening to port: ' + port));
//     })
// } else {
//     console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
// }

const app = express()
// const port = 3000
const port = process.env.PORT || 3000;
app.use(json());
app.use(cors());

// Routes
app.use('/recipes', recipeToRouter)
app.use('/category', categoryToRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Server online!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})