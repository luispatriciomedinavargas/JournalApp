import { db } from "../firebase/firebase-Config"

export const loadNotes = async (uid) => {
    const noteSnap = await db.collection(`${uid}/R0788XSagBuaNw3aRerS/notes`).get();
    const notes = [];
    noteSnap.forEach(snapHijo => {

        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()

        })
    });
    console.log(notes);
    return notes;
}