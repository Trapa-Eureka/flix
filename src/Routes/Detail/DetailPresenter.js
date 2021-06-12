import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";
import YouTube from 'react-youtube';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    /* padding: 50px; */
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
    width: 70%;
    padding-left: 130px;
`;

const Genres = styled.span`
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
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
`;

const ItemContainer = styled.div`
    margin-top: 30px;
    font-size: 17px;
    font-weight: 500;
    color: #adadad;
`;

const Year = styled.span`
    color: #fff;
`;

const Director = styled.span`
    margin-left: 15px;
    padding-left: 15px;
    &::before {
        content: '';
        width: 1px;
        height: 14px;
        position: absolute;
        margin-left: -15px;
        margin-top: 1px;
        background-color: #fff;
        opacity: 0.7;
    }
    span {
        color: #fff;
    }
`;

const Item = styled.span`
    margin-left: 15px;
    padding-left: 15px;
    &::before {
        content: '';
        width: 1px;
        height: 14px;
        position: absolute;
        margin-left: -15px;
        margin-top: 1px;
        background-color: #fff;
        opacity: 0.7;
    }
    span {
        color: #fff;
    }
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 19px;
    width: 60%;
    margin-top: 25px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Media = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Cover = styled.div`
    width: 100%;
    height: 39%; /* 300px */
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-top-left-radius: 5px;
`;

const Trailer = styled.div`
    width: 200px;
    height: 200px;
    iframe, div {
        width: 100%;
        height: 100%;
    }
`;

const Homepage = styled.a`
    cursor: pointer;
    top: 50px;
    position: relative;
    font-weight: bold;
    font-size: 25px;
    line-height: 2rem;
    color: #fff;
    background-color: rgba(109, 109, 110, 0.7);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    will-change: background-color, color;
    width: 217px;
    height: 57px;
    &:hover {
        background-color: rgba(109, 109, 110, 0.4);
    }
`;

const Offer = styled.div`
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    flex-direction: row;
`;

const OpenInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 46px;
    padding: 0 0 0 25px;
    background-color: rgba(51,51,51,.6);
    &::after {
        content: '';
        position: relative;
        width: 5px;
        height: 46px;
        margin-left: 25px;
        background-color: #3498db;
        display: flex;
        justify-content: flex-end;
        align-self: center;
    }
    span {
        text-transform: uppercase;
        color: #fff;
        font-size: 13px;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
    }
`;

const Subtitle = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 10px;
    padding-left: 10px;
    width: max-content;
    height: 46px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.1px;
    color: rgba(255, 255, 255, 0.9);
    span {
        margin-right: 5px;
        color: rgba(255, 255, 255, 0.7);
    }
`;

const DetailPresenter = ({result, loading, error}) => (
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
                <title>
                    {result.original_title ? result.original_title : result.original_name}{" "}
                    | Flix
                </title>
            </Helmet>
            <Backdrop 
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Data>
                    <Genres>
                        {result.genres &&
                            result.genres.map((genre, index) =>
                                index === result.genres.length - 1
                                    ? genre.name : `${genre.name} | `
                            )
                        }
                    </Genres>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Year>
                            {result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)
                                && result.last_air_date.substring(0, 4)
                            }
                        </Year>
                        <Director>
                            <span>Maid : </span>
                            {result.production_companies && result.production_companies[0].name}
                        </Director>
                        <Item>
                            <span>Running Time : </span>
                            {result.runtime || result.episode_run_time[0]} min
                        </Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    <Homepage href={result.homepage} target="_blank">More Info</Homepage>
                    <Offer>
                        <OpenInfo>
                            <span>{result.status}</span>
                        </OpenInfo>
                        <Subtitle>
                            <span>Subtitles : </span>
                            {result.spoken_languages &&
                                result.spoken_languages.map((language, index) =>
                                    index === result.spoken_languages.length - 1
                                        ? language.english_name : `${language.english_name} | `
                                )
                            }
                        </Subtitle>
                    </Offer>
                </Data>

                <Media>
                    <Cover bgImage={
                            result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/noPoster.png")
                        } 
                    />
                    <Trailer>
                        <YouTube videoId={result.videos.id} />
                    </Trailer>
                </Media>
            </Content>
        </Container>
    )
);

DetailPresenter.propTypes = {
    nowPlaying: PropTypes.array,
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;