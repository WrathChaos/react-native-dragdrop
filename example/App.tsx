import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import DragDrop from './lib/index';

interface AppProps {
  style?: StyleProp<ViewStyle>;
}

const App: React.FC<AppProps> = ({style}) => {
  const [items, setItems] = React.useState([
    {id: 1, text: 'Prepstation'},
    {id: 2, text: 'Kitchen'},
    {id: 3, text: 'Kasse'},
    {id: 4, text: 'Auben Bar'},
    {id: 5, text: 'Bar'},
    {id: 6, text: 'Pool Bar'},
    {id: 7, text: 'Halve'},
    {id: 8, text: 'Inki'},
    {id: 9, text: 'Kalle'},
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: 'Test zone 0',
      items: [{id: 10, text: 'Space Bar'}],
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <DragDrop
        style={{
          flex: 1,
          paddingTop: 32,
          width: '100%',
          backgroundColor: '#2193b0',
        }}
        contentContainerStyle={{
          padding: 20,
          paddingTop: 40,
        }}
        itemKeyExtractor={item => item.id}
        zoneKeyExtractor={zone => zone.id}
        zones={zones}
        items={items}
        onMaj={(zones, items) => {
          setItems(items);
          setZones(zones);
        }}
        itemsInZoneDisplay="row"
        itemsDisplay="row"
        draggableItemStyle={
          {
            // width: '100%',
            // height: '100%',
            // alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'red',
          }
        }
        itemsNumColumns={3}
        itemsInZoneNumColumns={2}
        renderItem={item => {
          return (
            <View
              style={{
                width: '47%',
                padding: 10,
                height: 45,
                borderRadius: 12,
                marginVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6dd5ed',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                {item.text}
              </Text>
            </View>
          );
        }}
        renderZone={(zone, children, hover) => {
          return (
            <View>
              <View
                style={{
                  marginVertical: 16,
                  alignSelf: 'center',
                  height: 0.5,
                  width: '60%',
                  backgroundColor: '#ccc',
                }}
              />
              <View
                style={{
                  backgroundColor: '#6dd5ed',
                  marginVertical: 10,
                  borderRadius: 12,
                }}>
                <View
                  style={{
                    width: '100%',
                    minHeight: 150,
                    borderRadius: 12,
                    padding: 16,
                    backgroundColor: hover ? '#2980B9' : '#2193b0',
                  }}>
                  {children}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;
