import { ScrollView, Image, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchLatest, LatestItem } from '../../api/latest';
import { fetchItemImage } from '../../api/itemImage';

interface RecentlyAddedAlbumsProps {
  onSelectAlbum: (item: LatestItem) => void;
}

const RecentlyAddedAlbums = ({
  onSelectAlbum,
}: RecentlyAddedAlbumsProps) => {
    const {data: latest = [], isPending, error} = useQuery({
        queryKey: ['latest'],
        queryFn: fetchLatest,
    });

    if (isPending) {
        return (
            <Text>Loading...</Text>
        );
    }

    if (error) {
        return (
            <Text>Error: {error instanceof Error ? error.message : 'Unknown error'}</Text>
        );
    }
    
    return (
        <View>
            <Text style={styles.heading}>Recently Added Albums</Text>
                {latest.length > 0 && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageRow}>
                    {latest.map((item) => (
                        <Pressable key={item.Id} onPress={() => onSelectAlbum(item)}>
                            <Image
                                source={fetchItemImage(item.Id, item.ImageTags?.Primary || '')}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </Pressable>
                    ))}
                    </ScrollView>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#E4E4E7',
  },
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default RecentlyAddedAlbums;
