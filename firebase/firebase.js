import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firebaseConfig} from "../utils/configs";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;