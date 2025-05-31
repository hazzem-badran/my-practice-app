import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Stack } from "expo-router";

const Blog = () => {
  const { id } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ title: `Blog ${id}` }} />
      <Text>You are an Blog {id}</Text>
    </View>
  );
};

export default Blog;
