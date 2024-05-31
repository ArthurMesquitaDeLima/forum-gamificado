import React, { useState, useEffect } from 'react';
import { HomePageCategory } from '../components/HomePageCategory'
import styled from 'styled-components';


export function HomePage() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('https://forum-gamificado-default-rtdb.firebaseio.com/category.json')
            .then(response => response.json())
            .then(data => setCategoryData(data))
            .catch(error => console.error('Erro ao carregar dados:', error));
    }, []);

    console.log(categoryData)
    return (
        <Forum>
            <Title>Explore novos assuntos</Title>
            {categoryData.length ? (
                categoryData.map((category, index) => (
                    <Container key={index}>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <HomePageCategory key={subIndex} {...subcategory} />
                        ))}
                    </Container>
                ))
            ) : (
                <span>Carregando...</span>
            )}
        </Forum>
    )
}

const Forum = styled.div`
    @media (min-width: 650px) {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    & > span {
        display: flex;
        justify-content: center;
    }
`;

const CategoryTitle = styled.h3`
    padding: 8px;
    color: white;
    font-weight: bold;
`;

const Title = styled.h1`
    font-size: var(--font-size-extra-large);
    margin-bottom: 20px;
`;

const Container = styled.div`
    background-color: var(--bg-color-dark);
    margin-block: 32px;

    &:nth-child(n) {
        border: solid 1px var(--bg-color-light);
    }
`;
