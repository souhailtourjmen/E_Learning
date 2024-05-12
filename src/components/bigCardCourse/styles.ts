import { StyleSheet} from 'react-native';
import { BORDERRADIUS, COLORS } from '../../constant';
export const styles = StyleSheet.create({
  container: {
 
    
    gap: 10,
    margin: 10,
    borderRadius: BORDERRADIUS.radius_15,
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
  }
  });