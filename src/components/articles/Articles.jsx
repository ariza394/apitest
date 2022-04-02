import React from 'react';
import styled from 'styled-components';


const ArticleContainer = styled.div`
    grid-row:2 / span 2;
    background-color:red;
`;

const Articles = () =>{

    return(
        <ArticleContainer>
            <h1>articles</h1>
        </ArticleContainer>
    )
}

export default Articles;