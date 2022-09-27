import { useState } from 'react';
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '..';

import { styles } from './styles';
import { THEME } from '../../theme';

interface IDuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export const DuoMatch = ({ discord, onClose, ...props }: IDuoMatchProps) => {
  const [isCopying, setIsCopying] = useState<boolean>(false);

  const handleCopyDiscordToClipboard = async () => {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usuário copiado para você colar no Discord.');
    setIsCopying(false);
  };

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...props}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle size={64} weight="bold" color={THEME.COLORS.SUCCESS} />
          <Heading title="Let's play!" subtitle="Agora é só começar a jogar!" style={{ alignItems: 'center', marginTop: 24 }} />

          <Text style={styles.label}></Text>

          <TouchableOpacity disabled={isCopying} onPress={handleCopyDiscordToClipboard} style={styles.discordButton}>
            <Text style={styles.discord}>{isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
