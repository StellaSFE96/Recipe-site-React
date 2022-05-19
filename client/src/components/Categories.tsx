import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../API";
import styled from "styled-components";

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

const Categories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(()=> {
        fetchCategories().then(categories => setCategories(categories.data));
    }, [])

    return (
        <StyledCategories>
            {categories.map((category):any => <Link to={`/category/${category._id}`}> <p key={category}>{category._id} ({category.count})</p></Link>)}
        </StyledCategories>
    )
}

export default Categories;