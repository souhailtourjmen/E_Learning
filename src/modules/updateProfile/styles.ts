import {StyleSheet,Dimensions} from 'react-native';
import { COLORS, } from '../../constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flex:1,
    padding:20,
    marginBottom:10
  },
  containerMenuProfil: {
    
  },
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
  bottomBtnContainer:{
    flex:.1,
    justifyContent:'flex-end',
  },
  styleComponent:{
    width: '100%',
    minHeight: 64,
    borderRadius: 30,
  },
  form:{
    flex:1,
  }
});
