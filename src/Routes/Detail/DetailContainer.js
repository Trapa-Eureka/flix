import React from "react";
import { moviesApi, tvApi } from "../../api";
// eslint-disable-next-line
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {location: { pathname }} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }, 
            history: { push }
        } = this.props;
        const { isMovie } = this.state;
        // console.log(parseInt(id));
        const parsedId = parseInt(id);
        if(isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if(isMovie) {
                ({data: result } = await moviesApi.movieDetail(parsedId));
            } else {
                ({data: result } = await tvApi.showDetail(parsedId));
            }
            // console.log(result);
        } catch {
            this.setState({ error: "Can't find anything."})
        } finally {
            this.setState({ loading: false, result });
        }
    }

    render() {
        // console.log(this.props);
        // eslint-disable-next-line
        const { result, error, loading } = this.state;
        // console.log(this.state);
        // console.log(result);
        return (
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}