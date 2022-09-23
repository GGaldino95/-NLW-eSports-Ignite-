
import { Image, View, FlatList } from 'react-native';
import { GameCard, Heading } from '../../components';
import { GAMES } from '../../utils/games';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

export const Home = ({ }) => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

      <FlatList
        horizontal
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
};
