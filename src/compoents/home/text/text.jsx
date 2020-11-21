import React from 'react';
import logobi from '../../../images/BI.png';

class Textcomponent extends React.Component{
    render(){
        return(
            <div className="relative w-2/3 h-screen flex items-center justify-center ">
                <div className=" w-2/3">
                        <div className="w-8/12 mb-10">
                            <img src={logobi} className="w-4/12" />
                        </div>
                        <p className=" text-white text-6xl font-bold mb-10">Selamat Datang di Bank Indonesia</p>
                        <p className=" text-white text-3xl font-light">Pengunjung diharapkan mengikuti protokol kesehatan Bank Indonesia</p>
                </div>
            </div>
        )
    }
}

export default Textcomponent;