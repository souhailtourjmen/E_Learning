import { Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../constant';
export const styles = StyleSheet.create({
  titleContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    
    alignItems:'center',
    flexDirection:'row',
    width:Dimensions.get('window').width,
    minHeight:50
  },
  titleTextContainer:{
    flex:1,
    backgroundColor:COLORS.transparent,
    alignItems:'center'
  },
  });