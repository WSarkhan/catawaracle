import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  label: string;
  className?: string;
}

export const Button = ({
  onPress,
  disabled,
  loading,
  label,
  className,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`p-4 rounded-lg ${disabled || loading ? 'bg-gray-400' : ''} ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="font-bold text-center text-white">{label}</Text>
      )}
    </TouchableOpacity>
  );
};
