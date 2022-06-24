import { useState } from "react";

import Modal from "../components/Modal";
import TextField from "../components/TextField";
import { getMappedMonth } from "../utils/date";

function Calendar() {
  const [showModal, setShowModal] = useState(true);
  const [reminder, setReminder] = useState({
    title: "",
    day: "",
    city: "",
  });

  const month = getMappedMonth();

  return (
    <div className="container">
      {showModal && (
        <Modal title="New reminder" onClose={() => setShowModal(false)}>
          <div className="fields-wrapper">
            <TextField
              value={reminder.title}
              placeholder="Type a title..."
              maxLength={30}
              onChange={(event) =>
                setReminder((prev) => ({
                  ...prev,
                  title: event.target.value,
                }))
              }
            />
            <TextField
              value={reminder.day}
              placeholder="Type a day..."
              maxLength={2}
              onChange={(event) => {
                const day = event.target.value.match(/\d+/g) ?? "";
                setReminder((prev) => ({
                  ...prev,
                  day,
                }));
              }}
            />
            <TextField
              value={reminder.city}
              placeholder="Type a city..."
              maxLength={2}
              onChange={(event) => {
                setReminder((prev) => ({
                  ...prev,
                  city: event.target.value,
                }));
              }}
            />
          </div>
        </Modal>
      )}

      <h1>Calendar</h1>

      <div className="calendar">
        <header className="calendar-header">
          <span className="item">Sunday</span>
          <span className="item">Monday</span>
          <span className="item">Tuesday</span>
          <span className="item">Wednesday</span>
          <span className="item">Thursday</span>
          <span className="item">Friday</span>
          <span className="item">Saturday</span>
        </header>

        <div className="calendar-weeks">
          {month?.map((row) =>
            row.map(({ day, isCurrentMonth, isWeekend }) => (
              <span
                className={[
                  "calendar-day",
                  isWeekend ? "--weekend" : "",
                  !isCurrentMonth ? "--disabled" : "",
                ].join(" ")}
                key={day}
              >
                {day}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
