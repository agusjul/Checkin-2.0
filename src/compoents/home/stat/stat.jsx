import React from 'react';
import symbol from '../../../images/vector.svg';

class Stat extends React.Component {
    render(){
        return(
            <div  className="relative w-1/3 h-screen content-center flex items-center">
                <div>
                    <div className="w-full bg-primary rounded-md p-5 shadow-xl m-8 p-8">
                        <p className="text-white text-md">Orang Masuk</p>
                        <p className="text-white text-5xl font-semibold leading-none">250</p>
                        <div className="flex items-center">
                            <div className="bg-white bg-opacity-25 rounded w-5 h-5 flex align-middle justify-center mr-2">
                                <img src={symbol} className="w-3"/>
                            </div>
                            <p className="text-white text-md">2.3%</p>
                        </div>
                    </div>
                    <div className="w-full bg-danger rounded-md p-5 shadow-xl m-8 p-8">
                        <p className="text-white text-md">Orang Keluar</p>
                        <p className="text-white text-5xl font-semibold leading-none">74</p>
                        <div className="flex items-center">
                            <div className="bg-white bg-opacity-25 rounded w-5 h-5 flex align-middle justify-center mr-2">
                                <img src={symbol} className="w-3" />
                            </div>
                            <p className="text-white text-md">23.1%</p>
                        </div>
                    </div> <div className="w-full bg-white bg-opacity-50 rounded-md p-5 shadow-xl m-8 p-8">
                        <p className="text-secondary text-md">Kapasitas Gedung</p>
                        <p className="text-secondary text-5xl font-semibold leading-none">82%</p>
                        <div className="flex items-center relative pt-2">
                            <div className="border-info rounded-full w-4/5 border-opacity-50 border-2 absolute z-1">
                            </div>
                            <div className="border-info w-3/5  rounded-full border-2 absolute z-2">
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Stat;