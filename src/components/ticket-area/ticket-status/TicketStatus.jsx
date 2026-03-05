import React from 'react';

const TicketStatus = () => {
    return (
        <div>
            {/* task status */}
            <div className='task-status mb-8'>
                <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Task status</h1>
                <div className='task-status-card'>
                    <div className='bg-white px-5 py-8 space-y-5 rounded-lg shadow-xl'>
                        <h1 className='text-lg font-semibold'>Task title</h1>
                        <button className='btn bg-green-600 text-white hover:bg-gray-700'>Complete</button>
                    </div>
                </div>
            </div>

            {/* Resolved task */}
            <div className='resolved-task'>
                <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Resolved task</h1>
                <div className='resolved-task-card'>
                    <div className='bg-[#E0E7FF] px-5 py-3 rounded-lg shadow-xl'>
                        <h1 className='text-lg font-semibold'>Task title</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketStatus;