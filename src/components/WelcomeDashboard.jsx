import React from 'react';
import welcome from "../assets/Annimations/welcome.json"
import Lottie from 'lottie-react';

const WelcomeDashboard = () => {
    return (
        <div>
            <Lottie animationData={welcome} loop={true}></Lottie>
        </div>
    );
};

export default WelcomeDashboard;