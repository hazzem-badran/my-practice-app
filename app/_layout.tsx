import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { View, Image, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MENU_ITEMS } from "../constants/items";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  

  const router = useRouter();
  const pathName = usePathname();
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 16, alignItems: "center" }}>
        <Image
          source={require("../assets/images/react-logo.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      <DrawerItemList {...props} />
      <View style={{ padding: 16, paddingTop: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Itmes</Text>
      </View>
      {MENU_ITEMS.map((item: any) => {
        const isActive = pathName === `/${item.id}`;
        return (
          <DrawerItem
            activeTintColor="green"
            focused={isActive}
            key={item.id}
            label={item.title}
            onPress={() => router.push(`/${item.id}`)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveTintColor: "green",
          drawerHideStatusBarOnOpen: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "My Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="blogs"
          options={{
            drawerLabel: "Blogs",
            title: "My Blogs",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="[id]"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
