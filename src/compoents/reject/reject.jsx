import React from 'react';
import WarningImage from '../../images/reject.svg';

class Rejectpage extends React.Component{
    render(){
        return(
            <div className="flex justify-center items-center h-screen w-screen bg-danger">
                <img src={WarningImage} className="w-1/2"/>
            </div>
        )
    }
}

export default Rejectpage;