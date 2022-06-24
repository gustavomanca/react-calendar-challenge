import { getMappedMonth } from "utils/date";

import * as S from "./styles";

function DateGrid() {
  const month = getMappedMonth();

  return (
    <S.Container>
      {month?.map((row) =>
        row.map(({ day, isCurrentMonth, isWeekend }) => (
          <S.Day key={day} isWeekend={isWeekend} disabled={!isCurrentMonth}>
            {day}
          </S.Day>
        ))
      )}
    </S.Container>
  );
}

export default DateGrid;
