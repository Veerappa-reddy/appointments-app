import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {userTitle: '', enrollDate: '', appointmentsList: []}

  addTitle = event => {
    this.setState({userTitle: event.target.value})
  }

  addDate = event => {
    this.setState({enrollDate: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()

    const {userTitle, enrollDate} = this.state

    const appointment = {
      id: uuidv4(),
      title: userTitle,
      date: enrollDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, appointment],
      userTitle: '',
      enrollDate: '',
    }))
  }

  toggleStar = id => {
    const {appointmentsList} = this.state

    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(appointment => {
        if (appointment.id === id) {
          return {...appointment, isStarred: !appointment.isStarred}
        }
        return appointment
      }),
    }))
  }

  filterAppointments = () => {
    const {appointmentsList} = this.state

    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        appointment => appointment.isStarred === true,
      ),
    }))
  }

  renderAppointments = () => {
    const {appointmentsList} = this.state

    return appointmentsList.map(eachAppointment => (
      <AppointmentItem
        appointmentDetails={eachAppointment}
        key={eachAppointment.id}
        toggleStar={this.toggleStar}
        starredAppointments={this.starredAppointments}
      />
    ))
  }

  render() {
    const {userTitle, enrollDate} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="top-card-container">
            <div className="add-appointment-container">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.addAppointment} className="appointment-form">
                <label className="title" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="title-input"
                  placeholder="Title"
                  onChange={this.addTitle}
                  value={userTitle}
                />

                <label className="date" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="date-input"
                  onChange={this.addDate}
                  value={enrollDate}
                />

                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="bottom-card-container">
            <div className="appointments-container">
              <h1 className="appointments">Appointments</h1>
              <button
                type="button"
                className="starred-btn"
                onClick={this.filterAppointments}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">{this.renderAppointments()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
