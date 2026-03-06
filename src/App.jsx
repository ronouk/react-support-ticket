import { useState, useEffect, Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import StatusCard from './components/status-card/StatusCard';
import TicketArea from './components/ticket-area/TicketArea';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  const [supportTicketData, setSupportTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inProgressCounter, setInProgressCounter] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const handleCompleteTask = (singleTicketData) => {
    const completedRemovedFromAll = supportTicketData.filter(singleData => singleData.id !== singleTicketData.id)
    setSupportTicketData(completedRemovedFromAll);
  }

  useEffect(() => {
    fetch("/support_ticket.json")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setSupportTicketData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it renders only once, after fetching done

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className="max-w-11/12 lg:max-w-5/6 mx-auto py-8">
        <StatusCard
          inProgressCounter={inProgressCounter}
          completedTask={completedTask}
          setCompletedTask={setCompletedTask}
        />

        <Suspense fallback="Data loading...">
          <TicketArea
            supportTicketData={supportTicketData}
            setSupportTicketData = {setSupportTicketData}
            inProgressCounter={inProgressCounter}
            setInProgressCounter={setInProgressCounter}
            completedTask={completedTask}
            setCompletedTask={setCompletedTask}
            handleCompleteTask={handleCompleteTask}
            // handleSelectedTicket={handleSelectedTicket}
          />
        </Suspense>
      </div>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;