import { getMappedMonth } from "../utils/date";

function Calendar() {
  const month = getMappedMonth();

  return (
    <div className="container">
      <h1>Calendar</h1>

      <div className="calendar">
        <header className="calendar-header">
          <span className="item">Sunday</span>
          <span className="item">Monday</span>
          <span className="item">Tuesday</span>
          <span className="item">Wednesday</span>
          <span className="item">Thursday</span>
          <span className="item">Friday</span>
          <span className="item">Saturday</span>
        </header>

        <div className="calendar-weeks">
          {month.map((row) =>
            row.map(({ day, isCurrentMonth, isWeekend }) => (
              <span
                className={[
                  "calendar-day",
                  isWeekend ? "--weekend" : "",
                  !isCurrentMonth ? "--disabled" : "",
                ].join(" ")}
                key={day}
              >
                {day}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
