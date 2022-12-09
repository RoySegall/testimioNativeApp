import {SafeAreaView} from 'react-native';
import {styles} from './App.style';
import {Navigation} from '../Navigation';
import {Home} from '../Home';
import {Branches} from '../Branches';
import React from 'react';

export const HomeWrapped = ({navigation}: any) => (
  <SafeAreaView style={styles.container}>
    <Navigation navigation={navigation} />
    <Home />
  </SafeAreaView>
);

export const BranchesWrapped = ({navigation}: any) => (
  <SafeAreaView style={styles.container}>
    <Navigation navigation={navigation} />
    <Branches />
  </SafeAreaView>
);
