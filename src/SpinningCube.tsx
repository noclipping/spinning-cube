// src/SpinningCube.tsx
import React from "react";
import styled, { keyframes, css } from "styled-components";

interface SpinningCubeProps {
  size: number;
  color: string;
  speedX: number; // speed in seconds for X-axis
  speedY: number; // speed in seconds for Y-axis
  speedZ: number; // speed in seconds for Z-axis
}

const spin = (speedX: number, speedY: number, speedZ: number) => keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(${speedX * 360}deg) rotateY(${
  speedY * 360
}deg) rotateZ(${speedZ * 360}deg);
  }
`;

const Cube = styled.div<{
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
}>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform-style: preserve-3d;
  ${({ speedX, speedY, speedZ }) =>
    css`
      animation: ${spin(speedX, speedY, speedZ)} infinite linear;
    `}
`;

const Face = styled.div<{ size: number; color: string }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 2px solid ${({ color }) => color};
`;

const SpinningCube: React.FC<SpinningCubeProps> = ({
  size,
  color,
  speedX,
  speedY,
  speedZ,
}) => {
  const halfSize = `${size / 2}px`;

  return (
    <Cube size={size} speedX={speedX} speedY={speedY} speedZ={speedZ}>
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateY(0deg) translateZ(${halfSize})` }}
      />
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateY(90deg) translateZ(${halfSize})` }}
      />
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateY(180deg) translateZ(${halfSize})` }}
      />
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateY(-90deg) translateZ(${halfSize})` }}
      />
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateX(90deg) translateZ(${halfSize})` }}
      />
      <Face
        size={size}
        color={color}
        style={{ transform: `rotateX(-90deg) translateZ(${halfSize})` }}
      />
    </Cube>
  );
};

export default SpinningCube;
