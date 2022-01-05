import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style"
export function Characters({ data }) {

  function render({ item }) {
    return (
      <TouchableOpacity>
        <View style={{ alignContent: 'center' }}>
          <Text style={{ color: "black" }}>{item.name}</Text>
          <Image style={styles.image}
            source={{ uri: item.imagePath }} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => `${item.name}`}
      renderItem={render}>
    </FlatList>
  )
}