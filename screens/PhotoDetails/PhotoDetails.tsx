import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

// types
import { PhotoScreenRouteProp } from "../../types/react-navigation";

export function PhotoDetails() {
  const { params } = useRoute<PhotoScreenRouteProp>();
  console.log("route :", params);
  return (
    <View>
      <Image
        style={{ resizeMode: "cover" }}
        source={{
          uri: params.src.large,
          height: 400,
        }}
      />
    </View>
  );
}

export default PhotoDetails;
