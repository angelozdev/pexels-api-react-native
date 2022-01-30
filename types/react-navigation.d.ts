import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screens } from "../consts";

type RootStackParamList = {
  [Screens.PHOTO_DETAILS]: Photo;
  [Screens.HOME]: undefined;
};

type PhotoScreenProp = NativeStackScreenProps<
  RootStackParamList,
  Screens.PHOTO_DETAILS
>;

export type PhotoScreenNavigationProp = PhotoScreenProp["navigation"];
export type PhotoScreenRouteProp = PhotoScreenProp["route"];
