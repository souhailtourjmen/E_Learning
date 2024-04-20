import { StyleSheet } from "react-native";
import { COLORS } from "../../constant";

 export const styles = StyleSheet.create({
    button: {
      paddingBottom: 8,
      paddingTop: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
  
      position: 'relative',
      height: 'auto',
    },
    textLight: {
      color: COLORS.dark.tint,
      fontWeight: '600',
    },
    textDark: {color: COLORS.light.tint, fontWeight: '600'},
    fullWidth: {
      width: '100%',
    },
    small: {
      paddingTop: 3,
      paddingBottom: 5,
      paddingHorizontal: 8,
    },
    large: {
      paddingTop: 8,
      paddingBottom: 12,
      paddingHorizontal: 16,
    },
    rounded: {
      borderRadius: 30,
    },
    primary: {
      backgroundColor: COLORS.primary,
    },
    secondary: {
      backgroundColor: COLORS.transparent,
      borderColor: COLORS.darkGray,
      borderWidth: 1,
    },
    disabled: {
      backgroundColor: COLORS.darkGray,
      opacity: 0.8,
    },
    iconLeft: {
      marginLeft: -5,
    },
    iconRight: {
      marginRight: -5,
    },
    fullWidthIconLeft: {
      position: 'absolute',
      left: 8,
    },
    fullWidthIconRight: {
      position: 'absolute',
      right: 8,
    },
    fullWidthIconRightExtra: {
      position: 'absolute',
      right: 100,
    },
  });