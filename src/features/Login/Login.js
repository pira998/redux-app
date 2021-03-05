import React from 'react'
import {useDispatch} from 'react-redux'
import {
    setUser,
    logOut,
    selectUser,
} from './userSlice'


function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const loginToApp = () =>{
         dispatch(setUser({user:"Piraveen"}))

    }


    return (
        <div>
            Hi i am using redux with react
            <button onClick={loginToApp} >Log me in</button>
            <button onClick={()=>dispatch(logout()) } >Log out</button>
        </div>
    )
}

export default Login
