import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Col, Row } from "react-bootstrap";
import './App.css';





function Dashboard() {
    return (
        <div className='dashboard'>
            <Row className="mb-4 " style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Col  sm={5} md={6} style={{width:"45%"}}>
                    <div className='Heading'>
                        Oxygen Saturation SPO^2
                    </div>
                    <GaugeChart id="gauge-chart2"
                        nrOfLevels={20}
                        percent={0.55}
                    />
                </Col>
                <Col  sm={5} md={6} style={{width:"45%"}}>
                    <div className='Heading'>
                        Per rectum PR
                    </div>
                    <GaugeChart id="gauge-chart2"
                        nrOfLevels={20}
                        percent={0.67}
                    />
                </Col>
            </Row>
            <Row className="mb-4" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Col  sm={5} md={6} style={{width:"45%"}}>
                    <div className='Heading'>
                        Perfusion Index PI
                    </div>
                    <GaugeChart id="gauge-chart2"
                        nrOfLevels={20}
                        percent={0.45}
                    />
                </Col>
                <Col  sm={5} md={6} style={{width:"45%"}}>
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

export default Dashboard;
