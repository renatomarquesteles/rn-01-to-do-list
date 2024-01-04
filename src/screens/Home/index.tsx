import { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '../../components/Task';

import { styles } from './styles';

export function Home() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: 'School', isDone: false },
    { id: uuidv4(), text: 'Homework', isDone: false },
    { id: uuidv4(), text: 'Workout', isDone: false },
    { id: uuidv4(), text: 'Clean the bedroom', isDone: false },
  ]);
  const tasksDoneQuantity = tasks.reduce((sum, item) => {
    if (item.isDone) return sum + 1;

    return sum;
  }, 0);

  function toggleTaskStatus(id: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }

        return task;
      })
    );
  }

  function removeTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={{
            ...styles.input,
            borderColor: isInputFocused ? '#5e60ce' : '#0d0d0d',
          }}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
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
          <Text style={styles.tag}>{tasks.length}</Text>
        </View>
        <View style={styles.tagWrapper}>
          <Text style={styles.doneText}>Done</Text>
          <Text style={styles.tag}>{tasksDoneQuantity}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        style={styles.tasks}
        renderItem={({ item }) => (
          <Task
            item={item}
            toggleTaskStatus={toggleTaskStatus}
            removeTask={removeTask}
          />
        )}
        ListEmptyComponent={<EmptyList />}
      />
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
