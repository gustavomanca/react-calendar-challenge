import PropTypes from "prop-types";

import * as S from "./styles";

function TextField(props) {
  return <S.Container {...props} />;
}

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextField;
