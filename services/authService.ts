// This service is responsible for handling authentication related operations like login, logout, etc.
// It uses Firebase Auth SDK to perform these operations.
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut, updateEmail, updateEmail as updateEmailFirebase, updatePassword,
    updatePassword as updatePasswordFirebase
} from "firebase/auth";

export class AuthService {
    provider: any;

    constructor(authProvider: any) {
        this.provider = authProvider;
    }

    getCurrentUser() {
        return this.provider.currentUser;
    }

    signup(email, password) {
        return createUserWithEmailAndPassword(this.provider, email, password)
    }

    login(email, password) {
        return signInWithEmailAndPassword(this.provider, email, password)
    }

    logout() {
        return signOut(this.provider);
    }

    resetPassword(email) {
        return sendPasswordResetEmail(this.provider, email);
    }

    updateEmail(email) {
        return updateEmail(this.getCurrentUser(), email);
    }

    updatePassword(password) {
        return updatePassword(this.getCurrentUser(), password);
    }
}