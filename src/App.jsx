import './App.css'
import Navbar from './components/navbar/Navbar'
import StatusCard from './components/status-card/StatusCard'
import TicketArea from './components/ticket-area/TicketArea'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-11/12 lg:max-w-5/6 mx-auto">
        <StatusCard></StatusCard>
        <TicketArea></TicketArea>
      </div>
    </>
  )
}

export default App
