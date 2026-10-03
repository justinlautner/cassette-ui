import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchLatest } from './api/latest';
import { fetchItemImage } from './api/itemImage';

export default function App() {
  const {data: latest = [], isPending, error} = useQuery({
    queryKey: ['latest'],
    queryFn: fetchLatest,
  });

  if (isPending) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error instanceof Error ? error.message : 'Unknown error'}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  const firstItem = latest[0];
  const imageTag = firstItem?.ImageTags?.Primary;

  return (
    <View style={styles.container}>
      {firstItem && imageTag ? (
        <Image
          source={fetchItemImage(firstItem.Id, imageTag)}
          style={{ width: 342, height: 342 }}
          resizeMode="cover"
        />
      ) : (
        <Text>No primary image available</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
