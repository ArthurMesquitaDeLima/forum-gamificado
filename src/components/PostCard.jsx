import React from 'react';
import styled from 'styled-components';

const PostCard = ({ avatar, title, username, publicationDate, keywords, description, comments, likes, dislikes }) => {
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;
    const isUserPost = username ==='user1' // Caso o Post seja do usuario, Ele consegue visualiza o nº de dislikes.

    const commentsCount = comments?.length ?? 0

    return (
        <Card>
            <Avatar src={avatar} />
            <Post>
                <Title>{title}</Title>
                <ItemGroup>
                    <ItemGroup>
                        <ByUsername>{username}</ByUsername>
                        <PublicationDate>{publicationDate}</PublicationDate>
                    </ItemGroup>
                    {keywords.map((keyword, index) => (
                        <KeywordsTag key={index}>{keyword}</KeywordsTag>
                    ))}
                </ItemGroup>
                <Description>{truncatedDescription}</Description> 
            </Post>
            <Stats>
                <CommentsNums>Comentarios: {commentsCount}</CommentsNums>
                <Likes>Likes: {likes}</Likes>
                {isUserPost && <Dislikes>Dislikes: {dislikes}</Dislikes>}
            </Stats>
        </Card>
    );
};

const Card = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 52px 1fr;
    background-color: #fff;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    padding: 8px 6px;
    place-items: center;
    margin-bottom: var(--gap);

    @media (min-width: 650px) {
        grid-template-columns: 52px 1fr 224px;
    }
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    grid-row: 1 / 3;

    @media (min-width: 650px) {
        grid-row: unset;
    }
`;

const Post = styled.div`
    place-self: center start;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: var(--font-size-large);
    color: var(--text-color);
`;

const ItemGroup = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: var(--gap);
`;

const ByUsername = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color);
    font-weight: bold;
    margin-right: var(--gap);
`;

const PublicationDate = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color-light);
    margin-right: var(--gap);
`;

const KeywordsTag = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color);
    background-color: #E4ECF1
;
    padding: 2px 6px;
    border-radius: var(--gap);
`;

const Description = styled.span`
    font-size: var(--font-size-medium);
    color: var(--text-color-dark);
    display: block;

    @media (min-width: 650px) {
        grid-column: 1 / 3;
    }
`;

const Stats = styled.div`
    display: flex;
    gap: 0 8px;
    grid-column: 2;
    place-self: center start;
    flex-wrap: wrap;

    @media (min-width: 650px) {
        position: absolute; 
        bottom: 8px; 
        right: 8px;
    }
`;

const CommentsNums = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color);
`;

const Likes = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color);
`;

const Dislikes = styled.span`
    font-size: var(--font-size-small);
    color: var(--text-color);
`;

export default PostCard;