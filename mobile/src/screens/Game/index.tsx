import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Background, DuoCard, DuoMatch, Heading } from '../../components';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { IDuoCardProps } from '../../components/DuoCard';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { styles } from './styles';



export const Game = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const game = route.params as GameParams;
  const [duos, setDuos] = useState<IDuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('');

  useEffect(() => {
    fetch(`http://192.168.0.163:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getDiscordUser = async (adsId: string) => {
    fetch(`http://192.168.0.163:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>

          <Image source={LogoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image source={{ uri: game.bannerUrl }} resizeMode='cover' style={styles.cover} />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          horizontal
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyListContent}
          style={styles.containerList}
          ListEmptyComponent={() => <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>}
        />

        <DuoMatch visible={discordDuoSelected.length > 0} discord={discordDuoSelected} onClose={() => setDiscordDuoSelected('')} />
      </SafeAreaView>
    </Background>
  );
};
