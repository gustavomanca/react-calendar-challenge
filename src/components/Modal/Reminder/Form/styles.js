import { Button } from "components";
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

export const CityWrapper = styled.div``;

export const Conditions = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0 0;
  `}
`;

export const ConditionLabel = styled.label`
  ${({ theme }) => css`
    display: block;
    margin: 0 0 ${theme.spacings.xsmall};
  `}
`;

export const ConditionIcon = styled.img`
  width: 4.8rem;
`;

export const ConditionsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xxlarge};
    margin: 0 ${theme.spacings.xsmall} 0 0;
  `}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Delete = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.danger};
  `}
`;
