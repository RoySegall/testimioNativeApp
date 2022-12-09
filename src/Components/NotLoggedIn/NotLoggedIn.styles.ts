import { StyleSheet } from 'react-native';
import {
  cardBackground,
  cardBorderColor,
  inputBorderColor,
  background,
} from '../Variables/color';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background,
  },
  form: {
    flexDirection: 'column',
    backgroundColor: cardBackground,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '75%',
    heigh: '75%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: cardBorderColor,
    borderWidth: 1,
    borderRadius: 5,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: inputBorderColor,
  },
  section: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
