import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/init';

const firestore = getFirestore(app);

export async function retriveData(collectionName:string){
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data(),
    }))

    return data
}