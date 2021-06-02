import React, { Component } from 'react';

import splashMd from "./Asssets/images/splash/splash-md.webp"
import splashSm from "./Asssets/images/splash/splash-sm.webp"
import splashLg from "./Asssets/images/splash/splash-lg.webp"
import splashXl from "./Asssets/images/splash/splash-xl.webp"
class Splash extends Component {
    render() {
        return (
            <div className="splash-container">

                <div className='absolute z-n2 flex justify-center '>
                    <img className={`w-screen min-h-screen object-cover`} src={splashMd} srcSet={`${splashSm} 300w, ${splashMd} 768w, ${splashLg} 1280w, ${splashXl} 1400w`} alt='Splash' />
                </div>
                <h1 className="w-screen text-gradient bg-gradient-to-r from-primary  via-accent to-primary p-4 text-center font-bold text-lg">
                    React-Typescript-Tailwind
                </h1>
            </div>
        );
    }
}

export default Splash;