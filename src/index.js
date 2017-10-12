/* eslint-disable jsx-a11y/accessible-emoji, react/jsx-curly-brace-presence */
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
  Markdown,
  MarkdownSlides,
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

import imgQrQuestionnaire from './img/qr-questionnaire-link.png'
import imgQrPartsProductsPeople from './img/qr-picking-parts-products-people.png'

import './styles.css'

import ConfusingDiagrams from './ConfusingDiagrams'
import ButtonStorm from './ButtonStorm'
import Confetti from './Confetti'

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
        contentWidth={1600}
      >
        <Slide>
          📺
        </Slide>
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
          <Notes>
            <Markdown>{`
From **Defining Design Systems**
- Super broad
- Super vague
- Key words "efficient" and "cohesive"
`}
            </Markdown>
          </Notes>
          <BlockQuote style={{ maxWidth: 900 }}>
            <Quote textSize="2rem" style={{ lineHeight: 1.5 }} textColor="white">
              A <S type="bold" textColor="tertiary">design system</S> offers a library of
              <Appear><span> visual style</span></Appear><Appear><span>, components</span></Appear>
              <Appear><span>, and other concerns</span></Appear>
              <Appear><span> documented and released by an individual, team or community</span></Appear>
              <Appear><span> as code and design tools</span></Appear>
              <Appear>
                <span> so that adopting products can be more
                  <S type="italic"> efficient</S> and <S type="italic">cohesive.</S>
                </span>
              </Appear>
            </Quote>
            <Link href="https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6" target="_BLANK">
              <Cite>Nathan Curtis</Cite>
            </Link>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading margin="0 0px 1em" fit>Why do we need one?</Heading>
          <Appear>
            <Text textColor="secondary">(not for this meeting)</Text>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
- Excercise wherein we picked one element
- These are just the buttons
- We have buttons. Lots of buttons.
- Not just confusing for users
- **Inefficient**
  - Costs design hours
  - Costs development hours
  - Costs network bandwidth
- **Incoherent**
  - manage expectations
  - learning
`}
            </Markdown>
          </Notes>
          <ButtonStorm />
        </Slide>
        <Slide>
          <Heading size={2}>Definition</Heading>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
- Our design system offers [scope]
- released as  [outputs]
- and documented at [doc site]
- produced by [people]
- in order to serve [products]
- products and experiences.
`}
            </Markdown>
          </Notes>
          <Text margin="1em 0">Our design system offers <Code>{'{scope}'}</Code></Text>
          <Appear><Text margin="1em 0">released as <Code>{'{outputs}'}</Code></Text></Appear>
          <Appear><Text margin="1em 0">and documented at <Code>{'{doc site}'}</Code></Text></Appear>
          <Appear><Text margin="1em 0">produced by <Code>{'{people}'}</Code></Text></Appear>
          <Appear><Text margin="1em 0">in order to serve <Code>{'{products}'}</Code></Text></Appear>
        </Slide>
        <Slide>
          <Heading size={2} margin="0 0 1em">Front-end Questionnaire</Heading>
          <Link target="_blank" href="https://github.com/bradfrost/frontend-guidelines-questionnaire/">github.com/bradfrost/frontend-guidelines-questionnaire</Link>
          <Image src={imgQrQuestionnaire} display="block" />
        </Slide>
        <Slide>
          <Heading size={2} margin="0 0 1em">Parts, Products, &amp; People</Heading>
          <Link target="_blank" href="https://medium.com/eightshapes-llc/picking-parts-products-people-a06721e81742">medium.com/eightshapes-llc/picking-parts-products-people-a06721e81742</Link>
          <Image src={imgQrPartsProductsPeople} display="block" />
        </Slide>
        <Confetti />
      </Deck>
    )
  }
}
