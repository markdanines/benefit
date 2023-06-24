import styled from 'styled-components';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const StyledButton = styled.button<ButtonProps>`
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.OUTLINED:
        return '#0650e0';
      case ButtonVariant.CONTAINED:
        return '#ffffff';
      default:
        return '#ffffff';
    }
  }};
  background: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.OUTLINED:
        return '#ffffff';
      case ButtonVariant.CONTAINED:
        return '#0650e0';
      default:
        return '#0650e0';
    }
  }};
  border-radius: 36.735px;
  border: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.OUTLINED:
        return '#0650e0 1px solid';
      case ButtonVariant.CONTAINED:
        return 'none';
      default:
        return 'none';
    }
  }};
  padding: 10px 50px;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.OUTLINED:
          return '#0650e0';
        case ButtonVariant.CONTAINED:
          return '#ffffff';
        default:
          return '#ffffff';
      }
    }};
    border: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.OUTLINED:
          return '#ffffff 1px solid';
        case ButtonVariant.CONTAINED:
          return '#0650e0 1px solid';
        default:
          return '#0650e0 1px solid';
      }
    }};
    cursor: pointer;
    color: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.OUTLINED:
          return '#ffffff';
        case ButtonVariant.CONTAINED:
          return '#0650e0';
        default:
          return '#0650e0';
      }
    }};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
