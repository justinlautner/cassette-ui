import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RecentlyAddedAlbums from './components/recently-added/RecentlyAddedAlbums';
import { NavigationContainer } from '@react-navigation/native';
import AlbumView from './components/album-view/AlbumView';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LatestItem } from './api/latest';

type RootStackParamList = {
  RecentlyAdded: undefined;
  Album: { item: LatestItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type RecentlyAddedScreenProps =
  NativeStackScreenProps<RootStackParamList, 'RecentlyAdded'>;

function RecentlyAddedScreen({ navigation }: RecentlyAddedScreenProps) {
  return (
    <RecentlyAddedAlbums
      onSelectAlbum={(item) => navigation.navigate('Album', { item })}
    />
  );
}

type AlbumScreenProps = NativeStackScreenProps<RootStackParamList, 'Album'>;

function AlbumScreen({ route }: AlbumScreenProps) {
  return <AlbumView item={route.params.item} />;
}

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.screen,
              headerStyle: styles.header,
              headerTintColor: '#E4E4E7',
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="RecentlyAdded"
              component={RecentlyAddedScreen}
              options={{ title: 'Recently Added' }}
            />
            <Stack.Screen
              name="Album"
              component={AlbumScreen}
              options={{ title: 'Album' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    width: '100%',
  },
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#121212',
  },
});
