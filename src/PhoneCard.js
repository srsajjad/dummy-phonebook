import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear'
import { connect } from 'react-redux'
import { setActiveId, deleteItem, toggleChecked } from './PhoneAction'
import './PhoneCard.css'

let PhoneCard = props => {
  const {
    firstName,
    phone,
    id,
    checked,
    setOpen,
    setActiveId,
    deleteItem,
    toggleChecked
  } = props

  return (
    <Paper elevation={3} className='phone-card  flex'>
      <div className='check f-10 a-center j-center flex'>
        <Checkbox
          onChange={e => {
            toggleChecked({ id })
          }}
          color='primary'
          //   className=''
          inputProps={{ 'aria-label': 'primary checkbox' }}
          checked={checked}
        />
      </div>

      <div className='content flex  f-column f-60 j-center'>
        <div className='name'>{firstName}</div>
        <div className='phone t-left'>{phone}</div>
      </div>

      <div className='ctl flex f-column f-30 a-center j-center'>
        <div className='edit'>
          <EditIcon
            onClick={() => {
              setOpen(true)
              setActiveId({ id })
            }}
            htmlColor='black'
          />
        </div>
        <div className='dlt'>
          <ClearIcon onClick={() => deleteItem({ id })} htmlColor='grey' />
        </div>
      </div>
    </Paper>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveId: id => dispatch(setActiveId(id)),
  deleteItem: id => dispatch(deleteItem(id)),
  toggleChecked: id => dispatch(toggleChecked(id))
})

PhoneCard = connect(null, mapDispatchToProps)(PhoneCard)

export { PhoneCard }
