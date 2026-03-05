import React from 'react';

const TaskStatusCard = ({ singleTicketData, completedTask, setCompletedTask, addToCompleted }) => {
    const handleCompleted = (singleTicketData) => {
        // console.log(inProgressCounterData)
        const newCompletedTask = [...completedTask, singleTicketData];
        setCompletedTask(newCompletedTask);

    }
    return (
        <div className='task-status-card'>
            <div className='bg-white px-5 py-8 space-y-5 rounded-lg shadow-xl mb-5'>
                <h1 className='text-lg font-semibold'>{singleTicketData.title}</h1>
                <button onClick={() => { handleCompleted(singleTicketData), addToCompleted(singleTicketData) }} className='btn bg-green-600 text-white hover:bg-gray-700'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatusCard;