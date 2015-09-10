
import React, { Component } from 'react'
import css from './app.css'
import { Container, PageHeader } from 'rebass'

export default class App extends Component {
  render() {
    return (
      <Container>
        <PageHeader
          title='Hello, Bass!' />
      </Container>
    )
  }
}

