import React from "react";
import './style.css'
const Profile = () => {
    return (
        <div>
            <div className="container">
                <div className="Profile__content">
                    <div className="myProfile">
                        <h2>My Profile</h2>
                        <div className="Profile__Info">
                            <div><span>Name</span> <span>Alaa</span></div>
                            <div><span>Birthday</span> <span>1/9/2002</span></div>
                            <div><span>Address</span> <span>Al-Jammalia</span></div>
                            <div><span>Phone</span> <span>+20 0155 677 4943</span></div>
                            <div><span>E-mail</span> <span>alaayasser2018@gmail.com</span></div>
                        </div>
                    </div>
                    <div className="someSkills">
                        <h2>Some Skills</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur placeat inventore iusto quis perspiciatis ipsum vero impedit, voluptates nesciunt amet a, esse iste eaque accusamus laboriosam magni dolore nostrum?</p>
                        <div className="Profile__skills">
                            {/* HTML */}
                            <div className="Skill__Name">
                                <h3>HTML</h3>
                                <span>100%</span>
                            </div>
                            <hr style={{width:'100%',marginBlockEnd:'2rem'}} />
                            {/* CSS */}
                            <div className="Skill__Name">
                                <h3>CSS</h3>
                                <span>90%</span>
                            </div>
                            <hr style={{width:'90%',marginBlockEnd:'2rem'}} />
                            {/* React */}
                            <div className="Skill__Name">
                                <h3>React</h3>
                                <span>80%</span>
                            </div>
                            <hr style={{width:'80%',marginBlockEnd:'2rem'}} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Profile;