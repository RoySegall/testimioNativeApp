import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {style} from './style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

const items: {title: string}[] = [
  {title: 'Home'},
  {title: 'Branches'},
  {title: 'Tests'},
  {title: 'Tests Plans'},
  {title: 'Executions'},
];

export const Navigation: React.FC<{navigation: NavigationProp<ParamListBase>}> =
  observer(({navigation}) => {
    return (
      <View style={style.container}>
        <ScrollView horizontal={true} contentContainerStyle={style.scroll}>
          {items.map(({title}, key) => (
            <View style={style.iconTextWrapper} key={key}>
              <Text style={style.text}>
                <Button
                  title={title}
                  onPress={() => navigation.navigate(title)}
                  color="black"
                />
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  });
