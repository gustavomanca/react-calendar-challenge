import styled, { css } from "styled-components";

const kinds = {
  disabled: (theme) => css`
    color: ${theme.colors.lightGray};
  `,
  weekend: (theme) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.primary};
  `,
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.span`
  ${({ theme, disabled, isWeekend }) => css`
    height: 9.6rem;

    border: 1px solid gray;
    font-weight: ${theme.font.bold};

    ${isWeekend && kinds.weekend(theme)};
    ${disabled && kinds.disabled(theme)};
  `}
`;
