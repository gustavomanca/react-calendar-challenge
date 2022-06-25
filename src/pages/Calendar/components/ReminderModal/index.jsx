import { useEffect, useState } from "react";

import { Button, Dropdown, Modal, TextField } from "components";
import PropTypes from "prop-types";

import { TIME_OPTIONS } from "./content";
import * as S from "./styles";

function ReminderModal({
  amountOfDays,
  onSaveReminder,
  setShowModal,
  toEditReminder,
}) {
  const [reminder, setReminder] = useState({
    title: "",
    day: "",
    city: "",
    time: "",
  });

  function handleDay(value) {
    const day = value.match(/\d+/g)?.join("");
    if (day && amountOfDays.includes(Number(day))) return day;
    else return "";
  }

  function onSubmit(event) {
    event.preventDefault();
    setShowModal(false);
    onSaveReminder(reminder);
  }

  useEffect(() => {
    if (!toEditReminder) return;
    setReminder((prev) => ({ ...prev, ...toEditReminder }));
  }, [toEditReminder]);

  return (
    <Modal title="New reminder" onClose={() => setShowModal(false)}>
      <form onSubmit={onSubmit}>
        <S.FieldsWrapper>
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
              const day = handleDay(event.target.value);
              setReminder((prev) => ({
                ...prev,
                day,
              }));
            }}
          />
          <Dropdown
            onChange={({ key }) =>
              setReminder((prev) => ({ ...prev, time: key }))
            }
            options={TIME_OPTIONS}
            placeholder="Pick a time..."
          />

          <TextField
            value={reminder.city}
            placeholder="Type a city..."
            onChange={(event) => {
              setReminder((prev) => ({
                ...prev,
                city: event.target.value,
              }));
            }}
          />
        </S.FieldsWrapper>

        <Button type="submit">Save</Button>
      </form>
    </Modal>
  );
}

ReminderModal.propTypes = {
  amountOfDays: PropTypes.arrayOf(PropTypes.number),
  onSaveReminder: PropTypes.func,
  setShowModal: PropTypes.func.isRequired,
  toEditReminder: PropTypes.shape({
    title: "",
    day: "",
    city: "",
  }),
};

export default ReminderModal;
