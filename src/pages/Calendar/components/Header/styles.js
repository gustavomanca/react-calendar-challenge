import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    background-color: ${theme.colors.lightBlue};
    color: ${theme.colors.lightGray};

    > .day-of-week {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;
      padding: ${theme.spacings.smallest} ${theme.spacings.xsmall};
    }
  `}
`;
