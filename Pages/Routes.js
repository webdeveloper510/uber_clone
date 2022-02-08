import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'
import Register from './Register.js'
import Forget from './Forget.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "Register" component = {Register} title = "Register" />
         <Scene key = "Forget" component = {Forget} title = "Forget" />
      </Scene>
   </Router>
)
export default Routes