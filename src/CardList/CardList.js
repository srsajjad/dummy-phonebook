import React from 'react'
import { PhoneCard } from './PhoneCard'
import { connect } from 'react-redux'
import { setOpenDialog } from '../redux/PhoneAction'

const CardList = props => {
  const { cardList, setOpenDialog } = props

  console.log('card list', cardList)

  return (
    <>
      {cardList.map(({ id, firstName, checked, phone }) => (
        <PhoneCard
          key={id}
          id={id}
          firstName={firstName}
          checked={checked}
          setOpenDialog={setOpenDialog}
          phone={phone}
        />
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  cardList: Object.values(state.PhoneReducer).filter(n => !!n.phone)
})

const mapDispatchToProps = dispatch => ({
  setOpenDialog: payload => dispatch(setOpenDialog(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
