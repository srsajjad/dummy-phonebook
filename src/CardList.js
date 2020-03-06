import React from 'react'
import { PhoneCard } from './PhoneCard'
import { connect } from 'react-redux'

const CardList = props => {
  const { cardList, setOpen } = props

  console.log('card list', cardList)

  return (
    <>
      {cardList.map(({ id, firstName, checked, phone }) => (
        <PhoneCard
          key={id}
          id={id}
          firstName={firstName}
          checked={checked}
          setOpen={setOpen}
          phone={phone}
        />
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  cardList: Object.values(state.PhoneReducer).filter(n => !!n.phone)
})

export default connect(mapStateToProps, null)(CardList)
