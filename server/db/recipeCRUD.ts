import RecipeModel, { RecipeType } from "./models/recipe"

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}

export const getRecipesBySearch = async (search: string) => {
    const recipes = await RecipeModel.find({
        $or: [
            { title: { $regex: search, $options: 'i'}}
        ]
    })
return recipes;
}

export const getRecipesById = async (id: string) => {
    const recipes = await RecipeModel.findById(id)
    return recipes;
}



