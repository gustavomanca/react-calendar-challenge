import styled, { css } from "styled-components";

const modifiers = {
  withError: (theme) => css`
    border: 1px solid ${theme.colors.danger};
  `,
};

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  ${({ theme, error }) => css`
    height: ${theme.spacings.xlarge};
    margin: 0;
    padding: 0 ${theme.spacings.xxsmall};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.4rem;
    width: 100%;

    &:focus-visible {
      outline: 1px solid gray;
    }

    ${error && modifiers.withError(theme)};
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.spacings.smallest};
    top: calc(${theme.spacings.xlarge} + 0.4rem);

    color: ${theme.colors.danger};
  `}
`;
