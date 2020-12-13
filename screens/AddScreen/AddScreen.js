/// Simo Partanen 1900414 
/// Importing firestore so I can use firebase functionality with functions

import React, { useEffect, useState, useContext } from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { firestore } from '../../firebase/config'
import { AuthContext } from '../../navigation/AuthProvider'

import styles from './styles';

export default function ListScreen() {
  const [entityText, setEntityText] = useState('')
  const [todo, setTodo] = useState([])
  const [dateText, setDateText] = useState('')
  const [contentText, setContentText] = useState('')
  const todoRef = firestore().collection('todos')
  const {user} = useContext(AuthContext);

  useEffect(() => {
    todoRef
        .where("authorID", "==", user.uid)
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                setTodo(newEntities)
            },
            error => {
                console.log(error)
            }
        )
}, [])
  /// This function adds new tasks to the Firebase database. After that it clears the boxes from texts.
  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
        const timestamp = firestore.FieldValue.serverTimestamp();
        const data = {
            text: entityText,
            date: dateText,
            content: contentText,
            authorID: user.uid,
            createdAt: timestamp,
        };
        todoRef
            .add(data)
            .then(_doc => {
                setEntityText('')
                setContentText('')
                setDateText('')
                Keyboard.dismiss()
            })
            .catch((error) => {
                alert(error)
            });
    }
}
    return (
      <View style={styles.container}>
      <Text style={styles.headerText}>New task</Text>
      <View style={styles.formContainer}> 
          <TextInput
              style={styles.input}
              placeholder='Add a task to todo list!'
              placeholderTextColor="gray"
              onChangeText={(text) => setEntityText(text)}
              value={entityText}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          <TextInput
              style={styles.input}
              placeholder='Date (DD.MM.YYYY)'
              placeholderTextColor="gray"
              onChangeText={(text) => setDateText(text)}
              value={dateText}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
          <TextInput
              style={styles.extrainput}
              placeholder='Information'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setContentText(text)}
              value={contentText}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
          />
      </View>
      <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
       <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
  </View>
)
}