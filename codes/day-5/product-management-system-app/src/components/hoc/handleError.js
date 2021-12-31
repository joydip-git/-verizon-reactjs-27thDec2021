import { Component } from "react"

const handleError = (WrappedComponent, loggerCallback) => {
    class ErrorBoundary extends Component {

        state = {
            errorMessage: ''
        }
        static getDerivedStateFromError(errInfo) {
            return {
                errorMessage: errInfo.message
            }
        }
        render() {
            if (this.state.errorMessage === '')
                return <WrappedComponent {...this.props} />
            else
                return <span>{this.state.errorMessage}</span>
        }
        componentDidCatch(errInfo, stackTrace) {
            loggerCallback({ errInfo, stackTrace })
        }
    }
    return ErrorBoundary
}
export default handleError;