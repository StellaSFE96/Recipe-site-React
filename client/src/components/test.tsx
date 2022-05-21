import React from 'react'

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
