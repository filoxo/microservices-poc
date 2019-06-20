import React from 'react'
import propTypes from 'prop-types'
import styles from './Button.css'

const Button = React.forwardRef((props, ref) => {
  const { type, secondary, terciary, ...rest } = props
  let className = styles.Button
  if (secondary) className = styles.ButtonSecondary
  if (terciary) className = styles.ButtonTerciary
  return (
    <button type={type} className={className} ref={ref} {...rest}>
      {props.children}
    </button>
  )
})

Button.defaultProps = {
  type: 'button',
  secondary: false,
  terciary: false
}

Button.propTypes = {
  type: propTypes.string,
  secondary: propTypes.bool,
  terciary: propTypes.bool
}

export default Button
