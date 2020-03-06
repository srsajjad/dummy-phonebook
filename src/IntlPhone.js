import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const IntlPhone = props => {
  const { phone, setPhone, defaultValue } = props
  return (
    <PhoneInput
      value={phone}
      onChange={phone => setPhone(phone)}
      country={'us'}
    />
  )
}
