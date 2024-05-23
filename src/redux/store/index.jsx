import { configureStore } from "@reduxjs/toolkit"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import authReducer from "../slice/auth"
import skillsReducer from "../slice/skills"
import experinceReducer from "../slice/experinces"

const rootReducer = {
    auth: authReducer,
    skills: skillsReducer,
    experince: experinceReducer
}

const store = configureStore({
    reducer: rootReducer
})

const StoreProvider = ({children}) => {
  return (
    <Provider store={store} >{children}</Provider>
  )
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default StoreProvider