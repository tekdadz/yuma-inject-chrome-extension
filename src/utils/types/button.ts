export type ButtonPropsType = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  handler?: () => void;
}