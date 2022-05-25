import { ButtonBack, ButtonFront } from './index'

declare namespace JSX {
    interface IntrinsicElements {
      div: { alt?: string };
    }
  }

const Button = (props: any) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button