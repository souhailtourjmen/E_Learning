import { StyleSheet} from 'react-native';
import { FONTSIZE } from '../../constant';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '##FCFBFF'
    },
    select:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
      },
      textSelect:{
        fontSize: FONTSIZE.size_16,
        fontWeight: '600',

      },
      viewItems: {
        marginTop: 10,
       
        padding: 10,
        borderRadius: 15,
        shadowColor: ' #00000014',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
      },
      item:{
        alignSelf: 'center',
        marginBottom: 10,
        
        padding: 10,
        width: '80%',
        borderRadius: 10,
      },
      textItem:{ textAlign: 'center'}
  });