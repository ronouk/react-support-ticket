import React from 'react';

const IndividualTicket = ({ individualTicketData }) => {
    console.log(individualTicketData)
    const { id, title, status, priority, description, customer, createdAt } = individualTicketData;
    return (
        <div className='individual-ticket bg-white px-5 py-8 rounded-md shadow-xl'>

            {/* ticket top section */}
            <div className='top-section flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center'>
                <h1 className='font-semibold text-md w-full lg:w-2/3'>{title}</h1>

                <div className={`text-sm flex items-center gap-2 px-3 py-2 rounded-3xl ${status == "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} w-full lg:w-1/3`}>
                    <div>
                        <i class={`fa-solid fa-circle text-sm ${status == "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}`}></i>
                    </div>
                    <span>{status}</span>
                </div>
            </div>

            {/* ticket description */}
            <div className='ticket-description text-gray-700 my-6'>
                <p>{description}</p>
            </div>

            {/* ticket bottom section */}
            <div className='bottom-section flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between text-sm leading-0 gap-2'>
                <div className='bottom-left flex items-center gap-1.5'>
                    <p>#{id}</p>
                    <p className={`uppercase text-xs ${priority == "High" ? "text-[#F83044]" : priority == "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{priority} Priority</p>
                </div>
                <div className='bottom-right flex items-center gap-2'>
                    <p>{customer}</p>
                    <div className='flex items-center gap-1.5'>
                        <i class="fa-regular fa-calendar"></i>
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default IndividualTicket;