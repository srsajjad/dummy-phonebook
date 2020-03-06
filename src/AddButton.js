import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { setNewItem, setActiveId } from './PhoneAction'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles(theme => ({
  fab: {
    // margin: theme.spacing(2)
  }
}))

let AddButton = props => {
  const { fab } = useStyles()
  const { setOpen, setNewItem, setActiveId } = props

  return (
    <IconButton
      style={{ marginBottom: '25px' }}
      aria-label='add'
      onClick={() => {
        let id = uuidv4()
        setOpen(true)
        setNewItem(id)
        setActiveId({ id })
      }}
      {...props}
    >
      <Fab color='primary' className={fab}>
        <AddIcon />
      </Fab>
    </IconButton>
  )
}

const mapDispatchToProps = dispatch => ({
  setNewItem: id =>
    dispatch(
      setNewItem({
        id,
        firstName: '',
        lastName: '',
        checked: false
      })
    ),

  setActiveId: payload => dispatch(setActiveId(payload))
})

AddButton = connect(null, mapDispatchToProps)(AddButton)

export { AddButton }
