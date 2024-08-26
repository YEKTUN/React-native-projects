import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import Todo from "./components/todo";
export default function App() {
  const [text, setText] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodoList([
        ...todoList,
        { id: Date.now(), date: new Date().toLocaleString(), text },
      ]);
      setText("");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          marginTop: 40,
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
          }}
          placeholder="Enter your work"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity>
          <FontAwesome
            onPress={addTodo}
            name="send-o"
            size={24}
            color="black"
            marginTop={8}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 12 }}>
        <FlatList
          style={{ flex: 5, justiftItems: "flex-end" }}
          data={todoList}
          renderItem={({ item }) => (
            <Todo
              style={{ marginTop: 10 }}
              text={item.text}
              id={item.id}
              todoList={todoList}
              setTodoList={setTodoList}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
