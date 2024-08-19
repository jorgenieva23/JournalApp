import React from "react";
import moment from "moment";
import { activeNote } from "../../action/notes";
import { useDispatch, useSelector } from "react-redux";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div onClick={handleEntryClick} className="journal__entry pointer">
      {url && (
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
          className="jounal__entry-picture"
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("DD")}</h4>
      </div>
    </div>
  );
};
