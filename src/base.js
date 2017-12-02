import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  	apiKey: "AIzaSyDudnatZqjorfX-pynekmYklK7yAgvNbtI",
    authDomain: "chatbox-ef5d7.firebaseapp.com",
    databaseURL: "https://chatbox-ef5d7.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base