import './index.css'

const VehicleList = ({vehicles}) => (
  <div className="container">
    {vehicles.length === 0 ? (
      <p className="no-vehicles">
        No vehicles available for the selected journey and date.
      </p>
    ) : (
      <div>
        <h2 className="available-heading">Available Vehicles:</h2>
        <ul className="vehicle-list">
          {vehicles.map(vehicle => (
            <li key={vehicle.id}>
              <span className="vehicle-name">{vehicle.name}</span> -{' '}
              {vehicle.type} (Capacity: {vehicle.capacity})
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

export default VehicleList
