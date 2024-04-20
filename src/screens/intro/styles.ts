import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE } from "../../constant";

export const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
  },
  container: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
  textStyle: {
    color: COLORS.background,
    fontSize: FONTSIZE.size_32,
    alignSelf: "center",
    marginTop: "15%",
    fontFamily:FONTFAMILY.poppins_bold
  },
});
