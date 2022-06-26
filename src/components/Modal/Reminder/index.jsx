import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Dropdown, Modal, TextField } from "components";
import PropTypes from "prop-types";
import { add, edit, setCurrent, toggleModal } from "reducers/reminder";
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

  const [errors, setErrors] = useState({
    title: "",
    day: "",
    city: "",
    time: "",
  });
  const [reminder, setReminder] = useState(INITIAL_REMINDER_STATE);

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(setCurrent(null));
    dispatch(toggleModal(false));
  }

  function handleChange(key, value) {
    setErrors((prev) => ({ ...prev, [key]: "" }));
    if (key === "day") {
      const day = handleDay(value);
      return setReminder((prev) => ({ ...prev, day }));
    }
    setReminder((prev) => ({ ...prev, [key]: value }));
  }

  function handleDay(value) {
    const day = value.match(/\d+/g)?.join("");
    if (day && amountOfDays.includes(Number(day))) return day;
    else return "";
  }

  function onSubmit(event) {
    event.preventDefault();

    const [isValid, errors] = validate();

    if (!isValid) {
      const [field] = errors;
      return setErrors((prev) => ({ ...prev, [field]: "Required field" }));
    }

    toggleModal(false);
    if (current) {
      dispatch(edit(reminder));
      return clear();
    }
    const id = generateUUID();
    dispatch(add({ ...reminder, id }));
    clear();
  }

  function validate() {
    const errors = Object.entries(reminder)
      .map(([key, value]) => {
        const bypass = key === "id" || key === "time" || Boolean(value);
        if (bypass) return "";
        return key;
      })
      .filter((each) => Boolean(each));

    if (errors.length) return [false, errors];
    else return [true];
  }

  useEffect(() => {
    if (!current) return setReminder(INITIAL_REMINDER_STATE);
    setReminder((prev) => ({ ...prev, ...current }));
  }, [current]);

  if (!showModal) return <></>;

  return (
    <Modal title="New reminder" onClose={clear}>
      <form onSubmit={onSubmit}>
        <S.FieldsWrapper>
          <TextField
            error={errors.title}
            value={reminder.title}
            placeholder="Type a title..."
            maxLength={30}
            onChange={({ target }) => handleChange("title", target.value)}
          />
          <TextField
            error={errors.day}
            value={reminder.day}
            placeholder="Type a day..."
            maxLength={2}
            onChange={({ target }) => handleChange("day", target.value)}
          />
          <Dropdown
            options={TIME_OPTIONS}
            placeholder="Pick a time..."
            onChange={({ key }) => handleChange("time", key)}
          />
          <TextField
            error={errors.city}
            value={reminder.city}
            placeholder="Type a city..."
            onChange={({ target }) => handleChange("city", target.value)}
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
