import React from 'react'
import AddButton from './CardList/AddButton'
import EditDialog from './Dialog/EditDialog'
import CardList from './CardList/CardList'
import DeleteButton from './CardList/DeleteButton'
import './styles.css'

// redux imports
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Error boundary
import ErrorBoundary from './ErrorBoundary'

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <div className='main-root'>
            <AddButton />

            <EditDialog />

            <CardList />

            <DeleteButton />
          </div>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}
