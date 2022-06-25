import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import * as S from "./styles";

function Dropdown({ onChange, options, placeholder }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState({
    key: "",
    value: placeholder,
  });

  useEffect(() => {
    onChange(selected);
  }, [selected]) //eslint-disable-line

  return (
    <S.Container>
      <S.Toggler
        onClick={() => setShowOptions(!showOptions)}
        type="button"
        selected={Boolean(selected.key)}
      >
        {selected.value}
      </S.Toggler>
      <S.ListWrapper show={showOptions}>
        <S.List>
          {placeholder && (
            <S.Item
              onClick={() => {
                setShowOptions(false);
                setSelected((prev) => ({
                  ...prev,
                  key: "",
                  value: placeholder,
                }));
              }}
            >
              {placeholder}
            </S.Item>
          )}
          {options.map(({ key, value }) => (
            <S.Item
              key={key}
              onClick={() => {
                setShowOptions(false);
                setSelected((prev) => ({ ...prev, key, value }));
              }}
            >
              {value}
            </S.Item>
          ))}
        </S.List>
      </S.ListWrapper>
    </S.Container>
  );
}

Dropdown.defaultProps = {
  placeholder: "",
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
};

export default Dropdown;
