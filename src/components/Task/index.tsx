import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

interface TaskProps {
  item: {
    id: string;
    text: string;
    isDone: boolean;
  };
  toggleTaskStatus: (id: string) => void;
  removeTask: (id: string) => void;
}

export function Task({ item, toggleTaskStatus, removeTask }: TaskProps) {
  const { isDone } = item;

  return (
    <View style={[styles.container, isDone && styles.inactiveContainer]}>
      <Pressable
        style={styles.checkboxArea}
        onPress={() => toggleTaskStatus(item.id)}
      >
        <View style={[styles.checkboxBase, isDone && styles.checkboxChecked]}>
          {isDone && <FontAwesome5 name="check" size={9} color="#f2f2f2" />}
        </View>
      </Pressable>

      <Text style={[styles.text, isDone && styles.textStrikethrough]}>
        {item.text}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeTask(item.id)}
      >
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
