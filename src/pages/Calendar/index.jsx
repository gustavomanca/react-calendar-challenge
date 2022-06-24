import { useState } from "react";

import DateGrid from "./components/DateGrid";
import Header from "./components/Header";
import ReminderModal from "./components/ReminderModal";
import * as S from "./styles";

function Calendar() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="container">
      {showModal && <ReminderModal setShowModal={setShowModal} />}

      <h1>Calendar</h1>

      <S.Container>
        <Header />
        <DateGrid />
      </S.Container>
    </div>
  );
}

export default Calendar;
