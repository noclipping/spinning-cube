// src/SpinningCube.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

interface SpinningCubeProps {
  size: number;
  color: string;
  speed: number; // speed in seconds
}

const spin = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const Cube = styled.div<{ size: number; speed: number }>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform-style: preserve-3d;
  animation: ${spin} ${({ speed }) => `${speed}s`} infinite linear;
`;

const Face = styled.div<{ size: number; color: string }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 2px solid ${({ color }) => color};
`;

const SpinningCube: React.FC<SpinningCubeProps> = ({ size, color, speed }) => {
  const halfSize = `${size / 2}px`;

  return (
    <Cube size={size} speed={speed}>
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
