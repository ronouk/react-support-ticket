import React from 'react';

const CustomerTicket = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Customer Tickets</h1>
            <div className='individual-ticket-area'>
                <div className='individual-ticket bg-white px-5 py-8 rounded-md shadow-xl'>

                    {/* ticket top section */}
                    <div className='top-section flex justify-between items-center'>
                        <h1 className='font-semibold text-lg'>Title here</h1>
                        <div className='bg-green-200 flex gap-2 px-5 py-2 rounded-3xl'>
                            <div>
                                <i class="fa-solid fa-circle text-green-700"></i>
                            </div>
                            <span>In-Progress</span>
                        </div>
                    </div>

                    {/* ticket description */}
                    <div className='ticket-description text-gray-700 my-6'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi ea laboriosam, saepe quaerat sit veniam voluptatum quasi cum commodi..</p>
                    </div>

                    {/* ticket bottom section */}
                    <div className='bottom-section flex justify-between'>
                        <div className='bottom-left flex gap-4'>
                            <p>#1001</p>
                            <p className='uppercase'>Priority</p>
                        </div>
                        <div className='bottom-right flex gap-4'>
                            <p>Customer name</p>
                            <div className='flex items-center gap-2'>
                                <i class="fa-regular fa-calendar"></i>
                                <p>Ticket date</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CustomerTicket;