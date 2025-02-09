import { useState } from "react";
import { Container, Row, Col, Input, Label, Button } from "reactstrap";


const MusicControlBar: React.FC = () => {
    const [volume, setVolume] = useState(100);
  
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(Number(e.target.value));
    };

    return (
        <Container fluid className="mt-4">
            <Row>
            <Col md="2" className="sidebar">
                <Input type="text" placeholder="Search for music" className="mb-2" />
                <Label className="genre-label">Genres</Label>
                <hr />
            </Col>
            <Col md="10">
                <Button onClick={() => console.log('Previous Track')}><img src="src/assets/media-controls/previousTrackButton.png" alt="button icon" style={{ width: "50px", height: "50px" }} /></Button>
                <Button onClick={() => console.log('Play')}><img src="src/assets/media-controls/playButton.png" alt="button icon" style={{ width: "50px", height: "50px" }} /></Button>
                <Button onClick={() => console.log('Stop')}><img src="src/assets/media-controls/pauseButton.png" alt="button icon" style={{ width: "50px", height: "50px" }} /></Button>
                <Button onClick={() => console.log('Next Track')}><img src="src/assets/media-controls/nextTrackButton.png" alt="button icon" style={{ width: "50px", height: "50px" }} /></Button>
                <Label>Volume: {volume}%</Label>
                <Input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </Col>
            </Row>
        </Container>
    );
}
export default MusicControlBar;