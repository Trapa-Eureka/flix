import React from "react";
// eslint-disable-next-line
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true
    };

    render() {
        // eslint-disable-next-line
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}