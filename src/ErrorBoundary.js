import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidCatch (error, errorInfo) {
    // You can also log the error to an error reporting service
    alert('LOL ! Bug found, will be fixed soon I guess !')
  }

  render () {
    return this.props.children
  }
}

export default ErrorBoundary
