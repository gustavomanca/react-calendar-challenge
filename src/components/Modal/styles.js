import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;

  border-radius: 12px;
  height: 400px;
  padding: 32px 24px;
  width: 50vw;

  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);

  transform: translate(-50%, -50%);
`;

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  border: none;
  border-radius: 0 12px 0 12px;
  height: 48px;
  padding: 0;
  width: 48px;

  background-color: transparent;
  cursor: pointer;

  transition: background-color 0.3s ease;
  will-change: background-color;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;

    border-radius: 24px;
    height: 2px;
    width: 16px;

    background-color: #000;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    background-color: #e5ebf1;
  }
`;

export const Title = styled.h3``;
