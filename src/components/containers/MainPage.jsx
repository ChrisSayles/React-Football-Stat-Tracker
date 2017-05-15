import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class MainPage extends Component {
  render() {
    return (
      <Grid style={{marginTop: 6+'rem'}}>
        <Row className="show-grid">
          <Col xs={12} md={8}>MAIN PAGE</Col>
        </Row>
      </Grid>
    );
  }
}

export default MainPage;