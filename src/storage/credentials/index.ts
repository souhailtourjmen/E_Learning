import * as Keychain from 'react-native-keychain';

export const saveToken = async (token: string): Promise<void> => {
  try {
    if (token) {
      await Keychain.setInternetCredentials('ReserverApp', 'token', token);
      await Keychain.setInternetCredentials('ReserverConfigApp', 'userLogged', JSON.stringify(true));
    }
  } catch (error) {
    console.error('Error saving token: ', error);
  }
};

export const getToken = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials('ReserverApp');
   
    if (credentials) {
      const {password} = credentials;
      return password;
    } else {
      console.log('No token found.');
    }
  } catch (error) {
    console.error('Error retrieving token: ', error);
  }
};

export const logOut = async () => {
  try {
    // Retrieve the credentials
    await Keychain.resetInternetCredentials('ReserverApp');
    await Keychain.resetInternetCredentials('ReserverConfigApp');
  } catch (error) {
    console.log(`Failed to LogOut: ${error}`);
  }
};
