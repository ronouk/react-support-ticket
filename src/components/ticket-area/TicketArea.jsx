import React from 'react';
import CustomerTicket from './customer-ticket/CustomerTicket';
import TicketStatus from './ticket-status/TicketStatus';

const TicketArea = ({ supportTicketData,inProgressCounter, setInProgressCounter }) => {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <CustomerTicket
                    supportTicketData={supportTicketData}
                    inProgressCounter = {inProgressCounter}
                    setInProgressCounter={setInProgressCounter}
                />
            </div>

            <div className="col-span-1">
                <TicketStatus />
            </div>
        </div>
    );
};

export default TicketArea;