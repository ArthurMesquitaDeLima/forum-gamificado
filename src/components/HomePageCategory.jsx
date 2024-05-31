import React from 'react';
import styled from 'styled-components';

import { FaComments } from 'react-icons/fa';

export function HomePageCategory({ subcategoryTitle, numberOfPosts, numberOfSetMessage, lastPostBy }) {
    return (
        <CategoryWrapper>
            <Icon>
                <FaComments />
            </Icon>
            <SubCategoryTitle>{subcategoryTitle}</SubCategoryTitle>
            <NumberOfPosts>Tópicos: {numberOfPosts}</NumberOfPosts>
            <NumberOfSetMessage>Mensagens: <span>{numberOfSetMessage}</span></NumberOfSetMessage>
            <LastPostBy>
                {lastPostBy}
            </LastPostBy>
        </CategoryWrapper>
    );
}


const CategoryWrapper = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: 56px max-content 1fr;
    gap: 4px;

    &:nth-child(n) {
        border-top: solid 1px var(--bg-color-light);;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    grid-row: span 5;
`;

const SubCategoryTitle = styled.span`
    color: var(--text-color-light);
    font-size: var(--font-size-extra-large);
    font-weight: bold;
    grid-column: span 2;
`;

const NumberOfPosts = styled.span`

`;

const NumberOfSetMessage = styled.span`
`;

const LastPostBy = styled.span`
    grid-column: span 2
`;
