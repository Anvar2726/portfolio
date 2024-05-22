import { configureStore } from "@reduxjs/toolkit"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import authReducer from "../slice/auth"

const rootReducer = {
    auth: authReducer
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