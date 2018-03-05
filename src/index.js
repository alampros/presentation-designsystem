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

import imgUmbrella from './img/umbrella.png'
import videoRalph from './img/ralph.mp4'

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
    const $vdiv = (
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '100%',
          borderRight: '1px solid gray',
          transform: 'scale(0.25, 1)'
        }}
      >&nbsp;</span>
    )
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
            Progress Update {$vdiv} March, 2018
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
                <span>
                  &nbsp;so that adopting products can be more
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
          <Heading margin="0 0px 1em" fit>UI Inventory</Heading>
          <Appear>
            <Text textColor="secondary">(audit)</Text>
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
          <Cite>Jeremy Keith / Alla Kholmatavo</Cite>
        </Slide>
        <Slide>
          <Text margin="1em 0">Our design system offers <Code>{'{scope}'}</Code></Text>
          <hr />
          <Image src={imgUmbrella} display="block" />
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
        </Slide>
        <Slide>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0">released as <Code>{'{outputs}'}</Code></Text>
          <hr />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Code Packages</TableHeaderItem>
                <TableHeaderItem>Design Assets</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <Appear><TableItem>Design Tokens</TableItem></Appear>
                <TableItem style={{ opacity: 0 }}>Adobe Color Swatches</TableItem>
              </TableRow>
              <TableRow>
                <Appear><TableItem>Language Tokens</TableItem></Appear>
                <TableItem style={{ opacity: 0 }}>Sketch Symbol Libraries</TableItem>
              </TableRow>
              <TableRow>
                <Appear><TableItem>Iconography</TableItem></Appear>
                <TableItem style={{ opacity: 0 }}>OS Color Profiles</TableItem>
              </TableRow>
              <TableRow>
                <Appear><TableItem>Components</TableItem></Appear>
                <TableItem style={{ opacity: 0 }}>Custom Dictionaries</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
        </Slide>
        <Slide>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0">released as <Code>{'{outputs}'}</Code></Text>
          <hr />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Code Packages</TableHeaderItem>
                <TableHeaderItem>Design Assets</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>Design Tokens</TableItem>
                <Appear><TableItem>Adobe Color Swatches</TableItem></Appear>
              </TableRow>
              <TableRow>
                <TableItem>Language Tokens</TableItem>
                <Appear><TableItem>Sketch Symbol Libraries</TableItem></Appear>
              </TableRow>
              <TableRow>
                <TableItem>Iconography</TableItem>
                <Appear><TableItem>OS Color Profiles</TableItem></Appear>
              </TableRow>
              <TableRow>
                <TableItem>Components</TableItem>
                <Appear><TableItem>Custom Dictionaries</TableItem></Appear>
              </TableRow>
            </TableBody>
          </Table>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
        </Slide>
        <Slide>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0">released as <Code>{'{outputs}'}</Code></Text>
          <hr />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Code Packages</TableHeaderItem>
                <TableHeaderItem>Design Assets</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem style={{ color: 'green' }}>Design Tokens</TableItem>
                <TableItem style={{ color: 'green' }}>Adobe Color Swatches</TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ color: 'gray' }}>Language Tokens</TableItem>
                <TableItem style={{ color: 'green' }}>Sketch Symbol Libraries</TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ color: 'green' }}>Iconography</TableItem>
                <TableItem style={{ color: 'green' }}>OS Color Profiles</TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ color: 'gray' }}>Components</TableItem>
                <TableItem style={{ color: 'gray' }}>Custom Dictionaries</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
          <Text margin="1em 0">&nbsp;</Text>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>released as <Code>{'{outputs}'}</Code></Text>
          <Text margin="1em 0">and documented at <Code>{'{doc site}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>produced by <Code>{'{people}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>in order to serve <Code>{'{products}'}</Code></Text>
        </Slide>
        <Slide style={{ marginTop: '-100px' }}>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>released as <Code>{'{outputs}'}</Code></Text>
          <Text margin="1em 0">and documented at <Code>{'{doc site}'}</Code></Text>
          <hr />
          <List style={{ display: 'inline-block' }}>
            <Appear><ListItem>Internal URI</ListItem></Appear>
            <Appear><ListItem>External CMS</ListItem></Appear>
            <Appear><ListItem>Statically Generated HTML</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <Text margin="1em 0" style={{ opacity: 0.10 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.20 }}>released as <Code>{'{outputs}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>and documented at <Code>{'{doc site}'}</Code></Text>
          <Text margin="1em 0">produced by <Code>{'{people}'}</Code></Text>
          <Text margin="1em 0" style={{ opacity: 0.33 }}>in order to serve <Code>{'{products}'}</Code></Text>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <div style={{ transform: 'translateY(-250px)' }}>
            <Text margin="1em 0" style={{ opacity: 0.1 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.2 }}>released as <Code>{'{outputs}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>and documented at <Code>{'{doc site}'}</Code></Text>
            <Text margin="1em 0">produced by <Code>{'{people}'}</Code></Text>
            <hr style={{ margin: '2em 0' }} />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>Currently</TableHeaderItem>
                  <TableHeaderItem>Ideally</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <Appear><TableItem>Me</TableItem></Appear>
                  <TableItem style={{ opacity: 0 }}>X-Func Team</TableItem>
                </TableRow>
                <TableRow>
                  <Appear>
                    <TableItem>
                      <video
                        src={videoRalph}
                        autoPlay
                        loop
                        width={480}
                        height={360}
                      />
                    </TableItem>
                  </Appear>
                  <TableItem />
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <div style={{ transform: 'translateY(-250px)' }}>
            <Text margin="1em 0" style={{ opacity: 0.1 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.2 }}>released as <Code>{'{outputs}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>and documented at <Code>{'{doc site}'}</Code></Text>
            <Text margin="1em 0">produced by <Code>{'{people}'}</Code></Text>
            <hr style={{ margin: '2em 0' }} />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>Currently</TableHeaderItem>
                  <TableHeaderItem>Ideally</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>Me</TableItem>
                  <TableItem>X-Func Team</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem style={{ opacity: 0 }}>
                    <video
                      src={videoRalph}
                      autoPlay
                      loop
                      width={480}
                      height={360}
                    />
                  </TableItem>
                  <TableItem>
                    <List style={{ display: 'inline-block' }}>
                      <ListItem>Product</ListItem>
                      <ListItem>UX</ListItem>
                      <ListItem>Development</ListItem>
                      <ListItem>Creative</ListItem>
                    </List>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Slide>
        <Slide>
          <Notes>
            <Markdown>{`
`}
            </Markdown>
          </Notes>
          <div style={{ transform: 'translateY(-250px)' }}>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>Our design system offers <Code>{'{scope}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>released as <Code>{'{outputs}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>and documented at <Code>{'{doc site}'}</Code></Text>
            <Text margin="1em 0" style={{ opacity: 0.33 }}>produced by <Code>{'{people}'}</Code></Text>
            <Text margin="1em 0">in order to serve <Code>{'{products}'}</Code></Text>
            <hr style={{ margin: '2em 0' }} />
            <List style={{ display: 'inline-block' }}>
              <Appear><ListItem>B2B Ordering Portal</ListItem></Appear>
              <Appear><ListItem>DRSG &amp; Inspections</ListItem></Appear>
              <Appear><ListItem>RightTurn</ListItem></Appear>
              <Appear><ListItem>OTS</ListItem></Appear>
              <Appear><ListItem>eServices</ListItem></Appear>
              <Appear><ListItem>Creative Services Projects</ListItem></Appear>
              <Appear><ListItem>Internal Design Projects</ListItem></Appear>
            </List>
          </div>
        </Slide>
        <Confetti />
      </Deck>
    )
  }
}
