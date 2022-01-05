import './App.css';

// Dashboard
import GaugeChart from 'react-gauge-chart';
import { Col, Row, Button } from "react-bootstrap";
// import { fontSize } from '@mui/system';

function App() {
  return (
    <div className='dashboard'>
      <Row className="mb-4 ">
        <Col as={Col} sm={5} md={6}>
          <div className='Heading'>
            Oxygen Saturation SPO^2
          </div>
          <GaugeChart id="gauge-chart2"
            nrOfLevels={20}
            percent={0.55}
          />
        </Col>
        <Col as={Col} sm={5} md={6}>
          <div className='Heading'>
            Per rectum PR
          </div>
          <GaugeChart id="gauge-chart2"
            nrOfLevels={20}
            percent={0.67}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col as={Col} sm={5} md={6}>
          <div className='Heading'>
            Perfusion Index PI
          </div>
          <GaugeChart id="gauge-chart2"
            nrOfLevels={20}
            percent={0.45}
          />
        </Col>
        <Col as={Col} sm={5} md={6}>
          <div className='Heading'>
            Temperature Temp
          </div>
          <GaugeChart id="gauge-chart2"
            nrOfLevels={20}
            percent={0.22}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
