// components/TimeButton.tsx
import { TouchableOpacity, Text } from 'react-native'

export function TimeButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity 
      className="bg-blue-500 p-4 rounded-lg m-2"
      onPress={onPress}
    >
      <Text className="text-white text-lg">{label}</Text>
    </TouchableOpacity>
  )
}