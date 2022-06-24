import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <span className="day-of-week">Sunday</span>
      <span className="day-of-week">Monday</span>
      <span className="day-of-week">Tuesday</span>
      <span className="day-of-week">Wednesday</span>
      <span className="day-of-week">Thursday</span>
      <span className="day-of-week">Friday</span>
      <span className="day-of-week">Saturday</span>
    </S.Container>
  );
}

export default Header;
