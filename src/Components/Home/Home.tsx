import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { branchesStore, userStore } from '../../Stores';
import { Card } from '../Card/Card';
import { globalStyle } from '../Variables/global.style';

const Item = ({ title }: { title: string }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const renderItem = ({ item }: { item: { title: string } }) => (
  <Item title={item.title} />
);

export const Home: React.FC = observer(() => {
  const BranchesStore = useMemo(() => branchesStore, []);
  const UserStore = useMemo(() => userStore, []);

  const numberOfTests = 20;
  const tests = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'STP-1: Login scenario',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'STP-191: Add comment to test',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'STP-10: Handle missing image',
    },
  ];

  return (
    <View style={globalStyle.container}>
      <Card>
        <Text style={globalStyle.text}>Welcome {UserStore.username}</Text>
        <Text style={globalStyle.text}>
          Current branch: {BranchesStore.branch.name}
        </Text>
      </Card>

      <Card>
        <Text style={globalStyle.text}>Number of tests</Text>
        <Text style={globalStyle.text}>{numberOfTests}</Text>
      </Card>

      <Card title="Recent added tests">
        <FlatList
          data={tests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Card>

      <Card title="Recent runs">
        <FlatList
          data={tests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Card>
    </View>
  );
});
