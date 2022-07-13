import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA4oQPk4puiiv0KIfj_6TMiIK7YPBPvZTM',
  authDomain: 'brille-handbags.firebaseapp.com',
  projectId: 'brille-handbags',
  storageBucket: 'brille-handbags.appspot.com',
  messagingSenderId: '721387413502',
  appId: '1:721387413502:web:f07d50578768315aa22aaf',
  measurementId: 'G-0RJKF36DWS',
};

// Initialize Firebase & export it
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
