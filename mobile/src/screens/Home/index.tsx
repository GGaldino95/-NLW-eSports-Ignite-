
import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background, GameCard, Heading } from '../../components';
import { IGameCardProps } from '../../components/GameCard';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<IGameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.163:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const handleRedirect = ({ id, title, bannerUrl }: IGameCardProps) => {
    navigation.navigate('game', { id, title, bannerUrl });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

        <FlatList
          horizontal
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} onPress={() => handleRedirect(item)} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};
