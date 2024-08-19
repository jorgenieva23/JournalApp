import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../action/notes";

export const NoteAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const handlePictureClick = (e) => {
    document.querySelector("#fileSelector").click();
  };
  const handleFilesChange = (e) => {
    const file = e.target.file[0];
    if (file) {
      dispatch(startUploading());
    }
  };
  return (
    <div className="notes__appbar">
      <span>28 de agosto de 2024</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFilesChange}
      />
      <div>
        <button onClick={handlePictureClick} className="btn">
          picture
        </button>
        <button onClick={handleSave} className="btn">
          save
        </button>
      </div>
    </div>
  );
};
