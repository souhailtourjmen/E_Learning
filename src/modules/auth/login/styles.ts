import {StyleSheet} from 'react-native';
import { FONTFAMILY } from '../../../constant';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  VIEWTitle: {
    alignItems: 'center',
    alignSelf: 'center',
    
    marginBottom: '5%',
  },
  title: {marginBottom: '5%'},
  subtitle: {textAlign: 'center'},
  form: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 302,
  },
  mdp: {
    marginTop: '2%',
    alignItems: 'flex-end',
   
  },
  BTnSocial: {
    marginTop: '2%',
    alignItems: 'center',
    alignSelf: 'center',
   
    marginBottom: '25%',
  },
  btnSubmit: {
    marginTop: '5%',
    marginBottom: '2%',
    alignItems: 'center',
    alignSelf: 'center',
   
  },
  separator: {
    marginTop: '5%',
    marginBottom: '5%',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  styleComponent: {
    width: 302,
    minHeight: 64,
    borderRadius: 30,
  },
  styleText: {
    width: 300,
    minHeight: 50,
  },
  styleInput: {
    width: 300,
    height: 50,
    backgroundColor: '#D3E0EA52',
    borderRadius: 30,
  },
  titleContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  radio: {
    margin: 2,
  },
  radioTitle:{
    fontFamily:FONTFAMILY['poppins_bold'],
    marginLeft:5,
  },
  radioSubTitle:{
    textAlign:'left',
    marginTop:10,
    marginLeft:5,
    color:'#011A33',
    opacity:.64
  }
});
