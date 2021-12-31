import React, { useContext } from 'react'
import ThemedContext from '../appcontext/themedcontext'
import UserContext from '../appcontext/usercontext'

const SubmitProductButton = () => {
    const contextData = useContext(ThemedContext)
    console.log(contextData)
    const userData = useContext(UserContext)
    console.log(userData ? userData : 'no data')
    return (
        <div>
            <span>{userData}</span>
            <br />
            <button style={{ backgroundColor: contextData.backColor }}>
                Product {contextData.btnText}
            </button>
        </div>
    )
}

export default SubmitProductButton
