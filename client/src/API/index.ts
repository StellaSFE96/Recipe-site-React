import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

// recipes

export const fetchRecipes = async () => {
    return await axios.get("/recipes");
}

export const fetchRecipesById = async (id: string) => {
    return await axios.get(`/recipes/${id}`);
}

export const fetchRecipesByQuery = async (query: string) => {
    return await axios.get(`/recipes?search=${query}`);
};

  // categories

export const fetchCategories = async () => {
    return await axios.get("/categories");
}

export const fetchRecipesByCategory = async (category: string) => {
    return await axios.get(`/categories/${category}/recipes`);
}

export const fetchRecipesByCategoryAndQuery = async (
    category: string,
    query: string
  ) => {
    return await axios.get(
      `http://localhost:3000/categories/${category}/recipes?search=${query}`
    );
  };

  // ratings and comments

export async function postRating(recipeId: any, rating: any){
    try {
        const response = await axios.post(`/recipes/${recipeId}`, {rating: rating})
        return response
    } catch (error: any){
        return error.response
    }
}

// export const fetchRecipesByCategoriesAndQuery = async (category: string, query: string) => {
//     console.log("fetchRecipesByCategoriesAndQuery");
// return await axios.get(`/categories/${category}/recipes`);
// }


