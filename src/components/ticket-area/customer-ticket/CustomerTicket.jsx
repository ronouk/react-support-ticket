import React from 'react';
import IndividualTicket from './IndividualTicket';

const CustomerTicket = ({ supportTicketData }) => {
    
    return (
        <div>
            <h1 className='text-2xl font-bold text-[#34485A] mb-8'>Customer Tickets</h1>
            <div className='individual-ticket-area grid grid-cols-1 md:grid-cols-2 gap-5'>

                {
                    supportTicketData.map(individualTicketData => <IndividualTicket key={individualTicketData.id} individualTicketData ={individualTicketData}></IndividualTicket>)
                }

            </div>
        </div>
    );
};

export default CustomerTicket;