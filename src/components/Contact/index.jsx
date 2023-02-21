import React from "react";
import './style.css'
const Contact = () => {
    return (
        <div className="Contact__Section">
            <div className="container">
                <h2>Drop Me A Line</h2>
                <form>
                    <div className="input__info">
                    <input required type="text" placeholder="Your Name" />
                    <input required type="email" placeholder="Your Email"/>
                    </div>
                    <textarea required placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
}
export default Contact;