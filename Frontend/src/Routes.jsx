import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignInForm from './Components/SignInForm'
import SignUpForm from './Components/SignUpForm'
import UserDashboard from './Components/UserDashboard'

function RouterPage() {
  return (
<BrowserRouter>
<Routes>

<Route path='/' element={<SignInForm/>}/>


<Route path='/signup' element={<SignUpForm/>}/>
<Route path='/dashboard' element={<UserDashboard/>}/>


</Routes>



</BrowserRouter>
  )
}

export default RouterPage