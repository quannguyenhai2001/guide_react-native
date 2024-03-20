import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ProductDetailItem from "./screens/ProductDetailItem";
import FavoriteItem from "./screens/FavoriteItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";
import ProductList from "./screens/ProductList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Product List" }}
        name="ProductList"
        component={ProductList}
      />
      <Tab.Screen
        options={{ title: "Favorite" }}
        name="Favorite"
        component={FavoriteItem}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="bottomTabs"
              component={BottomTabs}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="productDetail"
              component={ProductDetailItem}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ProductContext>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingHorizontal: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 40,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    borderTopWidth: 1,
    flex: 3,
  },
  note: {
    marginBottom: 30,
    backgroundColor: "#eee",
  },
});
