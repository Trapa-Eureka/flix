import React from "react";
// eslint-disable-next-line
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const {data:{results: nowPlaying}} = await moviesApi.nowPlaying();
            const {data:{results: upcoming}} = await moviesApi.upcoming();
            const {data:{results: popular}} = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch {
            this.setState({
                error: "didn't get any information of Movies"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        // eslint-disable-next-line
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        // console.log(this.state);
        return (
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}