import React, { Component } from 'react'
import Loading from '../loading/loading-component'

const withLoading = (WrappedComponent) => {
    return class ComponentWithLoading extends Component {
        render() {
            const { isLoading } = this.props

            if (isLoading) return <Loading />
            return <WrappedComponent {...this.props} />
        }
    }
}


export default withLoading