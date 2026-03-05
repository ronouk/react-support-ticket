import React from 'react';

const StatusCard = ({inProgressCounter}) => {
    
    return (
        <div className='in-process grid grid-cols-1 md:grid-cols-2 gap-10 grow justify-between mx-auto md:my-15'>
            <div className="relative overflow-hidden in-progress space-y-4 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white py-24 text-center rounded-xl">
                <div className='absolute scale-120 bg-[url("/vector1.png")] inset-0 bg-no-repeat'></div>
                <div className='absolute scale-120 bg-[url("/vector1.png")] scale-x-[-1] inset-0 bg-no-repeat'></div>
                <h1 className='text-xl'>In-Progress</h1>
                <h1 className='font-bold text-2xl'>{inProgressCounter.length}</h1>
            </div>
            <div className="resolved relative overflow-hidden in-progress space-y-4 bg-linear-to-br from-[#54CF68] to-[#00827A] text-white py-24 text-center rounded-xl">
                <div className='absolute scale-120 bg-[url("/vector1.png")] inset-0 bg-no-repeat'></div>
                <div className='absolute scale-120 bg-[url("/vector1.png")] scale-x-[-1] inset-0 bg-no-repeat'></div>
                <h1 className='text-xl'>Resolved</h1>
                <h1 className='font-bold text-2xl'>0</h1>
            </div>
        </div>
    );
};

export default StatusCard;