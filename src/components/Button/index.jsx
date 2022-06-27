import PropTypes from "prop-types";

import * as S from "./styles";
function Button({ children, className, onClick, type, ...props }) {
  return (
    <S.Container className={className} onClick={onClick} type={type} {...props}>
      {children}
    </S.Container>
  );
}

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
