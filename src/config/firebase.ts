import * as firebase from 'firebase/app';
/* eslint-disable */
import 'firebase/auth';
import 'firebase/analytics';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBStdQZq4JHOdJEY9TvKgYuiVvUE3UxNlc',
  authDomain: 'weaver-reports.firebaseapp.com',
  databaseURL: 'https://weaver-reports.firebaseio.com',
  projectId: 'weaver-reports',
  storageBucket: 'weaver-reports.appspot.com',
  messagingSenderId: '711746354089',
  appId: '1:711746354089:web:970bbc7faa2cdb1088a2b8',
  measurementId: 'G-FV1DNJMN01',
});
// Initialize Firebase

//firebase.analytics();

export default app;
