import { useState } from "react";

import { Button, Modal, TextField } from "components";
import PropTypes from "prop-types";

function ReminderModal({ setShowModal }) {
  const [reminder, setReminder] = useState({
    title: "",
    day: "",
    city: "",
  });

  return (
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
  );
}

ReminderModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ReminderModal;
