import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-tomorrow.css'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

import React from 'react'

/* eslint-disable no-unused-vars */
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  S,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
} from 'spectacle'
/* eslint-enable no-unused-vars */

import createTheme from 'spectacle/lib/themes/default'

import './styles.css'

const theme = createTheme({
  primary: 'white',
  secondary: '#0F1C2B',
  tertiary: '#006C96',
  quartenary: '#B7B9BA'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Design System
          </Heading>
          <Text textColor="tertiary" fit caps>
            Definitions, Requirements, &amp; Scope
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Appear>
            <Heading size={1} textColor="secondary">Heading 1</Heading>
          </Appear>
          <Appear>
            <Text size={6} textColor="secondary">Standard text</Text>
          </Appear>
        </Slide>
      </Deck>
    )
  }
}
