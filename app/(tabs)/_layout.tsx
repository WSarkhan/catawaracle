import { Cross, Home, Favourites } from '@/components/foundations';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgb(251 146 60)',
        tabBarInactiveTintColor: 'rgb(124 45 18)',
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#000',
          paddingTop: 5,
          borderBlockColor: 'rgb(124 45 18)',
          borderTopWidth: 2,
          padding: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <Favourites color={color} />,
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Upload',
          tabBarIcon: ({ color }) => <Cross color={color} />,
        }}
      />
    </Tabs>
  );
}
