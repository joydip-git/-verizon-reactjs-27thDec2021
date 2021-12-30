import { Component } from "react"

const handleError = (OriginalComponent, errorCallback) => {
    class ErrorBoundary extends Component {
        state = {
            errorMessage: ''
        }
        static getDerivedStateFromError(info) {
            return {
                errorMessage: info.message
            }
        }
        render() {
            if (this.state.errorMessage !== '') {
                return <span>{this.state.errorMessage}</span>
            } else {
                return <OriginalComponent {...this.props} />
            }
        }
        componentDidCatch(info, stackTrace) {
            errorCallback({ errormessage: info.message, trace: stackTrace })
        }
    }
    return ErrorBoundary
}
export default handleError