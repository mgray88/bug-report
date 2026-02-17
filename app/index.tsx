import { Text, View } from "@/components/Themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center">
      <View className="flex-1" />

      <View className="flex-row justify-between gap-10 items-end">
        <View className="pb-safe">
          <Text>I'm a bug! 🐛</Text>
        </View>
        <View
          style={{
            paddingBottom: safeAreaInsets.bottom,
          }}
        >
          <Text>I'm fixed!</Text>
        </View>
      </View>
    </View>
  );
}
