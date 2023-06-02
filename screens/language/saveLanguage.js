import AsyncStorage from '@react-native-async-storage/async-storage';

const saveLanguage = async (selectedLanguage) => {
  try {
    await AsyncStorage.setItem('selectedLanguage', selectedLanguage);
  } catch (error) {
    console.error('Error saving language:', error);
  }
};

const loadLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
    if (storedLanguage !== null) {
      return storedLanguage;
    }
  } catch (error) {
    console.error('Error loading language:', error);
  }
  return 'Deutsch'; // default language
};

export { saveLanguage, loadLanguage };
