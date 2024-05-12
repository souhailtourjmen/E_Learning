import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant";


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: COLORS.light.tint,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {

  },
  time: {
    alignSelf: "flex-end",
    color: 'grey'
  }
});

export default styles;
