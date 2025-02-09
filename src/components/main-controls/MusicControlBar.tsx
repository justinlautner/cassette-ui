import {useState} from "react";
import {Container, Row, Col, Label} from "reactstrap";


const MusicControlBar: React.FC = () => {
  const [volume, setVolume] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* save this for a left nav bar i think, or only in playlistview */}
        {/* <Col md="2">
          <Input type="text" placeholder="Search for music" className="mb-2" />
          <Label>Genres</Label>
          <hr />
        </Col> */}
        <Col md="10">
          <button onClick={() => console.log('Previous Track')}><img src="src/assets/media-controls/previousTrackButton.png" alt="previous button icon" className="control-buttons" /></button>
          {isPlaying ?  
            <button onClick={() => setIsPlaying(!isPlaying)}><img src="src/assets/media-controls/pauseButton.png" alt="pause button icon" className="control-buttons" /></button>
            :
            <button onClick={() => setIsPlaying(!isPlaying)}><img src="src/assets/media-controls/playButton.png" alt="play button icon" className="control-buttons" /></button>
          }
          <button onClick={() => setIsPlaying(false)}><img src="src/assets/media-controls/stopButton.png" alt="next button icon" className="control-buttons" /></button>
          <button onClick={() => console.log('Next Track')}><img src="src/assets/media-controls/nextTrackButton.png" alt="next button icon" className="control-buttons" /></button>
          <Label>Volume: {volume}%</Label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default MusicControlBar;
