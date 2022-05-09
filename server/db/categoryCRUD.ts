import RecipeModel from "./models/recipe"

export const getCategories = async () => {
    const categories = await RecipeModel.find().distinct('category');
    return categories;
}

export const getRecipesByCategory = async (category: string) => {
    const recipes = await RecipeModel.find({category: category});
return recipes;
}

export const getRecipesByCategoryAndSearch = async (category: string, search: string) => {
    const recipes = await RecipeModel.findById({category: category, $or: [
        { title: {$regex: search, $options: 'i'}}
    ]
});
    return recipes;
}