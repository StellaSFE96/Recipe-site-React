import express, {Request, Response} from 'express';
import {getRecipes, getRecipesBySearch, getRecipesById} from "../db/recipeCRUD"

const router = express.Router()

router.get('/', async (req: Request, res: Response)=>{
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes)
});

router.get('/search/:query', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(returnRecipes)
});

router.get('/search/:recipeId', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesById(req.params.recipeId);
    res.status(200).json(returnRecipes)
});

export default router;