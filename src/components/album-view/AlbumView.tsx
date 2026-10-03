import { View, Text, StyleSheet, Image } from "react-native";
import { LatestItem } from "../../api/latest";
import { fetchItemImage } from "../../api/itemImage";
import AppText from "../styled-components/AppText";

interface AlbumViewProps {
  item: LatestItem;
}

const AlbumView = ({ item }: AlbumViewProps) => {
  return (
    <View style={styles.container}>
      <Image
          source={fetchItemImage(item.Id, item.ImageTags?.Primary || '')}
          style={styles.image}
          resizeMode="cover"
      />
      <AppText style={styles.text}>{item.Name}</AppText>
      <AppText style={styles.text}>{item.AlbumArtist}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  text: {
    margin: 2,
  },
});

export default AlbumView;