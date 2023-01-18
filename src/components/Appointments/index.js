import {Component} from 'react'

import './index.css'

class Appointments extends Component {
  state = {userTitle: '', userDate: '', appointmentsList: []}

  addTitle = event => {
    this.setState({userDate: event.target.value})
  }

  addDate = event => {
    this.setState({userDate: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="top-card-container">
            <div className="add-appointment-container">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.addAppointment}>
                <label className="title" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="title-input"
                  placeholder="Title"
                  onChange={this.addTitle}
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
              <button type="button" className="starred-btn">
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
