import React, { useState } from 'react';
import TaskStatusCard from '../../task-status-card/TaskStatusCard';
import { toast } from 'react-toastify';

const TicketStatus = ({ inProgressCounter, setInProgressCounter, completedTask, setCompletedTask }) => {

    const [completedArray, setCompletedArray] = useState([])

    const addToCompleted = (singleTicketData) => {
        console.log(singleTicketData)

        const newCompletedArray = [...completedArray, singleTicketData]
        setCompletedArray(newCompletedArray);

        // console.log(newCompletedArray)

        toast(<span className='font-bold text-green-600'>Task Completed</span>)

        const newInProgressCounter = inProgressCounter.filter(singleData => (singleData.id !== singleTicketData.id));
        setInProgressCounter(newInProgressCounter);

        console.log(newInProgressCounter);
    }


    return (
        <div>
            {/* task status */}
            <div className='task-status mb-8'>
                <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Task status</h1>
                {inProgressCounter.length === 0 ? (
                    <h1>No ticket processed</h1>
                ) : (
                    inProgressCounter.map((singleTicketData) => (
                        <TaskStatusCard
                            key={singleTicketData.id}
                            singleTicketData={singleTicketData}
                            completedTask={completedTask}
                            setCompletedTask={setCompletedTask}
                            addToCompleted={addToCompleted}

                        />
                    ))
                )}
            </div>

            {/* Resolved task */}
            <div className='resolved-task'>
                <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Resolved task</h1>
                <div className='resolved-task-card'>

                    {
                        completedArray.length === 0 ? <h1>No Task completed</h1> :
                            (completedArray.map((eachCompletedData, index) => (<div key={index} className='bg-[#E0E7FF] px-5 py-3 rounded-lg shadow-xl mb-5'>
                                <h1 className='text-lg font-semibold'>{eachCompletedData.title}</h1>
                            </div>)))

                    }

                </div>
            </div>
        </div>
    );
};

export default TicketStatus;