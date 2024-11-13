import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
  buttonText?: string;
}

export const CustomAlert = ({
  visible,
  title,
  message,
  onClose,
  buttonText = 'OK',
}: Props) => {
  if (!visible) return null;
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="items-center justify-center flex-1 bg-black/50">
        <View className="w-4/5 p-5 bg-white rounded-lg shadow-md">
          <Text className="text-lg font-bold text-gray-800">{title}</Text>
          <Text className="mt-2 text-sm text-gray-600">{message}</Text>
          <TouchableOpacity
            onPress={onClose}
            className="p-3 mt-5 bg-orange-500 rounded-lg"
          >
            <Text className="font-medium text-center text-white">
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
