import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firebaseConfig} from "../utils/configs";
import { getStorage, ref } from "firebase/storage";
import {Constants} from "../utils/contants";
import { getFirestore} from "firebase/firestore";
import {AuthService} from "../services/authService";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const fileStorage = getStorage()
export const database = getFirestore(app);

export default app;
export const publicFileStoreRef = ref(fileStorage, Constants.PUBLIC_STORAGE_ROOT);
export const protectedFileStoreRef = ref(fileStorage, Constants.PRIVATE_STORAGE_ROOT);
export const authService = new AuthService(auth);

