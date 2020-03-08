import React from 'react'
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

const DeleteButton = props => {
  const { deleteAll, cardList } = props

  if (!cardList.length) return null

  return (
    <Button
      style={{ marginTop: '25px' }}
      variant='contained'
      color='secondary'
      startIcon={<DeleteIcon />}
      onClick={() => deleteAll()}
    >
      Delete
    </Button>
  )
}

const mapStateToProps = state => ({
  cardList: Object.values(state.PhoneReducer).filter(n => !!n.phone)
})

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch({ type: 'DELETE_SELECTED_ITEMS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
