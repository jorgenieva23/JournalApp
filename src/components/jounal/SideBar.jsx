import React from "react";
import { JournalEntries } from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../action/auth";
import { startNewNote } from "../../action/notes";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> {name}</span>
        </h3>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
