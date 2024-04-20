import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      arrow: {
        position: 'absolute',
      },
      textButton: { fontSize: 16, position: 'absolute'},
      itemContainer: {
        flex: 0.8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 120,
      },
      itemText: {
        textAlign: 'center',
        fontSize: 24,
  
        marginHorizontal: 20,
      },
      itemSubText: {
        textAlign: 'center',
        fontSize: 17,
        marginHorizontal: 20,
      },
      circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
  });