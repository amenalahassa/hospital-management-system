import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firebaseConfig} from "../utils/configs";
import { getStorage, ref } from "firebase/storage";
import {Constants} from "../utils/contants";

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

const storage = getStorage()

export const publicMediaStoreRef = ref(storage, Constants.PUBLIC_STORAGE_ROOT);
export const protectedMediaStoreRef = ref(storage, Constants.PRIVATE_STORAGE_ROOT);