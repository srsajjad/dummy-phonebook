import React from 'react'
import { connect } from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import InfoForm from './InfoForm'
import { makeStyles } from '@material-ui/core/styles'
import { setOpenDialog } from '../redux/PhoneAction'

const useStyles = makeStyles({
  root: {
    // display: 'flex'
  }
})

const EditDialog = props => {
  const classes = useStyles()
  const { setOpenDialog, isDialogOpen } = props

  const handleClose = () => {
    setOpenDialog({ bool: false })
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={isDialogOpen}
      className={classes.root}
    >
      <DialogTitle id='simple-dialog-title'>User Input Form</DialogTitle>
      <DialogContent>
        <InfoForm />
      </DialogContent>
    </Dialog>
  )
}

const mapDispatchToProps = dispatch => ({
  setOpenDialog: payload => dispatch(setOpenDialog(payload))
})

const mapStateToProps = state => ({
  isDialogOpen: state.PhoneReducer.isDialogOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)
