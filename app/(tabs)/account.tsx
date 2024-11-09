import { Link, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Account() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text className='text-4xl ml-auto mr-auto mt-auto'>Welcome to Lyrics2go!</Text>
      <Link className='mt-auto' href="../login" asChild>
        <Pressable>
          <Text className="text-2xl pt-2 pb-2 text-center justify-center bg-blue-600 text-slate-200 w-auto ml-10 mr-10 rounded-full">Log in</Text>
        </Pressable>
      </Link>
      <Link href="../signup" className='mb-auto'asChild>
        <Pressable>
          <Text className="text-2xl pt-2 pb-2 text-center justify-center border-solid border-5 hover:border-10 border-black w-auto ml-10 mr-10 rounded-full">Sign up</Text>
        </Pressable>
      </Link>
    </>
  );
}
