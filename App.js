import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraView from "./src/components/CameraView";
import Home from "./src/components/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers/rootReducer";
import Login from "./src/components/Login";

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Camera" component={CameraView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
