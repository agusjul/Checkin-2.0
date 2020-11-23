import React from 'react';

import { useLoading, Puff } from '@agney/react-loading';

function Content() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="30" style={{ color: '#1f5b80'}}/>,
    });

    return (
        <div className="w-screen h-screen justify-center items-center flex">
            <div className="flex p-5 rounded-xl border-secondary border-opacity-50 border-2 w-60">
                {indicatorEl} <p className="font-semibold text-xl pl-2 text-secondary">Loading</p>
            </div>
        </div>
       
  );
}

export default Content;

// class Validationpage extends React.Component {
//     render(){
//         return(
//             <button type="button" class="bg-red-500" disabled>
//                 <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
//                 </svg>
//                 {indicatorEl}
//                 Processing
//             </button>
//         )
//     }
// }

// export default Validationpage;