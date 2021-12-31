import React from 'react'
//import UserContext from '../appcontext/usercontext'
//import PropTypes from 'prop-types'
import ThemedButton from './ThemedButton'

const DashBoard = props => {

    return (
        // <UserContext.Provider value={localStorage.getItem('userid')}>
        <div>
            {/* <ThemedButton theme={props.backColor} textValue={props.value}/> */}
            <ThemedButton />
        </div >
        // </UserContext.Provider>

    )
}

// DashBoard.propTypes = {
//     backColor: PropTypes.string.isRequired,
//     value:PropTypes.string.isRequired
// }

export default DashBoard
