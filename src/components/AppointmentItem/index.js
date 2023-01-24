import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {isStarred, title, date, id} = appointmentDetails

  const onClickStar = () => {
    toggleStar(id)
  }

  const starImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  //   const starImage = isStarred ? '
  // // https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png' : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  //   const starImage = isStarred ? ''

  return (
    <li>
      <div className="appointment-container">
        <div className="name-star-container">
          <p className="title-css">{title}</p>
          <button
            type="button"
            className="star-btn"
            data-testid="star"
            onClick={onClickStar}
          >
            <img src={starImage} alt="star" className="star" />
          </button>
        </div>
        <p className="date-css">
          Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
    </li>
  )
}

export default AppointmentItem
