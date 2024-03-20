import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingHorizontal: 10,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1
  },
  listContainer: {
    borderTopWidth: 1,
    flex: 3
  },
  note: {
    marginBottom: 30,
    backgroundColor: '#eee',
  }
});

export default function App() {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState([]);
  const handleOnChangeText = (value) => {
    setValue(value);
  }
  const handleOnPressButton = () => {
    setNotes((prevNotes) => [...prevNotes, value]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleOnChangeText} style={styles.input} placeholder='Add your note' />
        <Button onPress={handleOnPressButton} color={'#000'} title="Add note" />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          {notes.map((note, index) => (
            <Text style={styles.note} key={index}>{note}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
