import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import InfoForm from './InfoForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    // display: 'flex'
  }
})

export const EditDialog = props => {
  const classes = useStyles()
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.root}
    >
      <DialogTitle id="simple-dialog-title">User Input Form</DialogTitle>
      <DialogContent>
        <InfoForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}
