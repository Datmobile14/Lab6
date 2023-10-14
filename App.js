import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Switch } from 'react-native';
import TextExample from './TextExample';
export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState();

  const languages = [
    "Java",
    "JavaScript",
    "Python",
    "PHP"
  ]

  const [isEnabled, setIsEnabled] = useState(false);

  const [isHiddenStatusBar, setHiddenStatusBar] = useState(false);

  const toggleSwitch = () => {

    setIsEnabled(!isEnabled)

    setHiddenStatusBar(!isEnabled)

  };

  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#ff0000"
        hidden={isHiddenStatusBar}
      />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          alert(`Ngon ngu da chon: ${languages[itemIndex]}`)
          setSelectedLanguage(itemValue)

        }


        }>
        <Picker.Item label={languages[0]} value="java" />
        <Picker.Item label={languages[1]} value="js" />
        <Picker.Item label={languages[2]} value="py" />
        <Picker.Item label={languages[3]} value="php" />
      </Picker>

      <View style={styles.switchContainer}>

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <Text>{!isEnabled ? "  Ẩn status bar" : "  Hiện status bar"}</Text>
      </View>

<TextExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});