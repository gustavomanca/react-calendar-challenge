import { useDispatch, useSelector } from "react-redux";

import { Button, Loader } from "components";
import ReminderModal from "components/Modal/Reminder";
import { useApi } from "hooks";
import { setCurrent, toggleModal } from "reducers/reminder";
import { getMappedMonth } from "utils/date";

import DateGrid from "./components/DateGrid";
import Header from "./components/Header";
import * as S from "./styles";

function Calendar() {
  const dispatch = useDispatch();
  const currentReminder = useSelector(({ reminders }) => reminders.current);
  const { loading } = useApi();

  const month = getMappedMonth();

  function onNewReminder() {
    if (currentReminder) dispatch(setCurrent(null));
    dispatch(toggleModal(true));
  }

  return (
    <S.Container isLoading={loading}>
      {loading && <Loader />}

      <h1>Calendar</h1>

      <S.CalendarWrapper>
        <Header />
        <DateGrid month={month.mapped} />
      </S.CalendarWrapper>

      <Button onClick={onNewReminder}>New Reminder</Button>

      <ReminderModal amountOfDays={month.amountDays} />
    </S.Container>
  );
}

export default Calendar;
