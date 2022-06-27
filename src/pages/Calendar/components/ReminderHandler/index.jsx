import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "components";
import PropTypes from "prop-types";
import { setCurrent, toggleModal } from "reducers/reminder";

import * as S from "./styles";
const REMINDERS_LIMIT_OFFSET = 4;

function ReminderHandler({ day, dayOfWeek, isCurrentMonth, reminders }) {
  const dispatch = useDispatch();

  const [limitedReminders, setLimitedReminders] = useState(null);
  const [toList, setToList] = useState(null);
  const [showAll, setShowAll] = useState(false);

  function onReminderEdit(reminder) {
    dispatch(setCurrent(reminder));
    dispatch(toggleModal(true));
  }

  useEffect(() => {
    setToList(limitedReminders ? limitedReminders : reminders);
  }, [limitedReminders, reminders]);

  useEffect(() => {
    const limitExceeded = reminders.length > REMINDERS_LIMIT_OFFSET;
    setLimitedReminders(
      limitExceeded ? [...reminders.slice(0, REMINDERS_LIMIT_OFFSET - 1)] : null
    );
  }, [reminders]);

  if (!isCurrentMonth || !reminders.length) return <></>;

  return (
    <>
      {toList.map((reminder) => (
        <S.Container key={reminder.id} onClick={() => onReminderEdit(reminder)}>
          {reminder.title}
        </S.Container>
      ))}
      {limitedReminders && (
        <S.Container onClick={() => setShowAll(true)}>
          {`...more ${reminders.length - (REMINDERS_LIMIT_OFFSET - 1)}`}
        </S.Container>
      )}
      {showAll && (
        <Modal onClose={() => setShowAll(false)}>
          <S.DayLabel>
            {dayOfWeek}, <strong>{day}</strong>
          </S.DayLabel>
          <S.Wrapper>
            {reminders.map((reminder) => (
              <S.Container
                key={reminder.id}
                onClick={() => {
                  setShowAll(false);
                  onReminderEdit(reminder);
                }}
              >
                {reminder.title}
              </S.Container>
            ))}
          </S.Wrapper>
        </Modal>
      )}
    </>
  );
}

ReminderHandler.propTypes = {
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dayOfWeek: PropTypes.string,
  isCurrentMonth: PropTypes.bool,
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      time: PropTypes.string,
      city: PropTypes.string,
    })
  ),
};

export default ReminderHandler;
