import PropTypes from 'prop-types'

export function BorderDetails({ name, onClick }) {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

BorderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

