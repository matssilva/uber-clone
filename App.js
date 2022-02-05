import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store/store';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={tw`bg-white h-full`}>
          <HomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>

  );
}
