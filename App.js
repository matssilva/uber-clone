import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store/store';
import tw from 'twrnc';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`bg-white h-full`}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
