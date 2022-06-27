import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import ReminderHandler from "../ReminderHandler";
import * as S from "./styles";

function DateGrid({ month }) {
  const reminders = useSelector(({ reminders }) => reminders.data);

  function getCurrentDayReminders(day) {
    return reminders.filter((reminder) => Number(reminder.day) === day);
  }

  return (
    <S.Container>
      {month?.map((row) =>
        row.map(({ day, dayOfWeek, isCurrentMonth, isWeekend }) => {
          const remindersOfDay = getCurrentDayReminders(day);

          return (
            <S.Day key={day} isWeekend={isWeekend} disabled={!isCurrentMonth}>
              <S.DayNumber>{day}</S.DayNumber>
              <ReminderHandler
                day={day}
                dayOfWeek={dayOfWeek}
                isCurrentMonth={isCurrentMonth}
                reminders={remindersOfDay}
              />
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
