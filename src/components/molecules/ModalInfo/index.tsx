import {Text, View} from 'react-native';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {ModalInfoRefType, PropsType} from './types';
import {Button} from '@components/atoms';

const ModalInfo = forwardRef<ModalInfoRefType, PropsType>(({text}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        onClose();
      },
    }),
    [onClose],
  );

  return (
    <Modal
      isVisible={isOpen}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationInTiming={300}
      animationOutTiming={500}
      useNativeDriver={true}
      animationOut="zoomOut">
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Button text="Close" onPress={onClose} style={styles.button} />
      </View>
    </Modal>
  );
});

export default memo(ModalInfo);
