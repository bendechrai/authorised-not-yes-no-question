import React, { Component } from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Columns,
  Image,
  Text,
  Code,
  Footer,
  Highlight,
  Quote,
  List,
  Browser,
  Video
} from "@sambego/diorama";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-jsx.min.js";

import Alert from "./Alert";
import Rainbow from "./Rainbow";

import Sam from "./img/sam.jpg";
import Poes from "./img/poes.jpg";
import Husky from "./img/husky.jpg";
import Capi from "./img/cap.jpg";
import Orca from "./img/orca.jpg";
import PresenterNotes1 from "./img/presenter-1.png";
import PresenterNotes2 from "./img/presenter-2.png";

import Iceland from "./video/iceland.mp4";

class App extends Component {
  static footer = <Footer left="@sambego" />;

  render() {
    return (
      <Deck
        footer={App.footer}
        navigation
        presenterNotes={window.location.search.includes("presenterNotes")}
      >
        <Slide
          notes="Welcome to diorama, head on over to https://sambego.github.io/diorama/ for more information!"
          style={{ backgroundColor: "#99c794" }}
        >
          <Title style={{ color: "white" }}>Diorama</Title>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Easy</Highlight> and <Highlight>extendable</Highlight>{" "}
            React presentations
          </Subtitle>
        </Slide>
        <Slide>
          <Text>
            <a href="https://github.com/sambego/diorama/">
              https://github.com/sambego/diorama
            </a>
          </Text>
        </Slide>
        <Slide notes="Getting started with Diorama is easy, just install the npm package. Once installed you're all set to create that presentation!">
          <Subtitle>Getting started is easy!</Subtitle>
        </Slide>
        <Slide>
          <Code code={"npm install @sambego/diorama"} lang="bash" />
        </Slide>
        <Slide>
          <Subtitle>
            Now create a <Highlight>deck</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Code code={"<Deck>\n  ...\n</Deck>"} lang="jsx" />
        </Slide>
        <Slide>
          <Subtitle>
            Once you've got a deck, create some <Highlight>slides</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Code
            code={"<Deck>\n  <Slide>...</Slide\n  <Slide>...</Slide\n</Deck>"}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Text>
            The <Highlight>deck</Highlight> component accepts any valid React
            node. By using the <Highlight>Slide</Highlight> component, you make
            sure they display using all available space.
          </Text>
        </Slide>
        <Slide>
          <Subtitle>
            We've got a few frequently used component to use in your slides
          </Subtitle>
        </Slide>
        <Slide>
          <Title>A Title</Title>
        </Slide>
        <Slide>
          <Subtitle>A Subtitle, this is a bit smaller</Subtitle>
        </Slide>
        <Slide>
          {" "}
          st
          <Text>
            And some regular <Highlight>text</Highlight>. Use this if you have a
            bigger block of text you want to display. Using a big block of text
            on your slides might be overwhelming, but sometimes you don't have
            any choice.
          </Text>
        </Slide>
        <Slide>
          <Quote quotee="Sam Bellen">
            All slides are equal, but some slides are more equal than others.
          </Quote>
        </Slide>
        <Slide notes="You can add pictures to your slides to illustrate your thoughts.">
          <Subtitle>
            A <Highlight>picture</Highlight> is worth a thousand words
          </Subtitle>
        </Slide>
        <Slide>
          <Image src={Poes} alt="A cat looking into the camera" />
        </Slide>
        <Slide>
          <Subtitle>
            Even better when <Highlight>full screen</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Image src={Poes} alt="A cat looking into the camera" full />
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Lists</Highlight>? We've got your back!
          </Subtitle>
        </Slide>
        <Slide>
          <List>
            <li>eeny</li>
            <li>meeny</li>
            <li>miny</li>
            <li>moe</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>
            Why not <Highlight>order</Highlight> them?
          </Subtitle>
        </Slide>
        <Slide>
          <List ordered>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>
            Need more structure? <br />
            Try <Highlight>columns</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Sam} alt="A picture of me" full color="#99c794" />
            </div>
            <div>
              <Subtitle>Sam Bellen</Subtitle>
              <List>
                <li>Developer Evangelist</li>
                <li>Auth0</li>
                <li>Google Developer Expert</li>
                <li>Fronteers</li>
                <li>@sambego</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Subtitle>
            Don't limit yourself to <br />
            <Highlight>just 2 columns</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Poes} alt="A picture of a cat" full color="#99c794" />
            </div>
            <div>
              <Image
                src={Husky}
                alt="A picture of a husky"
                full
                color="#ec5f67"
              />
            </div>
            <div>
              <Image
                src={Capi}
                alt="A picture of a capybara"
                full
                color="#fac863"
              />
            </div>
            <div>
              <Image
                src={Orca}
                alt="A picture of a killer whale"
                full
                color="#c594c5"
              />
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Subtitle>Hey look, these are moving pictures!</Subtitle>
        </Slide>
        <Slide>
          <Video src={Iceland} mute loop autoplay />
        </Slide>
        <Slide>
          <Subtitle>
            Showing <Highlight>code</Highlight> is easy too!
          </Subtitle>
        </Slide>
        <Slide>
          <Code
            code={
              "const showDelayedAlert = () => {\n  window.setTimeout(() => {\n    alert('This is an alert!');\n  }, 1000);\n}"
            }
          />
        </Slide>
        <Slide>
          <Subtitle>
            You'll definitely will want to preview some{" "}
            <Highlight>external links</Highlight> like this!
          </Subtitle>
        </Slide>
        <Slide>
          <Browser url="https://talks.sambego.be" />
        </Slide>
        <Slide>
          <Subtitle>
            So <Highlight>why</Highlight> make a presentation in{" "}
            <Highlight>React</Highlight>?
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Instant shareability</Highlight>. Upload somwhere and
            share.
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Works on any device</Highlight>. Open a browser an rock
            it on stage!
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Live Demos!</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Alert />
        </Slide>
        <Slide>
          <Subtitle>
            Or even <Highlight>better</Highlight>!
          </Subtitle>
        </Slide>
        <Rainbow />
        <Slide>
          <Subtitle>
            There's <Highlight>no limit</Highlight> to what you can do!
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            You need some <Highlight>notes</Highlight> while presenting?
          </Subtitle>
        </Slide>
        <Slide>
          <Image
            src={PresenterNotes1}
            alt="A preview of the presenter notes window"
            contain
          />
        </Slide>
        <Slide>
          <Image
            src={PresenterNotes2}
            alt="A preview of the presenter notes window"
            contain
          />
        </Slide>
        <Slide>
          <Subtitle>
            Add the <Highlight>presenter</Highlight> property to the{" "}
            <Highlight>Deck</Highlight> component.
          </Subtitle>
        </Slide>
        <Slide>
          <Code code={"<Deck presenterNotes>\n  ...\n</Deck>"} lang="jsx" />
        </Slide>
        <Slide>
          <Text>
            To see the presenter notes in action click{" "}
            <a
              href="https://sambego.github.io/diorama-demo/"
              title="Open presentation with presenter notes"
            >
              here
            </a>
          </Text>
        </Slide>
        <Slide>
          <Subtitle>
            So get started, download the{" "}
            <Highlight>
              <a
                href="https://github.com/sambego/diorama"
                style={{ color: "black" }}
              >
                npm package
              </a>
            </Highlight>
            .
          </Subtitle>
        </Slide>
      </Deck>
    );
  }
}

export default App;
