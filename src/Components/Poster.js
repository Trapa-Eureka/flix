import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: 11px;
    span {
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image 
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                            : require("../assets/noPoster.png").default
                    } 
                />
                <Rating>
                    <span role="img" aria-label="rating">⭐️</span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>
                {title.length > 18 ? `${title.substring(0, 18)}...` : title}
            </Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;