import PropTypes from "prop-types";

import * as S from "./styles";
function Modal({ children, onClose, title }) {
  return (
    <S.Container>
      <S.Close onClick={onClose} />
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
