import React from "react";
import { About__Section, About__Container, About__info, About__Span, About__disc } from './style.js'
const About = () => {
    return (
        <About__Section>
            <About__Container className="container">
                <About__info>
                    <h2>This is Me <About__Span>Creative Director</About__Span></h2>
                    <About__disc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi eum accusantium dolorem ipsum magnam eveniet numquam? Maiores quos molestias illo explicabo facere. Quasi corporis culpa facere necessitatibus, suscipit adipisci?
                    </About__disc>
                    <About__disc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel minus sequi, ipsam hic dolorum consequuntur at laudantium autem minima incidunt odio voluptates, cupiditate iusto. Dolorum consectetur cumque aliquam vero?</About__disc>
                </About__info>
            </About__Container>
        </About__Section>
    );
}
export default About;