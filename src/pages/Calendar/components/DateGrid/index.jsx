import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { setCurrent, toggleModal } from "reducers/reminder";

import * as S from "./styles";

function DateGrid({ month }) {
  const dispatch = useDispatch();
  const reminders = useSelector(({ reminders }) => reminders.data);

  function verifyIfHasReminder(day) {
    if (!reminders?.length) return null;
    return reminders.filter((reminder) => Number(reminder.day) === day);
  }

  return (
    <S.Container>
      {month?.map((row) =>
        row.map(({ day, isCurrentMonth, isWeekend }) => {
          const hasReminder = verifyIfHasReminder(day);
          const renderReminder = isCurrentMonth && hasReminder;
          return (
            <S.Day key={day} isWeekend={isWeekend} disabled={!isCurrentMonth}>
              <S.DayNumber>{day}</S.DayNumber>

              {renderReminder &&
                hasReminder.map((reminder) => (
                  <S.Reminder
                    key={reminder.title}
                    onClick={() => {
                      dispatch(setCurrent(reminder));
                      dispatch(toggleModal(true));
                    }}
                  >
                    {reminder.title}
                  </S.Reminder>
                ))}
            </S.Day>
          );
        })
      )}
    </S.Container>
  );
}

DateGrid.propTypes = {
  month: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        isCurrentMonth: PropTypes.bool,
        isWeekend: PropTypes.bool,
      })
    )
  ),
};

export default DateGrid;
