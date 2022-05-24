import React from 'react';

// export default function test() {
//   return (
//     <StyledRecipeCard>
//             <div className="image"></div>
//             <div>
//                 <h1 className="recTitle">Recipe Title</h1>
//                 <div className="details">
//                     <p>10 Ingredients</p>
//                     <p> 1000 Minutes</p>
//                 </div>
//             </div>
//             <div>
//             <p>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, debitis. Lorem burger.</p>
//             </div>
//     </StyledRecipeCard>
//   )
// }

// const Categories = () => {
//     const [categories, setCategories] = useState<any[]>([]);
//     useEffect(() => {
//         const fetchCategories = async () => {
//             const categories = await fetch('http://localhost:3000/category')
//             .then(res => res.json())
//             setCategories(categories);
//             console.log(categories);
//         }
//         fetchCategories();
//         }, [])

//     return (
//         <StyledCategories>
//             {categories.map((category:any) => <Link to={`/category/${category._id}`} key={category}> <p>{category._id} ({category})</p> </Link>)}
//         </StyledCategories>
//     )
// }

// CATEGORYLIST BY QUERY

//code 1
// const RecipesByCategoryList = () => {
// 	const [ query, setQuery ] = useState('');
// 	const [ recipes, setRecipes ] = useState<any>([]);
// 	const { categoryId } = useParams();
// 	useEffect(
// 		() => {
// 			if (query) {
// 				fetchRecipesByCategoryQuery(categoryId, query).then((recipes) => setRecipes(recipes.data));
// 			} else {
// 				fetchRecipesByCategory(categoryId).then((recipes) => setRecipes(recipes.data));
// 			}
// 		},
// 		[ query ]
// 	);
// 	return (
// 		<div>
// 			<StyledWrapper>
// 				<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
// 				{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}
// 			</StyledWrapper>
// 		</div>
// 	);
// };

// code 2
// const getSearched = async (searchRecipe: string) => {
// 	const recipes = await fetch(
// 		`http://localhost:3000/category/${categoryId}/recipes?search=${searchRecipe}`
// 	).then((res) => res.json());
// 	// console.log(recipes);
// 	setRecipes(recipes);
// };

// const fetchRecipes = async () => {
// 	const recipes = await fetch(`http://localhost:3000/category/${categoryId}`).then((res) => res.json());
// 	setRecipes(recipes);
// 	console.log(recipes);
// };
// fetchRecipes();

// Right one!!!!!!!!
// const RecipesByCategoryList = () => {
// 	const [ recipes, setRecipes ] = useState<any>([]);
// 	const { categoryId } = useParams();
// 	useEffect(
// 		() => {
// 			const fetchRecipes = async () => {
// 				const recipes = await fetch(`http://localhost:3000/category/${categoryId}`).then((res) => res.json());
// 				setRecipes(recipes);
// 				console.log(recipes);
// 			};
// 			fetchRecipes();
// 		},
// 		[ categoryId ]
// 	);
// 	return (
// 		<div>
// 			<StyledWrapper>
// 				{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}
// 			</StyledWrapper>
// 		</div>
// 	);
// };

// export default RecipesByCategoryList;
