import {useState} from "react";
import {Button} from "reactstrap";
import AlbumInfoPane from "./AlbumInfoPane";


const AlbumDiscoveryPane = () => {
  const [showAlbumInfo, setShowAlbumInfo] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setShowAlbumInfo(!showAlbumInfo)}>
        <img className="album-cover" src="src/assets/thewayofallflesh.jpeg" alt="test_album_cover" />
      </Button>
      {showAlbumInfo && (
        <AlbumInfoPane/>
      )}
    </div>
  );
}
    
export default AlbumDiscoveryPane;
