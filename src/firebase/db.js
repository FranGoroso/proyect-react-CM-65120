import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { app } from './config';

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getCategoryItems = async (id) => {
    const normalizedId = id.trim().toLowerCase(); 
    const q = query(collection(db, "products"), where("category", "==", normalizedId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getItemDetail = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
        throw new Error(`No se encontró un producto con el ID ${id}`);
    }
};
