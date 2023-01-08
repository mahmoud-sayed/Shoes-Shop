import React, { useState } from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Order from './Order';
import Profile from './Profile';
import Colors from './../../GeneralImportantThings/colors';
import { Text } from 'native-base';



const renderScene = SceneMap({
  first: Profile,
  seconde: Order
});

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'PROFILE' },
    { key: 'seconde', title: 'ORDERS' }
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      tabStyle={style.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) =>
        <Text style={{ color, ...style.text }}>{routes.title}</Text>
      }
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    // renderTabBar={renderTabBar}
  );
};

const style = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'black'
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold'
  }
});

export default Tabs;