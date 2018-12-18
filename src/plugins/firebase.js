import { config } from '../config/firebase'
import firebase from 'firebase'

const fb = firebase.initializeApp(config)

/* Auth settings */
export const AUTH = fb.auth()

/* Database settings */
export const DB = fb.firestore()
DB.settings({ timestampsInSnapshots: true })

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$db = DB
}
