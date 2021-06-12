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

const CollectionPresenter = ({result, loading, error}) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Flix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container></Container>
    );

CollectionPresenter.prototype = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default CollectionPresenter;