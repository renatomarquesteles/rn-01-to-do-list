import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <Feather name="plus-circle" size={20} color="#f2f2f2" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.tagWrapper}>
          <Text style={styles.createdText}>Created</Text>
          <Text style={styles.tag}>0</Text>
        </View>
        <View style={styles.tagWrapper}>
          <Text style={styles.doneText}>Done</Text>
          <Text style={styles.tag}>0</Text>
        </View>
      </View>

      <EmptyList />
    </View>
  );
}

function EmptyList() {
  return (
    <View style={styles.emptyListContainer}>
      <Ionicons name="md-clipboard-outline" size={56} color="#808080" />
      <Text style={styles.emptyListTitle}>You have no tasks</Text>
      <Text style={styles.emptyListText}>
        Create a new one to start your to-do list
      </Text>
    </View>
  );
}
