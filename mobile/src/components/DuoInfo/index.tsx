import { ColorValue, Text, View } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';

interface IDuoInfoProps {
  label: string;
  description: string;
  colorValue?: ColorValue;
}

export const DuoInfo = ({ description, label, colorValue = THEME.COLORS.TEXT }: IDuoInfoProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.description, { color: colorValue }]} numberOfLines={1}>{description}</Text>
    </View>
  );
};
