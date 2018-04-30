import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {BlockQuote, Cite, Deck, Heading, Image, Link, List, ListItem, Quote, S, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
//
// Import code examples
//
import code from './examples/code';
//
// Import PrismJS and its dependencies
//
require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');
import Prism from 'prismjs/components/prism-core'; // eslint-disable-line no-unused-vars
import 'prismjs/components/prism-markup-templating';
// import 'prismjs/components/prism-kotlin';
// import '../prism-overrides/elm';
// import '../prism-overrides/clojure';
// import '../prism-overrides/fsharp';
// import '../prism-overrides/reason';
// import '../prism-overrides/rust';
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
const cheatsheet = require('../assets/fp-cheatsheet.jpg');
const choices = require('../assets/choices.svg');
const city = require('../assets/city.jpg');
const cloud = require('../assets/logo-cloud.png');
const frontend = require('../assets/frontend.png');
const thanos = require('../assets/it-all-led-to-this.gif');
preload([
    allTheThings,
    cheatsheet,
    choices,
    city,
    cloud,
    frontend,
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
                    <Image src={choices}/>
                </Slide>
                <Slide>
                    <Heading size={4}>...this too</Heading>
                    <Image src={cheatsheet}/>
                </Slide>
                <Slide bgImage={cloud}></Slide>
                <Slide bgImage={thanos} bgDarken={0.7}>
                    <Heading textColor="white" fit>Dread it, run from it,</Heading>
                    <Heading textColor="white" fit>destiny arrives all the same.</Heading>
                    <Heading textColor="white" fit>And now, the frontend is here.</Heading>
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
                <FancyHello />
                <Slide transition={[]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>Typography</Heading>
                    <Heading size={1} textColor="secondary">Heading 1</Heading>
                    <Heading size={2} textColor="secondary">Heading 2</Heading>
                    <Heading size={3} textColor="secondary">Heading 3</Heading>
                    <Heading size={4} textColor="secondary">Heading 4</Heading>
                    <Heading size={5} textColzor="secondary">Heading 5</Heading>
                    <Text size={6} textColor="secondary">Standard text</Text>
                </Slide>
                <Slide transition={[]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={code}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 7], title: 'Code'},
                        {loc: [0, 1]},
                        {loc: [1, 2]},
                        {loc: [1, 2], note: 'Heres a note!'}/* eslint-enable no-magic-numbers */
                    ]}/>
            </Deck>
        );
    }
}
