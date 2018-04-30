import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {BlockQuote, Cite, CodePane, Deck, Fill, Fit, Heading, Image, Layout, Link, List, ListItem, Quote, S, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
//
// Import code examples
//
import code from './examples/code';
import config from './examples/config';
import hmrServer from './examples/server';
import hmrIndex from './examples/index';
import interpolation from './examples/interpolation';
import jsx from './examples/jsx';
import jsxCompiled from './examples/jsx-compiled'
import mnShim from './examples/mn+morphdom';
import polymer from './examples/polymer';
import polymerIndex from './examples/polymer-index';
import reconciliation from './examples/reconciliation';
//
// Import PrismJS and its dependencies
//
require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');
import Prism from 'prismjs/components/prism-core'; // eslint-disable-line no-unused-vars
import 'prismjs/components/prism-markup-templating';
//
// Import and preload images
//
const preload = images => {
    images.forEach(src => {
        const image = new Image();
        image.src = src;
    });
};
const allTheThings = require('../assets/all-the-things.jpg');
const buzzwords = require('../assets/buzzwords.gif');
const cheatsheet = require('../assets/fp-cheatsheet.jpg');
const choices = require('../assets/choices.svg');
const city = require('../assets/city.jpg');
const cloud = require('../assets/logo-cloud.png');
const figwheel = require('../assets/figwheel.png');
const frontend = require('../assets/frontend.png');
const hyperapp = require('../assets/hyperapp.png');
const inferno = require('../assets/inferno.png');
const npmStart = require('../assets/npm-start.png');
const preact = require('../assets/preact.png');
const thanos = require('../assets/it-all-led-to-this.gif');
preload([
    allTheThings,
    buzzwords,
    cheatsheet,
    choices,
    city,
    cloud,
    figwheel,
    frontend,
    hyperapp,
    inferno,
    npmStart,
    preact,
    thanos
]);
//
// Create Spectacle theme
const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
});

class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Heading fit caps lineHeight={1} textColor="secondary">
                  Web Apps Must be
                </Heading>
                <Heading fit caps lineHeight={1} textColor="secondary">
                Sustainable
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                How to leverage common patterns to enable flexibility
                </Text>
            </Slide>
        );
    }
}
const Hello = ({className}) => (
    <Slide>
    	<div className={className}>Hello!</div>
        <span>This component is styled with Emotion</span>
    </Slide>
);
const FancyHello = styled(Hello)`
    color: hotpink;
    font-size: 4em;
`;
Hello.propTypes = {
    className: PropTypes.string
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['slide']} transitionDuration={200} theme={theme}>
                <Title />
                <Slide bgImage={allTheThings} bgDarken={0.7}>
                    <Heading textColor="primary" fit caps>Sustain all the things!</Heading>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <Heading>sus·tain·a·ble</Heading>
                    <BlockQuote>
                        <Quote>able to be maintained at a certain rate or level</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <Heading>sus·tain·a·ble</Heading>
                    <BlockQuote>
                        <Quote>able to be maintained <S type="strikethrough"> at a certain rate or level</S> by a certain group of developers</Quote>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading size={4}>I wanted to share this</Heading>
                    <br/>
                    <Image src={choices}/>
                </Slide>
                <Slide>
                    <Heading size={4}>I wanted to share FP</Heading>
                    <br/>
                    <Layout>
                        <Fill>
                            <Text>3 T's of FP</Text>
                            <List>
                                <ListItem>Immutabili<S type="bold">ty</S></ListItem>
                                <ListItem>Composabili<S type="bold">ty</S></ListItem>
                                <ListItem>Puri<S type="bold">ty</S></ListItem>
                            </List>
                        </Fill>
                        <Fill><Image src={cheatsheet}/></Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading size={4}>...and a few other things ;)</Heading>
                    <Image src={cloud} />
                </Slide>
                <Slide bgImage={thanos} bgDarken={0.7}>
                    <Heading textColor="white" fit>Dread it, run from it,</Heading>
                    <Heading textColor="white" fit>destiny arrives all the same.</Heading>
                    <Heading textColor="white" fit>And now, the frontend is here.</Heading>
                </Slide>
                <Slide>
                    <Image src={buzzwords} height={700} />
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>They provide distal access</Quote>
                        <Cite>Allen Newell (on names)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading fit>Buzzwords are just Names</Heading>
                    <br/>
                    <Text>
                        That is, a <S type="italic">name</S> is a local piece of data that stands for some other piece of data, which is presumably large and remote.
                    </Text>
                    <br/>
                    <Text>You can now use that small, convenient, local datum instead of the large, remote thing for which it stands.</Text>
                    <Link href="https://blog.janestreet.com/whats-in-a-name/" fit>What's in a name?</Link>
                </Slide>
                <Slide>
                    <Text><S type="bold">Jim</S>: "Hey Bob! Have you tried integrating uni-directional, immutable store, state management with your declarative virtual-DOM based view rendering implementation?"</Text>
                    <br/>
                    <Text><S type="bold">Bob</S>: "Yeah, Redux with React is pretty cool"</Text>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>I encode the patterns of reality</Quote>
                        <Cite>Me (What I like to tell my family about my vocation)</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Buzzwords provide distal access to popular patterns</Quote>
                        <Cite>Me</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <Heading fit>Hot Module Replacement (HMR)</Heading>
                    <BlockQuote>
                        <Quote>[code] updated at runtime without the need for a full refresh</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>If you are using React [...] it's not hard to write reloadable code, in fact you might be doing it already.</Quote>
                        <Cite>lein-figwheel README</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <Heading fit>Reloadable Code</Heading>
                    <BlockQuote>
                        <Quote>referentially transparent code and code that only defines behavior without bundling state with the behavior.</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>...it usually means that an expression always evaluates to the same result in any context.</Quote>
                        <Cite>Haskell Wiki on "Referential Transparency"</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>...an oft-touted property of (pure) functional languages, which makes it easier to reason about the behavior of programs.</Quote>
                        <Cite>Haskell Wiki on "Referential Transparency"</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading fit>HMR with React/Webpack</Heading>
                    <List>
                        <ListItem>Install some dependencies</ListItem>
                        <ListItem>Configure Webpack</ListItem>
                        <ListItem>Write an HMR entry point</ListItem>
                        <ListItem>Write an HMR server</ListItem>
                    </List>
                    <Image src={npmStart} />
                </Slide>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={config}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 40], title: 'HMR w/ React'},
                        {loc: [0, 4]},
                        {loc: [6, 12]},
                        {loc: [12, 17]},
                        {loc: [17, 21]},
                        {loc: [22, 28]}/* eslint-enable no-magic-numbers */
                    ]}/>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={hmrIndex}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 40], title: 'HMR w/ React'},
                        {loc: [1, 8]},
                        {loc: [8, 14]},
                        {loc: [14, 20]},
                        {loc: [20, 40]}
                    ]}/>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={hmrServer}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 40], title: 'HMR w/ React'},
                        {loc: [1, 9]},
                        {loc: [9, 14]},
                        {loc: [14, 15]},
                        {loc: [15, 18]},
                        {loc: [18, 21]},
                        {loc: [21, 40]}
                    ]}/>
                <Slide>
                    <Heading fit>HMR with less work</Heading>
                    <List>
                        <ListItem>Use boilerplate or a CLI tool</ListItem>
                        <ListItem>ClojureScript (with figwheel)</ListItem>
                    </List>
                    <Image src={figwheel} />
                </Slide>
                <Slide>
                    <Heading>Core Patterns</Heading>
                    <List>
                        <ListItem>Functional Programming*</ListItem>
                        <ListItem>Computer assisted code quality</ListItem>
                        <ListItem>Code generation and scaffolding</ListItem>
                        <ListItem textColor="tertiary">String interpolation</ListItem>
                        <ListItem textColor="tertiary">(Web) Components</ListItem>
                        <ListItem textColor="tertiary">Reconciliation**</ListItem>
                    </List>
                    <Text textColor="#777" fit>* If you like React, you like functional programming</Text>
                    <Text textColor="#777" fit>** In general, given two DOM trees, identify what is different</Text>
                </Slide>
                <Slide bgColor="#f05e1b">
                    <Heading textColor="primary" fit>“Stability Without Stagnation”</Heading>
                </Slide>
                <Slide bgColor="#00274C">
                    <BlockQuote>
                        <Quote>A framework is at least two things: a pattern and an implementation</Quote>
                        <Cite textColor="primary">Me</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="#CD2326">
                    <BlockQuote>
                        <Quote>...the code you would have written if you had the time and a thousand sets of eyes.</Quote>
                        <Cite textColor="primary">Marionette Homepage</Cite>
                    </BlockQuote>
                </Slide>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={interpolation}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 1], title: 'String Interpolation'},
                        {loc: [1, 5]},
                        {loc: [5, 22]}, // backbone
                        {loc: [10, 11]},
                        {loc: [12, 15]},
                        {loc: [18, 21]},
                        {loc: [21, 22]},
                        {loc: [22, 33]}, // yo-yo
                        {loc: [33, 43]}, // lit-html
                        {loc: [35, 36]},
                        {loc: [37, 38]},
                        {loc: [38, 41]}
                    ]}/>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={mnShim}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 1], title: 'Mn + morphdom'},
                        {loc: [1, 3]},
                        {loc: [3, 9]},
                        {loc: [4, 5]},
                        {loc: [5, 7]},
                        {loc: [7, 8]},
                        {loc: [1, 9]}
                    ]}/>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote><S type="bold" textColor="rebeccapurple">Web Components</S> provide strong encapsulation for reusable components.</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote><S type="bold" textColor="#00D8FF">React</S> provides a declarative library that keeps the DOM in sync with your data.</Quote>
                    </BlockQuote>
                    <Text textColor="primary">A library, that includes components (different than <S type="bold" textColor="rebeccapurple">Web Components</S>)</Text>
                </Slide>
                <Slide>
                    <Heading textColor="rebeccapurple" fit>Web Components</Heading>
                    <Text>(with Polymer.js)</Text>
                    <CodePane padding="5px"
                        lang="html"
                        source={polymer}
                    />
                    <CodePane padding="5px"
                        lang="jsx"
                        source={polymerIndex}
                    />
                </Slide>
                <Slide>
                    <Heading textColor="#00D8FF" fit>Reconciliation</Heading>
                    <CodePane padding="5px"
                        lang="js"
                        source={reconciliation}
                    />
                    <Layout>
                        <Fill>
                            <Text>JSX</Text>
                            <CodePane padding="5px"
                                lang="jsx"
                                source={jsx}
                            />
                        </Fill>
                        <Fill>
                            <Text>JS</Text>
                            <CodePane padding="5px"
                                lang="jsx"
                                source={jsxCompiled}
                            />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading textColor="#00D8FF" fit>React is not the fastest or lightest React</Heading>
                    <Layout>
                        <Fill><Image src={inferno} height={200}/></Fill>
                        <Fill><Image src={preact} height={200}/></Fill>
                        <Fill><Image src={hyperapp} height={200}/></Fill>
                    </Layout>
                </Slide>
                <Slide>
                    <Heading fit>On the Topic of "fastest"...</Heading>
                    <List>
                        <ListItem><Link href="https://github.com/patrick-steele-idem/morphdom/issues/2">The story of inferno.js</Link></ListItem>
                        <ListItem><Link href="http://www.stefankrause.net/js-frameworks-benchmark7/table.html">JS Framework Benchmarks</Link></ListItem>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
