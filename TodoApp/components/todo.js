import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const todo = ({ text, todoList, setTodoList, id, date }) => {
  const [editable, setEditable] = useState(false);
  const [localText, setLocalText] = useState(text);
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const handleChangeText = (newText) => {
    setLocalText(newText);
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <View
      style={{
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
      }}
    >
      <View>
        <Text>{date}</Text>
        <TextInput
          value={localText}
          onChangeText={handleChangeText}
          editable={editable}
          style={{
            color: "black",
            width: 270,
            borderBottomWidth: editable ? 2 : 0,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginEnd: 10 }}>
        <AntDesign
          onPress={() => setEditable(!editable)}
          name="edit"
          size={24}
          color="black"
        />
        <AntDesign
          onPress={handleDelete}
          name="delete"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({});
