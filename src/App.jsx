import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import StatusCard from './components/status-card/StatusCard'
import TicketArea from './components/ticket-area/TicketArea'

function App() {

  return (
    <div className='bg-gray-100'>
      <Navbar></Navbar>
      <div className="max-w-11/12 lg:max-w-5/6 mx-auto py-8">
        <StatusCard></StatusCard>
        <TicketArea></TicketArea>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
