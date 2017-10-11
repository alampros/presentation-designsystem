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

import ConfusingDiagrams from './ConfusingDiagrams'

const theme = createTheme({
  primary: 'white',
  secondary: '#0F1C2B',
  tertiary: '#006C96',
  quartenary: '#B7B9BA',
  brand: '#0F1C2B',
  white: 'white',
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={1000}
        transition={['fade']}
        theme={theme}
        contentHeight={800}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Design System
          </Heading>
          <Text textColor="tertiary" fit caps>
            Definitions, Requirements, &amp; Scope
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>What is a Design System?</Heading>
        </Slide>
        <Slide bgColor="white">
          <ConfusingDiagrams />
        </Slide>
        <Slide bgColor="secondary" transition={['slide', 'spin']}>
          <BlockQuote>
            <Quote textSize="2rem" style={{ lineHeight: 1.5 }} textColor="white">
              A <S type="bold" textColor="tertiary">design system</S> offers a library of
              <Appear><span> visual style</span></Appear><Appear><span>, components</span></Appear>
              <Appear><span>, and other concerns</span></Appear>
              <Appear><span> documented and released by an individual, team or community</span></Appear>
              <Appear><span> as code and design tools</span></Appear>
              <Appear>
                <span> so that adopting products can be more
                  <S type="underline"> efficient</S> and <S type="underline">cohesive.</S>
                </span>
              </Appear>
            </Quote>
            <Link href="https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6" target="_BLANK">
              <Cite>Nathan Curtis</Cite>
            </Link>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading fit>Why do we need one?</Heading>
        </Slide>
        <Slide>
          <Heading fit>How close are we?</Heading>
        </Slide>
      </Deck>
    )
  }
}
