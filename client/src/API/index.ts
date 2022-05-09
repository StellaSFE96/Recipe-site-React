import axios from "axios";
axios.defaults.baseURL = "http://localhost3000";

export const fetchRecipes = async () => {
    console.log("recipes");
    return await axios.get("/recipes");
}

export const fetchCategories = async () => {
    console.log("categories");
    return await axios.get("/category");
}

export const fetchRecipesByCategory = async (category: string) => {
    console.log("fetchRecipesByCategory");
return await axios.get(`/category/${category}`);
}

// export const fetchRecipesByCategoriesAndQuery = async (category: string, query: string) => {
//     console.log("fetchRecipesByCategoriesAndQuery");
// return await axios.get(`/categories/${category}/recipes`);
// }


