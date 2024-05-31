import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostsList from '../components/PostsList';

export const PostsListPage = () => {
    const [topics, setTopics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://forum-gamificado-default-rtdb.firebaseio.com/post.json')
            .then(
                response =>  response.json(),
            )
            .then(data => setTopics(data))
            .catch(error => console.error('Erro ao obter os dados:', error));
    }, []);

    const indexOfLastTopic = currentPage * 10;
    const indexOfFirstTopic = indexOfLastTopic - 10;
    const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <Container>
            <Title>Ultimos posts</Title>
            <PostsList topics={currentTopics} />
            <PaginationList>
                {topics.length > 10 ? (
                    [...Array(Math.ceil(topics.length / 10))].map((_, index) => (
                        <PageItem key={index} className={currentPage === index + 1 ? 'active' : ''}>
                            <PageButton onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </PageButton>
                        </PageItem>
                    ))
                ) : (
                    <span>Carregando...</span>
                )}
            </PaginationList>
        </Container>
    );
};

const Container = styled.div`
    @media (min-width: 650px) {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
`;

const Title = styled.h1`
    font-size: var(--font-size-extra-large);
    margin-bottom: 20px;
`;

const PaginationList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    justify-content: center;

    @media (min-width: 650px) {
        justify-content: start;
    }
`;

const PageItem = styled.li`
    margin-right: var(--gap);

    &.active {
        button {
            background-color: var(--bg-color-dark);
        }
    }
`;

const PageButton = styled.button`
    padding: 4px 8px;
    background-color: var(--bg-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--bg-color-light); 
    }
`;