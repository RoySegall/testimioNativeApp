import { StyleSheet } from 'react-native';
import {
  cardBackground,
  cardBorderColor,
  cardShadowColor,
} from '../Variables/color';

export const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: cardBackground,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: cardBorderColor,
    borderWidth: 1,
    shadowColor: cardShadowColor,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  cardColumn: {
    flexDirection: 'column',
  },
});
