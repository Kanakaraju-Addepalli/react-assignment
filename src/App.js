import {useState} from 'react'
import './App.css' // Import the CSS file for styling

import VehicleList from './components/VehicleList'

const vehiclesData = [
  {
    id: 1,
    name: 'Vehicle 1',
    type: 'Car',
    capacity: 4,
  },
  {
    id: 2,
    name: 'Vehicle 2',
    type: 'Van',
    capacity: 6,
  },
  // Add more vehicle entries as needed
]

const App = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [availableVehicles, setAvailableVehicles] = useState([])

  const handleSearch = () => {
    if (!pointA || !pointB || !selectedDate) {
      alert('Please fill all the input fields.')
    } else {
      setTimeout(() => {
        setAvailableVehicles(vehiclesData)
        setPointA('')
        setPointB('')
        setSelectedDate('')
      }, 1000)
    }
  }

  return (
    <>
      <div className="container">
        <h1>Airport Transfer Booking App</h1>
        <div className="form-group">
          <label>
            Point A:
            <input
              type="text"
              value={pointA}
              onChange={e => setPointA(e.target.value)}
              placeholder="From"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Point B:
            <input
              type="text"
              value={pointB}
              onChange={e => setPointB(e.target.value)}
              placeholder="To"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date:
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
            />
          </label>
        </div>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <VehicleList vehicles={availableVehicles} />
    </>
  )
}

export default App;
