import React, { Component, PropTypes } from 'react';
import Counter from '../components/Counter';
import css from '../app.css';
import { Container, PageHeader } from 'rebass';

class App extends Component {
  render() {
    return (
      <Container>
        <PageHeader
          title="OAM Site" />
        <Counter />
      </Container>
    );
  }
};

export default App;