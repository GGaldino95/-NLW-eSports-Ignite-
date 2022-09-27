import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { DuoInfo } from '..';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface IDuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: IDuoCardProps;
  onConnect: () => void;
}

export const DuoCard = ({ data, onConnect }: Props) => {

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" description={data.name} />
      <DuoInfo label="Tempo de jogo" description={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        description={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        description={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};
