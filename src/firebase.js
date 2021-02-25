import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: 'AIzaSyBKIOXoR1AVVVfqrGKFkE9a7bivh-Px4II',
    authDomain: 'wuor-7c23f.firebaseapp.com',
    projectId: 'wuor-7c23f',
    storageBucket: 'wuor-7c23f.appspot.com',
    messagingSenderId: '150895673442',
    appId: '1:150895673442:web:39869b1eae1a108519113b',
    measurementId: 'G-20Z7D6GQH2'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}