import express, {Request, Response} from 'express';
import {getCategories, getRecipesByCategory, getRecipesByCategoryAndSearch} from "../db/categoryCRUD"

const router = express.Router()

router.get('/', async (req: Request, res: Response)=>{
    const returnRecipes = await getCategories();
    res.status(200).json(returnRecipes)
});

router.get('/:category', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesByCategory(req.params.category);
    res.status(200).json(returnRecipes)
});

router.get('/:category/recipes/:abc', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesByCategoryAndSearch(req.params.category, req.params.abc);
    res.status(200).json(returnRecipes)
});

export default router;