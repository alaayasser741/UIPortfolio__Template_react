import React, { useEffect, useState } from "react";
import { Img__gallery, Portfolio__img, Img__box, Portfolio__title, Portfolio__section } from './style'
import axios from "axios";
const Portfolio = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        try {
            const getImg = async () => {
                const Response = await axios.get('js/data.json');
                setImages(Response.data.portfolio);
            }
            getImg();
        } catch (e) {
            console.log(e)
        }
    }, []);
    const PortfolioSection = images.map(data => {
        return (
            <Img__box key={data.id}>
                <Portfolio__img src={data.image} alt={"portfolio-img " + data.id} />
            </Img__box>
        )
    })
    return (
        <Portfolio__section>
            <Portfolio__title>My Portfolio</Portfolio__title>
            <Img__gallery>
                {PortfolioSection}
            </Img__gallery>
        </Portfolio__section>
    );
}
export default Portfolio;