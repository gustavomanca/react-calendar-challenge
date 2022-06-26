import { useDispatch } from "react-redux";

import { Button } from "components";
import ReminderModal from "components/Modal/Reminder";
import { toggleModal } from "reducers/reminder";
import { getMappedMonth } from "utils/date";

import DateGrid from "./components/DateGrid";
import Header from "./components/Header";
import * as S from "./styles";

function Calendar() {
  const dispatch = useDispatch();
  const month = getMappedMonth();

  return (
    <div className="container">
      <h1>Calendar</h1>

      <S.Container>
        <Header />
        <DateGrid month={month.mapped} />
      </S.Container>

      <Button onClick={() => dispatch(toggleModal(true))}>New Reminder</Button>

      <ReminderModal amountOfDays={month.amountDays} />
    </div>
  );
}

export default Calendar;
