import styled, { css } from "styled-components";

export const FieldsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin: 0 0 ${theme.spacings.large};

    > *:not(:last-child) {
      margin: 0 0 ${theme.spacings.medium};
    }
  `}
`;
