export function getMappedMonth(month = new Date().getMonth()) {
  const year = new Date().getFullYear();
  const weekDayOfFirstDayOfMonth = new Date(year, month, 1).getDay();
  let dayCounter = 0 - weekDayOfFirstDayOfMonth;

  const mapped = Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () => {
      dayCounter++;
      const date = new Date(year, month, dayCounter);
      const day = date.getDate();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isCurrentMonth = date.getMonth() === month;
      return { day, isCurrentMonth, isWeekend };
    })
  );
  return mapped;
}
