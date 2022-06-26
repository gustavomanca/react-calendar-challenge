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

export const Day = styled.div`
  ${({ theme, disabled, isWeekend }) => css`
    height: 13rem;

    border: 1px solid gray;
    font-weight: ${theme.font.bold};
    padding: 0.4rem;

    overflow: hidden;

    ${isWeekend && kinds.weekend(theme)};
    ${disabled && kinds.disabled(theme)};
  `}
`;

export const DayNumber = styled.span`
  display: block;
  margin: 0 0 0.8rem;
`;

export const Reminder = styled.p`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    margin: 0 0 0.4rem;
    padding: 0 2px;
    width: 100%;

    background-color: ${theme.colors.label};

    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: transform 0.3s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.02);
    }
  `};
`;
