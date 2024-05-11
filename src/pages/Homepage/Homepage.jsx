import React, {useState} from 'react';
import './Homepage.css';
import videoCarousel from '../../assets/video.mp4';

import DisasterForm from '../DisasterForm/DisasterForm';

export default function Homepage() {

    const [showDisasterForm, setShowDisasterForm] = useState(false);

    const toggleDisasterForm = () => {
        setShowDisasterForm(!showDisasterForm);
    };


    const changePage = () => {
        window.location.href = 'http://localhost:8501/';
    }
    
    return (
        <div className='homepage'>
            {/* top  nav*/}
            <nav>
                <div className="nav-wrapper container">
                    <h1 href="#" className="brand-logo">Disaster AI</h1>
                    <ul className="topnav_items">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">About</a></li>
                        <li><a href="collapsible.html">contact</a></li>
                        <li><a href="loign.html" className='btn'>Login</a></li>
                        <li><a href="signup.html" className='btn'>Signup</a></li>
                    </ul>
                </div>
            </nav>

            <div className="carousel">
                {/* adding a video */}
                <video className='carousel_video' src={videoCarousel} autoPlay loop muted></video>
                <div className="carousel_content">
                    <h1 style={{fontSize: "58px"}}>Disaster AI</h1>
                    {/* add 100 word desc */}
                    <p>Disaster AI is a platform that uses artificial intelligence to predict natural disasters and help in disaster management. It uses machine learning algorithms to predict natural disasters like floods, earthquakes, and hurricanes. It also provides real-time information about disasters and helps in coordinating relief efforts. Disaster AI is a powerful tool that can help save lives and reduce the impact of natural disasters on communities.</p>
                    <div style={{display: "flex", justifyContent: "center", padding: "20px 0", gap:"30px"}}>
                        <button className='btn' onClick={toggleDisasterForm}>Get Started</button>
                        <button className='btn' style={{background: "var(--primary)", color: "white"}} onClick={() => window.location.href='http://localhost:8501/'}>Chart with DAI</button>
                    </div>
                </div>
            </div>

            <div className="available_tools">
                <div className="conatiner_flex">
                    <div className="card">
                        <h3 className="solution">Emergency Prepairedness</h3>
                        <p>Equipping communities with essential information on disaster risks, evacuation plans, and emergency supplies.</p>
                    </div>

                    <div className="card">
                        <h3 className="solution">Real Time Updates</h3>
                        <p>Providing up-to-the-minute information on disaster developments, including weather alerts, road closures, and evacuation orders.</p>
                    </div>

                    <div className="card">
                        <h3 className="solution">Safety Tips</h3>
                        <p>Dispensing actionable advice on how to stay safe during various disasters, such as hurricanes, earthquakes, floods, and wildfires.
</p>
                    </div>

                    <div className="card">
                        <h3 className="solution">Volunteer Coordination</h3>
                        <p>Facilitating the recruitment and organization of volunteers to assist with disaster response efforts, including training opportunities and volunteer matching.
</p>
                    </div>
                </div>
            </div>
            {showDisasterForm && (
                <div className="disaster_container">
                    <DisasterForm toggleform = {toggleDisasterForm} />
                </div>
            )}
            <h3 style={{textAlign: "center"}}>More Update to come</h3>
            <div className="cta" style={{color: "white"}}>
                <i class="fas fa-phone"></i>
            </div>
        </div>
    )
}
                                                                                                                                                                   