import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 50vw;
  border-radius: 12px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
`;

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  padding: 0;
  height: 48px;
  width: 48px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  will-change: background-color;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #000;
    width: 16px;
    height: 2px;
    border-radius: 24px;
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
