import React, { useState } from 'react'
import { useFormik } from 'formik'
import { IntlPhone } from './IntlPhone'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import { updateItem } from './PhoneAction'

// validation schema
const TestSchema = Yup.object({
  firstName: Yup.string()
    .min(2, `Can't be less than 2 chars`)
    .max(50, `Can't be more than 50 chars`)
    .required('First Name is a required field'),

  lastName: Yup.string()
    .min(2, `Can't be less than 2 chars`)
    .max(50, `Can't be more than 50 chars`)
    .required('Last Name is a required field')
})

function InfoForm (props) {
  // props
  const { onClose, activeId, state, updateItem } = props

  // phone hooks
  const [phone, setPhone] = useState(
    state.PhoneReducer[activeId].phone || '+880'
  )

  // submit function
  const updateList = values => {
    if (phone.length < 3) return

    let payload = {
      id: activeId,
      phone,
      checked: state.PhoneReducer[activeId].checked,
      ...values
    }

    updateItem(payload)
    onClose()
  }

  // inital values
  const initialValues = {
    firstName: state.PhoneReducer[activeId].firstName,
    lastName: state.PhoneReducer[activeId].lastName
  }

  // formik hook
  const formik = useFormik({
    initialValues,
    validationSchema: TestSchema,
    onSubmit: updateList
  })

  // formik object
  const { getFieldProps: gfp, handleSubmit, errors: err, touched: t } = formik

  // common error styling
  const errorStyle = {
    color: 'red',
    fontSize: '13px',
    marginBottom: '10px',
    width: '80%'
  }

  return (
    <form className='test-form' onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <input className='input-name' name='firstName' {...gfp('firstName')} />
      <div
        style={{
          visibility: t.firstName && err.firstName ? 'visible' : 'hidden',
          ...errorStyle
        }}
      >
        {err.firstName}
      </div>

      <label htmlFor='lastName'>Last Name</label>
      <input className='input-name' name='lastName' {...gfp('lastName')} />

      <div
        style={{
          visibility: t.lastName && err.lastName ? 'visible' : 'hidden',
          ...errorStyle
        }}
      >
        {err.lastName}
      </div>

      <label htmlFor='phone'>Phone Number</label>
      <IntlPhone name='phone' phone={phone} setPhone={setPhone} />
      <div
        style={{
          visibility: phone.length < 3 ? 'visible' : 'hidden',
          ...errorStyle
        }}
      >{`Phone Number Needed`}</div>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ alignSelf: 'right', marginLeft: '25%' }}
      >
        Save
      </Button>
    </form>
  )
}

const mapStateToProps = state => ({
  activeId: state.PhoneReducer.activeId,
  state: state
})

const mapDispatchToProps = dispatch => ({
  updateItem: activeId => dispatch(updateItem(activeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoForm)
