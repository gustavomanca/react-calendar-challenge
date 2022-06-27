import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "components";
import PropTypes from "prop-types";
import { setCurrent, toggleModal } from "reducers/reminder";

import Form from "./Form";
import { INITIAL_REMINDER_STATE } from "./Form/content";

function ReminderModal({ amountOfDays }) {
  const dispatch = useDispatch();
  const { showModal } = useSelector(({ reminders }) => reminders);

  const [reminder, setReminder] = useState(INITIAL_REMINDER_STATE);

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(setCurrent(null));
    dispatch(toggleModal(false));
  }

  if (!showModal) return <></>;

  return (
    <Modal title="New reminder" onClose={clear}>
      <Form
        amountOfDays={amountOfDays}
        reminder={reminder}
        setReminder={setReminder}
      />
    </Modal>
  );
}

ReminderModal.propTypes = {
  amountOfDays: PropTypes.arrayOf(PropTypes.number),
};

export default ReminderModal;
