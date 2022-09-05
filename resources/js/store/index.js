import { createStore, createLogger } from 'vuex'
import  Users  from "./Modules/User"
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
    Users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
