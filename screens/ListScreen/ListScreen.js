/// Simo Partanen 1900414

import React, { useEffect, useState, useContext } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native'
import { firestore } from '../../firebase/config'
import { AuthContext } from '../../navigation/AuthProvider'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function ListScreen() {
  const [entityText, setEntityText] = useState('')
  const [todo, setTodo] = useState([])
  const todoRef = firestore().collection('todos')
  const {user, logout} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentText, setContentText] = useState('')
  const [dateText, setDateText] = useState('')
  const [updateID, setUpdateID] = useState('')
  const [updator, setupdator] = useState('')
  
  /// This is function for fetching the items in the Firebase database and pushing them to list 
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
/// This function is for rendering the items on the flatlist and providing buttons for update and delete
const renderEntity = ({item, index}) => {
  return (
      <View style={styles.entityContainer} >
          <Text style={styles.nameText}>
          {item.text} 
          </Text>
          <Text style={styles.dateText}>
          {item.date} 
          </Text>
          <Text style={styles.contentText}>
          {item.content} 
          </Text>
          <View style={styles.antDesign} >
          <AntDesign name="delete" color='white' size={25} onPress={() => onDelete(item.id)}/>
          <AntDesign name="edit" color='white' size={25} onPress={() => openModal(item.id)}/>
          </View>
      </View>
      
  )
}
/// This functions open an alert window where user can confirm that they want to delete this entry by pushing yes or canceling by cancel
/// After pushing yes the function deletes the entry in database and cancel returns user without deleting back to list page.
const onDelete = (deleteID) => {
    Alert.alert(
        "Delete",
        "Do you want to delete this entry?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Delete", onPress: () => firestore().collection('todos').doc(deleteID).delete()
          .then(function() {
            console.log("Remove succeeded.")
            entityRef.onSnapshot(
            )
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
          }) }
        ],
        { cancelable: false }
      );
    
}
/// This function opens the update modal in which user can update the entry in the database or cancel updating.
const onUpdate = () => {
    firestore().collection('todos').doc(updator).update(
        {
            text: entityText,
            content: contentText,
            date: dateText,
            
        }
        )
        .then(function() {
            console.log("Remove succeeded.")
            setUpdateID('')
            setEntityText('')
            setDateText('')
            setContentText('')
          })
    setModalVisible(false)
    console.log(modalVisible)

  }
  /// Function for opening the modal for updating the entry
  const openModal = (updateID) => {
    setupdator(updateID)
    setModalVisible(true)
  }
/// Separator for items in the flatlist
const itemSeparator = () => {
    return (
      <View
          style={{
              height: 5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };
  
    return (
      <View style={styles.container}>
        <Modal
            animationType = {"slide"}
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>      
              <View style={styles.modal}>
                <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='New name for this todo'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Change date'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDateText(text)}
                    value={dateText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Change extra information'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setContentText(text)}
                    value={contentText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onUpdate}
                >
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={setModalVisible}
                >
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
                </View>
            </View>
           </View>
       </Modal>
      { todo && (
          <View style={styles.listContainer}>
              <FlatList
                  data={todo}
                  renderItem={renderEntity}
                  keyExtractor={(item) => item.id}
                  removeClippedSubviews={true}
                  extraData={(item) => item.id}
                  ItemSeparatorComponent={itemSeparator}
              />
          </View>
          
      )}
  </View>
)
}

