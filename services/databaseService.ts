// This service is used to store data in firestore and local storage. It provides methods to store and retrieve data.


export class DatabaseService {
    constructor() {
    }

    //
    // // Store data in firestore
    // async storeDataInFirestore(collection: string, data: any) {
    //     try {
    //         await firebase.firestore().collection(collection).add(data);
    //         return true;
    //     } catch (error) {
    //         console.error('Error in storing data in firestore', error);
    //         return false;
    //     }
    // }
    //
    // // Get data from firestore
    // async getDataFromFirestore(collection: string) {
    //     try {
    //         const snapshot = await firebase.firestore().collection(collection).get();
    //         return snapshot.docs.map(doc => doc.data());
    //     } catch (error) {
    //         console.error('Error in getting data from firestore', error);
    //         return [];
    //     }
    // }
    //
    // // Store data in local storage
    // storeDataInLocalStorage(key: string, data: any) {
    //     try {
    //         localStorage.setItem(key, JSON.stringify(data));
    //         return true;
    //     } catch (error) {
    //         console.error('Error in storing data in local storage', error);
    //         return false;
    //     }
    // }
    //
    // // Get data from local storage
    // getDataFromLocalStorage(key: string) {
    //     try {
    //         const data = localStorage.getItem(key);
    //         return data ? JSON.parse(data) : null;
    //     } catch (error) {
    //         console.error('Error in getting data from local storage', error);
    //         return null;
    //     }
    // }
}