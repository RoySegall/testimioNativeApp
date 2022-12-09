import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { branchesStore } from '../../Stores';
import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

export const Branches = observer(() => {
  const store = useMemo(() => branchesStore, [branchesStore]);

  return (
    <View>
      <Text>Branches!</Text>

      {store.branches.case({
        fulfilled: (data) => (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                <Button
                  title={'change to foo'}
                  onPress={() => {
                    store.changeBranch(item);
                  }}
                />
              </View>
            )}
          />
        ),
        rejected: () => null,
        pending: () => null,
      })}
    </View>
  );
});
