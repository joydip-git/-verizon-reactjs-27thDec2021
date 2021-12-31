import React from 'react'
import ThemedContext from '../appcontext/themedcontext'

const OrderSubmitButton = () => {
    return (
        <ThemedContext.Consumer>
            {
                (contextData) => {
                    return <button style={{ backgroundColor: contextData.backColor }}>
                        Submit Order
                    </button>
                }
            }
        </ThemedContext.Consumer>
    )
}

export default OrderSubmitButton

/*
function Consume(props) {
    const element = props.children({ backColor: 'yellow', btnText: 'Themed Button' })
    return element
}
*/
