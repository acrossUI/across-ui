import * as firebase from 'firebase/app';
/* eslint-disable */
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBStdQZq4JHOdJEY9TvKgYuiVvUE3UxNlc',
  authDomain: 'weaver-reports.firebaseapp.com',
  databaseURL: 'https://weaver-reports.firebaseio.com',
  projectId: 'weaver-reports',
  storageBucket: 'weaver-reports.appspot.com',
  messagingSenderId: '711746354089',
  appId: '1:711746354089:web:cc7a1fed63f881a288a2b8',
  measurementId: 'G-BZZ965RVDN',
});
// Initialize Firebase

//firebase.analytics();

export default app;

const db = app.firestore();
