import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { user } from "../data/Profile";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Filiais from "../screens/Filiais";
import Details from "../screens/Details";
import Form from "../screens/Form";
import User from "../models/user/User";
import usersRepository from "../models/user/UserRepository";

const Tab = createBottomTabNavigator();

const users = usersRepository.getAll();

const TabRoutes = () => {
  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#121212' }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#1f1b20',
            borderRadius: 15,
            height: 90,
            borderColor: 'transparent'
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={30}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Filiais"
        component={Filiais}
        options={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#1f1b24',
            borderRadius: 15,
            height: 90,
            borderColor: 'transparent'
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={30}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,

          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ user: null, edit: false }}
        options={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#1f1b24',
            borderRadius: 15,
            height: 90,
            borderColor: 'transparent'
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="printer"
              size={30}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),

          headerShown: false,
          tabBarShowLabel: false,

          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        initialParams={{ users }}
        options={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#1f1b24',
            borderRadius: 15,
            height: 90,
            borderColor: 'transparent'
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="file-text"
              size={30}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,

          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#1f1b24',
            borderRadius: 15,
            height: 90,
            borderColor: 'transparent'
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={30}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
