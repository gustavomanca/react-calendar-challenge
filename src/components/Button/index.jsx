import PropTypes from "prop-types";

import * as S from "./styles";
function Button(props) {
  const { onClick, children } = props;

  return (
    <S.Container onClick={onClick} {...props}>
      {children}
    </S.Container>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
