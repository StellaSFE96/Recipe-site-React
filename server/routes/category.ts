import express, {Request, Response} from 'express';
import {getCategory, getRecipesByCategory, getRecipesByCategoryAndSearch} from "../db/categoryCRUD"

const router = express.Router()

router.get('/', async (req: Request, res: Response)=>{
    const returnRecipes = await getCategory();
    res.status(200).json(returnRecipes);
});

router.get('/:category', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesByCategory(req.params.category);
    res.status(200).json(returnRecipes);
});

router.get('/:category/recipes', async (req: Request, res: Response) => {
  const returnRecipes = await getRecipesByCategoryAndSearch(req.params.category, req.query.search);
  res.status(200).json(returnRecipes);
});

// router.get("/:category/recipes/", async (req, res) => {
//     const query = req.query
//     const category = req.params.category
//     if(Object.keys(query).length > 0){
//       if(Object.keys(query).includes("search")){
//         const recipes = await getRecipesByCategoryAndSearch(category, query.search)
//         res.json(recipes)
//       }
//     } else {
//         const recipes = await getRecipesByCategory(req.params.category) 
//         res.json(recipes)
//     }
//   })

// router.get('/:category/recipes/:abc', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesByCategoryAndSearch(req.params.category, req.params.abc);
//     res.status(200).json(returnRecipes)
// });

export default router;