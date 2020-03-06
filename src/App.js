import React, { useState } from 'react'
import { AddButton } from './AddButton'
import { EditDialog } from './EditDialog'
import CardList from './CardList'
import DeleteButton from './DeleteButton'
import { v4 as uuidv4 } from 'uuid'
import './styles.css'

// redux imports
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { PhoneReducer } from './PhoneReducer'
import { Provider } from 'react-redux'
import ErrorBoundary from './ErrorBoundary'

// Error boundary

let initId = uuidv4()

const reducer = {
  PhoneReducer: PhoneReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const preloadedState = {
  PhoneReducer: {
    [initId]: {
      id: initId,
      firstName: 'SR',
      lastName: 'Sajjad',
      phone: '+8801711267372',
      checked: false
    }
  }
}

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
})

export default function App () {
  const [open, setOpen] = useState(false)

  const handleClose = value => {
    setOpen(false)
  }

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className='main-root'>
          <AddButton setOpen={setOpen} />

          <EditDialog open={open} onClose={handleClose} />

          <CardList setOpen={setOpen} />

          <DeleteButton />
        </div>
      </ErrorBoundary>
    </Provider>
  )
}
