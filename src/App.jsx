import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import StatusCard from './components/status-card/StatusCard';
import TicketArea from './components/ticket-area/TicketArea';
import Footer from './components/footer/Footer'; // assuming you have this

function App() {
  const [supportTicketData, setSupportTicketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []); // Empty dependency array ensures this runs only once after mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className="max-w-11/12 lg:max-w-5/6 mx-auto py-8">
        <StatusCard />
        {/* Now passing the actual data, not a promise */}
        <TicketArea supportTicketData={supportTicketData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;