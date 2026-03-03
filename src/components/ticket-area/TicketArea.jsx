import React from 'react';
import CustomerTicket from './customer-ticket/CustomerTicket';
import TicketStatus from './ticket-status/TicketStatus';

const TicketArea = () => {
    return (
        <div className='flex justify-between'>
            <CustomerTicket></CustomerTicket>
            <TicketStatus></TicketStatus>
        </div>
    );
};

export default TicketArea;