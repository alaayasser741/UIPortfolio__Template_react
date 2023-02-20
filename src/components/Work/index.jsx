import React, { Component } from "react";
import { Work__section, Work__title, Work__cards__container, Work__card, Card__Icon, Card__title, Card__line, Card__disc } from './style'
import axios from "axios";
class Work extends Component {
    state = {
        work: []
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => { this.setState({ work: res.data.works }) })
    }
    render() {
        const { work } = this.state;
        const workList = work.map(workItem => {
            return (
                <Work__card key={workItem.id}>
                    <Card__Icon className={workItem.icon_name}></Card__Icon>
                    <Card__title>{workItem.title}</Card__title>
                    <Card__line />
                    <Card__disc>{workItem.body}</Card__disc>
                </Work__card>
            )
        })
        return (
            <Work__section>
                <div className="container">
                    <Work__title>My Work</Work__title>
                    <Work__cards__container>
                    {workList}
                    </Work__cards__container>
                </div>
            </Work__section>
        );
    }
}
export default Work;