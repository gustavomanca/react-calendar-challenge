const DAYS_OF_WEEK = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export function getMappedMonth(month = new Date().getMonth()) {
  const year = new Date().getFullYear();
  const weekDayOfFirstDayOfMonth = new Date(year, month, 1).getDay();
  const amountDays = [];
  let dayCounter = 0 - weekDayOfFirstDayOfMonth;

  const mapped = Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () => {
      dayCounter++;
      const date = new Date(year, month, dayCounter);
      const day = date.getDate();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isCurrentMonth = date.getMonth() === month;
      const dayOfWeek = DAYS_OF_WEEK[date.getDay()];

      if (isCurrentMonth) amountDays.push(day);
      return { day, dayOfWeek, isCurrentMonth, isWeekend };
    })
  );
  return { mapped, amountDays };
}
