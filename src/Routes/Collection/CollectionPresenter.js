import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 230px 0 0 0;
    background: -moz-linear-gradient(left,  rgba(0,0,0,1) -10%, rgba(0,0,0,0) 95%);
    background: -webkit-linear-gradient(left,  rgba(0,0,0,1) -10%,rgba(0,0,0,0) 95%);
    background: linear-gradient(to right,  rgba(0,0,0,1) -10%,rgba(0,0,0,0) 95%);
`;

const Data = styled.div`
    width: 100%;
    padding-left: 130px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    display: block;
    margin-top: 30px;
    font-size: 53px;
    font-weight: bold;
    letter-spacing: 2px;
    width: 720px;
    word-break: keep-all;
    line-height: 53px;
    color: #fff;
`;

const ItemContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    height: max-content;
    a {
        width: 130px;
        margin-left: 15px;
        &:first-child {
            margin-left: 0;
        }
    }
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 19px;
    width: 40%;
    margin-top: 25px;
`;

const InfoContainer = styled.div``;

const InfoText = styled.div`
    position: absolute;
    padding-left: 97px;
    height: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    margin-top: -30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
        font-size: 13px;
        font-weight: bold;
        letter-spacing: -0.02em;
        padding-right: 2px;
        color: rgba(255, 255, 255, 0.8);
    }
`;

const CollectionPresenter = ({result, loading, imageUrl, error}) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Flix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>{result.name} | Flix</title>
            </Helmet>
            <Backdrop 
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <InfoText>
                    <span>Part 2</span>
                </InfoText>
                <Data>
                    <Title>{result.name}</Title>
                    <InfoContainer>
                        {result.parts && result.parts.length > 0 && (
                            <ItemContainer>
                                {result.parts.map(item =>
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        imageUrl={item.poster_path}
                                        title={item.title}
                                        rating={item.vote_average}
                                        year={item.release_date}
                                        isMovie={true}
                                    />
                                )}
                            </ItemContainer>
                        )}
                        <Overview>{result.overview}</Overview>
                    </InfoContainer>
                </Data>
            </Content>
        </Container>
    );

CollectionPresenter.prototype = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default CollectionPresenter;