import React from 'react'
import UserContext from '../appcontext/usercontext'

const Login = (props) => {
    localStorage.setItem('userid', 'joyd@gmail.com')
    return (
        // <UserContext.Provider value='joydip@gmail.com'>
        <div>
            Login <br />
            {
                props.children
            }
        </div>
        //</UserContext.Provider>
    )
}

export default Login
