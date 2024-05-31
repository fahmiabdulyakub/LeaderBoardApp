export interface PropsType {
  value: string;
  icon?: JSX.Element;
  placeholder: string;
  onChangeText: (value: string) => void;
}
