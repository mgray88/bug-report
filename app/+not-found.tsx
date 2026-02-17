import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-center text-[20px] font-bold">This screen doesn't exist.</Text>

        <Link href="/" asChild>
          <Pressable className="mt-[15px] py-[15px]">
            <Text className="text-sm text-[#2e78b7] dark:text-[#2e78b7]">Go to home screen!</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
