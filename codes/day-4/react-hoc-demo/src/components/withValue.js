import { Component } from "react"

const withValue = (OriginalComponent) => {

    class WithValue extends Component {
        state = {
            value: 0
        }
        increaseValueHandler = () => {
            this.setState(
                (cs) => {
                    return {
                        value: cs.value + 1
                    }
                }
            )
        }
        render() {
            return <OriginalComponent 
                value={this.state.value} increaseValueHandler={this.increaseValueHandler}
                {...this.props} />
        }
    }

    return WithValue
}
export default withValue