import RecipeModel from "./models/recipe"

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}

export const getRecipeById = async (id: string) => {
    let returnedRecipe = await RecipeModel.findById({ _id: id });
    return returnedRecipe;
  };

export const getRecipesBySearch = async (search: Object) => {
    const key = Object.keys(search).find((key) => key === "search");
    console.log(key);
    return await RecipeModel.find({
            title: { $regex: key, $options: 'i'},
            
    });
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
}


