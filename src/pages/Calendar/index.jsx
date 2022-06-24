import { useState } from "react";

import { Modal, TextField } from "components";
import { getMappedMonth } from "utils/date";

import * as S from "./styles";

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

      <S.Container>
        <S.Header>
          <span className="day-of-week">Sunday</span>
          <span className="day-of-week">Monday</span>
          <span className="day-of-week">Tuesday</span>
          <span className="day-of-week">Wednesday</span>
          <span className="day-of-week">Thursday</span>
          <span className="day-of-week">Friday</span>
          <span className="day-of-week">Saturday</span>
        </S.Header>

        <S.DateGrid>
          {month?.map((row) =>
            row.map(({ day, isCurrentMonth, isWeekend }) => (
              <S.Day key={day} isWeekend={isWeekend} disabled={!isCurrentMonth}>
                {day}
              </S.Day>
            ))
          )}
        </S.DateGrid>
      </S.Container>
    </div>
  );
}

export default Calendar;
