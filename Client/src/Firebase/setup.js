import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
