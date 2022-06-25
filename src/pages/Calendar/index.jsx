import { useState } from "react";

import { Button } from "components";
import { getMappedMonth } from "utils/date";

import DateGrid from "./components/DateGrid";
import Header from "./components/Header";
import ReminderModal from "./components/ReminderModal";
import * as S from "./styles";

function Calendar() {
  const [toEditReminder, setToEditReminder] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const month = getMappedMonth();

  function onDeleteReminder(index) {
    const updated = [...reminders];
    updated.splice(index, 1);
    setReminders(updated);
  }

  function onSaveReminder(reminder) {
    if (!toEditReminder) return setReminders((prev) => [...prev, reminder]);
    const updated = [...reminders];
    updated.splice(reminder.index, 1, reminder);
    setReminders(updated);
    setToEditReminder(null);
  }

  return (
    <div className="container">
      {showModal && (
        <ReminderModal
          amountOfDays={month.amountDays}
          onSaveReminder={onSaveReminder}
          setShowModal={setShowModal}
          toEditReminder={toEditReminder}
        />
      )}

      <h1>Calendar</h1>

      <S.Container>
        <Header />
        <DateGrid month={month.mapped} reminders={reminders} />
      </S.Container>

      <Button onClick={() => setShowModal(true)}>New Reminder</Button>

      {reminders.map(({ title, day, city }, index) => (
        <S.Card key={`${title}-${index}`}>
          <S.Fields>
            <span>Title: {title}</span>
            <span>Day: {day}</span>
            <span>City: {city}</span>
          </S.Fields>

          <S.Actions>
            <Button onClick={() => onDeleteReminder(index)}>Delete</Button>
            <Button
              onClick={() => {
                setShowModal(true);
                setToEditReminder({ title, day, city, index });
              }}
            >
              Edit
            </Button>
          </S.Actions>
        </S.Card>
      ))}
    </div>
  );
}

export default Calendar;
