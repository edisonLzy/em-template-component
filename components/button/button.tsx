import { FC } from 'react';

export type ButtonSize = 'large' | 'small' | 'default';

export interface ButtonProps {
  size: ButtonSize;
}

const Button: FC<ButtonProps> = ({ children, size }) => {
  return <button>{size}</button>;
};

export default Button;
