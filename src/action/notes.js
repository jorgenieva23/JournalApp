import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (note) => ({
  type: types.notesLoad,
  payload: note,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    try {
      const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
      await updateDoc(noteRef, noteToFirestore);
      dispatch(refreshNote(note.id, noteToFirestore));
      Swal.fire("Saved", note.title, "success");
    } catch (error) {
      console.error("Error updating document: ", error);
      Swal.fire("Error", "There was an error saving the note", "error");
    }
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.file({
      title: "Uploading...",
      title: "Pleace wait ...",
      allowOutsideClick: false,
      onbeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteRef = doc(db, `${uid}/journal/notes/${id}`);
    await deleteDoc(noteRef);
    dispatch(deleteNote(id));
  };
};
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
