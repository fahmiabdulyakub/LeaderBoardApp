export interface PropsType {
  text: string;
}

export type ModalInfoRefType =
  | {
      open: () => void;
      close: () => void;
    }
  | undefined;
