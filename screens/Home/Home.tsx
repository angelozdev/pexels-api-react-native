import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { PhotoList } from "../../components";

// utils
import { usePhotos, useDebounce } from "../../hooks";

export default function HomeScreen() {
  const [query, setQuery] = useState("cats");
  const debouncedQuery = useDebounce(query);
  const { isLoading, data } = usePhotos({ query: debouncedQuery, perPage: 30 });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for photos"
        value={query}
        editable={!isLoading}
        onChange={(event) => setQuery(event.nativeEvent.text)}
      />

      <Text style={styles.resultsText}>{data?.total_results || 0} results</Text>
      <PhotoList images={data?.photos || []} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    paddingBottom: 100,
  },
  searchInput: {
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderColor: "#ccc",
  },
  resultsText: {
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "right",
  },
});
