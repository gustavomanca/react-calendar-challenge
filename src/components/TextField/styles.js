import styled, { css } from "styled-components";

export const Container = styled.input`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};
    margin: 0;
    padding: 0 ${theme.spacings.xxsmall};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.4rem;

    &:focus-visible {
      outline: 1px solid gray;
    }
  `}
`;
