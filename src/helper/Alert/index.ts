import { Alert } from 'react-native';
interface IAlert {
    title: string;
    message: string;
    onPress?: () => void;
    onCancel?: () => void;
}
export const AlertC = ({ title, message, onCancel, onPress }: IAlert) => {

    Alert.alert(
        title ?? 'Confirmation',
        message ?? 'Do you want to proceed?',
        [
            { text: 'Cancel', onPress: () => onPress && onPress(), },
            { text: 'OK', onPress: () => onCancel && onCancel() },
        ],
    );
}