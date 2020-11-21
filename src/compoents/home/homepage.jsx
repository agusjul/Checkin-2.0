import React from 'react';
import bankimage from '../../images/bank.jpg';
import Textcomponent from './text/text';
import Statcomponent from './stat/stat';

class Homepage extends React.Component {
    render(){
        return(
            <div className="relative w-screen h-screen " >
                {/* background image */}
                <img src={bankimage} className=" z-1 absolute w-screen h-screen" />
                <div className="z-2 absolute w-screen h-screen bg-gradient-to-r from-black ...">
                </div>

                {/* Bank Indonesia text */}
                <div className="absolute z-10 h-screen flex">
                    <Textcomponent />
                    <Statcomponent />
                </div>
                
                

            </div>
        )
    }
}

export default Homepage;