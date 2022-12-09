import * as React from 'react';
import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { style as cardStyle } from './Card.style';

export const Card: FC<{
  children: ReactNode;
  title?: string;
  style?: object;
}> = ({ children, title, style }) => {
  const styles: object[] = [cardStyle.card];

  if (title) {
    styles.push(cardStyle.cardColumn);
  }

  if (style) {
    styles.push(style);
  }

  return (
    <View style={styles}>
      {title && <Text style={cardStyle.title}>{title}</Text>}
      {children}
    </View>
  );
};
