import { useEffect } from "react";

import PropTypes from "prop-types";

import * as S from "./styles";

function DateGrid({ month, reminders }) {
  function verifyIfHasReminder(day) {
    if (!reminders?.length) return null;
    return reminders.filter((reminder) => Number(reminder.day) === day);
  }

  return (
    <S.Container>
      {month?.map((row) =>
        row.map(({ day, isCurrentMonth, isWeekend }) => {
          const hasReminder = verifyIfHasReminder(day);

          return (
            <S.Day key={day} isWeekend={isWeekend} disabled={!isCurrentMonth}>
              <S.DayNumber>{day}</S.DayNumber>

              {isCurrentMonth &&
                hasReminder &&
                hasReminder.map((each) => (
                  <S.Reminder key={each.title}>{each.title}</S.Reminder>
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
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      title: "",
      day: "",
      city: "",
    })
  ),
};

export default DateGrid;
