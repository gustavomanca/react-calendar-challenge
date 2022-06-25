import styled, { css } from "styled-components";

const modifiers = {
  selected: (theme) => css`
    color: ${theme.colors.black};
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.4rem;
    position: relative;
    height: ${theme.spacings.xlarge};
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    position: absolute;
    inset: 0 0 0 0;

    border: none;
    border-radius: 0.4rem;
    padding: 0 ${theme.spacings.xxsmall};

    background: none;

    :focus-visible {
      outline: 1px solid gray;
    }
  `}
`;

export const Placeholder = styled.option`
  ${({ theme }) => css`
    color: gray;
  `}
`;

export const Toggler = styled.button`
  ${({ theme, selected }) => css`
    position: absolute;
    inset: 0 0 0 0;

    display: flex;
    align-items: center;

    border: none;
    padding: 0 ${theme.spacings.xxsmall};

    background: none;
    color: gray;
    cursor: pointer;

    ${selected && modifiers.selected(theme)};
  `}
`;

export const ListWrapper = styled.div`
  ${({ theme, show }) => css`
    display: ${show ? "block" : "none"};

    position: absolute;
    left: 0;
    right: 0;
    top: ${theme.spacings.xlarge};
    z-index: 2;

    height: 27rem;

    background-color: ${theme.colors.lightest};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 12px;
      cursor: pointer;
    }

    ::-webkit-scrollbar-track {
      border-radius: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.lightBlue};
      border-radius: 0.8rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primary};
    }
  `}
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    height: ${theme.spacings.large};
    margin: 0;
    padding: 0 ${theme.spacings.small};

    cursor: pointer;
    transition: background-color 0.3s ease;
    will-change: background-color;

    &:hover {
      background-color: ${theme.colors.lightGray};
    }
  `}
`;
