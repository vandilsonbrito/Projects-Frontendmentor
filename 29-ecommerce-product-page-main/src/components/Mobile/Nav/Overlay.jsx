import PropTypes from 'prop-types';

export default function Overlay({ className }) {
  return (
    <div className={className}></div>
  )
}

Overlay.propTypes = {
    className: PropTypes.string.isRequired
}
