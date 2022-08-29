import RecipeModel from "./models/recipe"

export const getRecipes = async () => {
    const returnedRecipe = await RecipeModel.find()
    return returnedRecipe;
}

export const getRecipeById = async (id: string) => {
    let returnedRecipe = await RecipeModel.findById({ _id: id });
    return returnedRecipe;
  };

export const getRecipesBySearch = async (title: string) => {
    const returnedRecipe = await RecipeModel.find({
        title: { $regex: title, $options: 'i'}
        // "title": { $regex: search, $options: 'i'}
})
return returnedRecipe
}

// export const getRecipesById = async (id: string) => {
//     const recipes = await RecipeModel.findById(id)
//     return recipes;
// }

export const ratingById = async (id: string, rating: number) => {
    const recipe = await RecipeModel.findOneAndUpdate(
        {_id: id },
        { $push: { ratings: rating }}
    )
return recipe
}


