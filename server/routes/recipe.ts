import express, {Request, Response} from 'express';
import {getRecipes, getRecipesBySearch, getRecipeById, ratingById} from "../db/recipeCRUD"

const router = express.Router()

router.get('/', async (req: Request, res: Response)=>{
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes)
});

router.get('/search/:query', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(returnRecipes)
});

// router.get(
//     "/:recipeId",
//     async (req: express.Request, res: express.Response) => {
//       const params = req.params;
//       let id = params.recipeId;
//       const recipeById = await getRecipeById(id);
//       res.send(recipeById);
//   }
// );

router.get("/:recipeId",
    async (req: Request, res: Response) => {
      const recipe = await getRecipeById(req.params.recipeId);
      res.json(recipe);
  }
);
  
//la till /:recipeId
router.post('/:recipeId/ratings', 
async (req: Request, res: Response) => {
    const returnRecipes = await ratingById(req.params.recipeId, req.body.rating);
    res.status(200).json(returnRecipes);
})

// router.post('/1/ratings', async (req: Request, res: Response) => {
//     console.log("test");
//     // const returnRecipes = await ratingById(req.params.recipeId, req.body.rating);

//     // res.status(200).json(returnRecipes);
// })


// router.get('/search/:query', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesBySearch(req.params.query);
//     res.status(200).json(returnRecipes)
// });

// router.get('/search/:recipeId', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesById(req.params.recipeId);
//     res.status(200).json(returnRecipes)
// });

// router.get("/", async (req: express.Request, res: express.Response) => {
//     const query = req.query;
//     if (Object.keys(query).length > 0) {
//       if (Object.keys(query).includes("search")) {
//         const recipesBySearch = await getRecipesBySearch(query);
//         res.json(recipesBySearch);
//       } else {
//         res.send("query not returned");
//       }
//     } else {
//       const recipes = await getRecipes();
//       res.json(recipes);
//     }
//   });


export default router;