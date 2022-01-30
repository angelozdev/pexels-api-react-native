import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

// utils
import { Screens } from "../consts";

// types
import { PhotoScreenNavigationProp } from "../types/react-navigation";

export function PhotoList({ images }: { images: Photo[] }) {
  return (
    <FlatList
      style={styles.container}
      data={images}
      renderItem={({ item }) => <PhotoCard {...item} />}
      keyExtractor={({ id }) => id.toString()}
      numColumns={2}
    />
  );
}

function PhotoCard(photo: Photo) {
  const { src, width, height } = photo;
  const navigation = useNavigation<PhotoScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(Screens.PHOTO_DETAILS, photo)}
    >
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: src.medium, width, height }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    width: "50%",
    padding: 4,
    borderRadius: 4,
  },
});

export default PhotoList;
