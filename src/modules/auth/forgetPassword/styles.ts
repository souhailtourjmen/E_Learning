import { StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY } from '../../../constant';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
    
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
    },
    contentContainer: {
        backgroundColor: COLORS.background,
        flex: 1,
        padding: 20
    },
    containerMenuProfil: {
        backgroundColor: COLORS.transparent,
    },
    titleContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: COLORS.transparent,
        marginTop:10,
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    titleTextContainer: {
        flex: 1,
        backgroundColor: COLORS.transparent,
        alignItems: 'center'
    },
    bottomBtnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom:20
    },
    styleComponent: {
        width: '100%',
        minHeight: 64,
        borderRadius: 30,
    },
    form: {
        flex: 1,
    },
    titleText:{
        fontSize:24,
        fontFamily:FONTFAMILY['poppins_bold']
    },
    titleSubText:{
        marginTop:20,
        lineHeight:25
    }
});
