import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface IGameCardProps {
  id: string;
  title: string;
  _count: { ads: number };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: IGameCardProps;
}

export const GameCard = ({ data, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anuncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
