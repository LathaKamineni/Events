// Write your code hereimport
import './index.css'
const eventStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  initial: 'INITIAL',
}
const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus} = props
  const renderInitialView = () => {
    return (
      <p className="initial-heading">
        Click on an event, to view its registration details
      </p>
    )
  }
  const yetToRegisterView = () => {
    return (
      <div className="yet-to-register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-img"
        />
        <p className="initial-heading">
          A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form
        </p>
        <button className="register-button">Register Here</button>
      </div>
    )
  }
  const renderRegisteredView = () => {
    return (
      <div className="yet-to-register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-img"
        />
        <h1 className="regestered-text">
          You have already registered for the event
        </h1>
      </div>
    )
  }
  const registrationClosedView = () => {
    return (
      <div className="yet-to-register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registraions-closed-img"
        />
        <h1 className="regestered-text">Registrations Are Closed Now!</h1>
        <p className="initial-heading">
          Stay tuned. We will reopen the registration soon!
        </p>
      </div>
    )
  }
  switch (activeEventStatus) {
    case eventStatus.initial:
      return renderInitialView()
    case eventStatus.yetToRegister:
      return yetToRegisterView()
    case eventStatus.registered:
      return renderRegisteredView()
    case eventStatus.registrationClosed:
      return registrationClosedView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
