The solution involves using async/await to ensure the write operation completes before attempting to read the data. 
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// Initialize Firebase
// ... your firebase config ...
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function writeAndReadData(docRef, data) {
  await setDoc(docRef, data);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

// Example usage
const docRef = doc(db, "yourCollection", "yourDocument");
const data = { name: "Example Name", value: 123 };

writeAndReadData(docRef, data).catch(err => {
    console.error("Error accessing data", err);
});
```