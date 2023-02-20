/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {Home__Section,Home__info,Home__title,Home__span,Home__disc,Home__btn} from'./style.js';

const Home = () => {
    return (
        <Home__Section>
            <div className="container">
                <Home__info>
                <Home__title>Alaa Abdullah</Home__title>
                <Home__span>Front-end Developer</Home__span>
                <Home__disc>Im a professional <span>UX Designer </span> and <span>Front-End Developer</span> creating modern and responsive design to web and mobile. Let us work together. Thank you</Home__disc>
                <Home__btn href="https://www.linkedin.com/in/alaayasser741" target="_blank">Let's Begin</Home__btn>
                </Home__info>
            </div>
        </Home__Section>
    );
}
export default Home;