import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import one_blue_full_diamond from "./assets/cards/one_blue_full_diamond.png";
import two_red_striped_squiggle from "./assets/cards/two_red_striped_squiggle.png";
import three_green_open_oval from "./assets/cards/three_green_open_oval.png";
import one_red_open_diamond from "./assets/cards/one_red_open_diamond.png";
import two_green_striped_oval from "./assets/cards/two_green_striped_oval.png";
import three_red_full_diamond from "./assets/cards/three_red_full_diamond.png";
import two_blue_striped_squiggle from "./assets/cards/two_blue_striped_squiggle.png";
import two_blue_open_diamond from "./assets/cards/two_blue_open_diamond.png";
import three_green_striped_squiggle from "./assets/cards/three_green_striped_squiggle.png";
import one_green_striped_oval from "./assets/cards/one_green_striped_oval.png";
import two_blue_full_diamond from "./assets/cards/two_blue_full_diamond.png";
import three_red_open_squiggle from "./assets/cards/three_red_open_squiggle.png";
import two_blue_full_squiggle from "./assets/cards/two_blue_full_squiggle.png";
import two_red_full_oval from "./assets/cards/two_red_full_oval.png";
import two_green_full_diamond from "./assets/cards/two_green_full_diamond.png";
import back from "./assets/cards/back.png";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CardGrid = () => {
  return (
    <div className="wrapper">
      <img
        src={three_green_striped_squiggle}
        alt="three green striped squiggles"
      />
      <img src={one_blue_full_diamond} alt="one blue full diamond" />
      <img src={two_blue_full_diamond} alt="two blue full diamond" />
      <img src={two_blue_striped_squiggle} alt="two blue striped squiggle" />
      <img src={three_red_full_diamond} alt="three red full diamond" />
      <img src={two_green_striped_oval} alt="two green striped oval" />
      <img src={one_red_open_diamond} alt="one red open diamond" />
      <img src={three_green_open_oval} alt="three green open oval" />
      <img src={three_red_open_squiggle} alt="three red open squiggle" />
      <img src={two_red_striped_squiggle} alt="two red striped squiggle" />
      <img src={two_blue_open_diamond} alt="two blue open diamond" />
      <img src={one_green_striped_oval} alt="one green striped oval" />
    </div>
  );
};

const PreviousSet = () => {
  return (
    <div className="setBox">
      <p>previous set</p>
      <img src={two_blue_full_squiggle} alt="two blue full squiggle" />
      <img src={two_red_full_oval} alt="two red full oval" />
      <img src={two_green_full_diamond} alt="two green full diamond" />
      <p>(same number & shading, different colour & shapes)</p>
    </div>
  );
};

const Deck = () => {
  return (
    <div className="deckBox">
      deck
      <img src={back} title="cards remaining in deck" alt="remaining cards" />
      <p>69/81</p>
    </div>
  );
};

const Score = () => {
  return (
    <div className="scores">
      <p>you found the set in</p>
      <p>
        <em>00:36</em>
      </p>
      Score: <h2>16 pts</h2>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <em>
      early prototype version for CSCU9N5. Author: 2718224 / University of
      Stirling
    </em>
  </div>
);

const TutorialModal = () => {
  const [showTutorial, setShowTutorial] = useState(true);

  const handleClose = () => setShowTutorial(false);
  const handleShow = () => setShowTutorial(true);

  return (
    <>
      <Button id="tutorialButton" variant="primary" onClick={handleShow}>
        show tutorial
      </Button>
      <Modal
        show={showTutorial}
        onHide={handleClose}
        dialogClassName="tutorialModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome to the SET! card game prototype</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            SET is a game of pattern finding, a task that is a good example for
            learning about computational thinking.{" "}
          </p>
          <p>Rules:</p>
          The game is played by matching sets of three cards, where all
          variables are either the same or different across the three cards.
          Variables:
          <ul>
            <li>Number: 1, 2 or 3</li>
            <li>Shading: full, striped or open</li>
            <li>Colour: red, green or blue</li>
            <li>Shape: oval, diamond or squiggle</li>
            <li>
              <img
                src={one_green_striped_oval}
                alt=" "
                title="one green striped oval"
              />
              <img
                src={one_blue_full_diamond}
                alt=" "
                title="one blue full diamond"
              />
              <img
                src={two_red_striped_squiggle}
                alt=" "
                title="two red striped squiggles"
              />
            </li>
          </ul>
          <p>
            If no sets are found, you can add three more cards to the table.
          </p>
          <p>
            The game shows a comparison of how long it took you to find a set
            versus the time it took the set finding code to run in your browser.
            (not implemented in prototype)
          </p>
          <h3>Example sets</h3>
          <div className="exampleSet">
            <img src={one_green_striped_oval} />
            <img src={two_blue_full_diamond} />
            <img src={three_red_open_squiggle} />
          </div>
          <p>
            {" "}
            the above is a set as all variables (number, colour, shading, shape)
            are <em>unique</em> in each card.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p>
            for more info about SET, visit{" "}
            <a href="https://en.wikipedia.org/wiki/Set_(card_game)">
              wikipedia
            </a>
          </p>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const HowModal = () => {
  const [showHow, setShowHow] = useState(false);

  const handleClose = () => setShowHow(false);
  const handleShow = () => setShowHow(true);

  return (
    <>
      <Button id="howButton" variant="primary" onClick={handleShow}>
        how does it work?
      </Button>
      <Modal
        show={showHow}
        onHide={handleClose}
        size="lg"
        dialogClassName="howModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>How does the set-finding algorithm work?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            First, we need a way to represent the cards in code. For example:
          </p>
          <pre>
            <code>
              {`var Card = {
          attributes: ['number', 'shading', 'colour', 'shape'],
          count: [1, 2, 3],
          shading: ['full', 'open', 'striped'],
          colour: ['red', 'blue', 'green'],
          shape: ['oval', 'diamond', 'squiggle']
          ...
        }`}
            </code>
          </pre>
          <p>binding values:</p>
          <pre>
            <code>
              {`var Card = {
          ...
          new: function(number) {
            // convert the number to base 3
            number = number.toString(3)

            // create an array of select properties
            var value = number.split('').map(function(i) {
               return parseInt(i)
             })

            // Zero pad small numbers, ie. [1,2] => [0,0,1,2]
            while(value.length < 4) { value.unshift(0) }

            return {
              value: value,
              count: this.count[value[0]],
              fill: this.fill[value[1]],
              color: this.color[value[2]],
              shape: this.shape[value[3]],
              id: value.join('')
            }
          }
        }
          `}
            </code>
          </pre>
          <p>
            So now each card has a value. E.g:<code> value: [1, 0, 0, 2]</code>
          </p>
          <p> how to represent a deck? For example:</p>
          <pre>
            <code>
              {`var Deck = {
          reset: function() {
            this.size = 0
            this.cards = []

            while(this.size < 81) {
              this.cards.push(Card.new(this.size))
              this.size += 1
            }
            this.shuffle()

            return this.cards
          },
          ...
        }
          `}
            </code>
          </pre>
          <p>
            Now, <code>console.log(Deck)</code> returns an array of cards:
          </p>
          <pre>
            <code>
              {`{
        cards: [
          {
            color: "blue",
            count: 2,
            fill: "full",
            id: "1011",
            shape: "oval",
            value: [1, 0, 1, 1]
          }, {
            color: "green",
            count: 1,
            fill: "open",
            id: "0121",
            shape: "oval",
            value: [0, 1, 2, 1]
          },
          `}
            </code>
          </pre>
          <p>Work in progress.</p>
          <h2>Time comparison</h2>
          <p>
            The time it takes for the code to run in the browser can be measured
            with Javascript's built in <code>console.time()</code> method. You
            can use <code>console.time(timerName)</code> with{" "}
            <code>console.timeEnd(timerName)</code> to measure how long it takes
            for a piece of code to be executed in the browser (or server-side).
          </p>
          <p>For example:</p>
          <pre>
            <code>
              {`console.time('3 second timer')
        setTimeout(() => {
          console.timeEnd('3 second timer')
        }, 3000);
        `}
            </code>
          </pre>
          <p>
            will output <code>3 second timer: 3000ms</code> in the console.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const AddThreeButton = () => {
  return (
    <Button
      id="addThreeButton"
      variant="secondary"
      title="Add 3 more cards. not implemented yet"
    >
      add 3
    </Button>
  );
};
const HelpButton = () => {
  return (
    <Button
      id="helpButton"
      variant="secondary"
      title="shows the sets on the board. not implemented yet"
    >
      help me!
    </Button>
  );
};
const ResetButton = () => {
  return (
    <Button
      id="resetButton"
      variant="secondary"
      title="resets the game. not implemented yet"
    >
      reset
    </Button>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>SET!</h1>
      <TutorialModal />
      <div class="left">
        <Deck />
        <div className="gamestage">
          <CardGrid />
          <PreviousSet />
          <HowModal />
        </div>
      </div>
      <div class="right">
        <ul className="gameButtons">
          <li>
            <AddThreeButton />
          </li>
          <li>
            <HelpButton />
          </li>
          <li>
            <ResetButton />
          </li>
        </ul>

        <Score />
      </div>

      <Footer />
    </div>
  );
};

export default App;
