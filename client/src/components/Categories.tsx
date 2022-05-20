import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(() => { 
        const fetchCategories = async () => {
            const categories = await fetch('http://localhost:3000/category')
            .then(res => res.json())
            setCategories(categories);
            console.log(categories);
        }
        fetchCategories();
        }, [])

    return (
        <StyledCategories>
            {categories.map((category:any) => <Link to={`/category/${category._id}`} key={category}> <p>{category._id} ({category})</p> </Link>)}
        </StyledCategories>
    )
}

const StyledCategories = styled.div`
    background-color: #719cc1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .category {
        :hover {
            cursor: pointer;
        }
    }
`

export default Categories;