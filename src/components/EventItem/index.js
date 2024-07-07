// Write your code here
import './index.css'
const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEvent
  const onClickEventItem = () => {
    onClickEvent(id)
  }
  return (
    <li className="event-container">
      <button className="event-img-button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
