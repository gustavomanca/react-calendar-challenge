import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Dropdown, Modal, TextField } from "components";
import PropTypes from "prop-types";
import { add, edit, toggleModal } from "reducers/reminder";
import { generateUUID } from "utils/uuid";

import { TIME_OPTIONS } from "./content";
import * as S from "./styles";

const INITIAL_REMINDER_STATE = {
  id: "",
  title: "",
  day: "",
  city: "",
  time: "",
};

function ReminderModal({ amountOfDays }) {
  const dispatch = useDispatch();
  const { current, showModal } = useSelector(({ reminders }) => reminders);

  const [reminder, setReminder] = useState(INITIAL_REMINDER_STATE);

  function handleDay(value) {
    const day = value.match(/\d+/g)?.join("");
    if (day && amountOfDays.includes(Number(day))) return day;
    else return "";
  }

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(toggleModal(false));
  }

  function onSubmit(event) {
    event.preventDefault();
    toggleModal(false);
    if (current) {
      dispatch(edit(reminder));
      return clear();
    }
    const id = generateUUID();
    dispatch(add({ ...reminder, id }));
    clear();
  }

  useEffect(() => {
    if (!current) return;
    setReminder((prev) => ({ ...prev, ...current }));
  }, [current]);

  if (!showModal) return <></>;

  return (
    <Modal title="New reminder" onClose={() => dispatch(toggleModal(false))}>
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
};

export default ReminderModal;
