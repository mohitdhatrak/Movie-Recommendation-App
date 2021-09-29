import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var movies = {
    Action: [
      {
        name: " The Dark Knight",
        description:
          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: "9/10"
      },
      {
        name: "Avengers: Infinity War",
        description:
          "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        rating: "8.4/10"
      },
      {
        name: "Avengers: Endgame",
        description:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        rating: "8.4/10"
      },
      {
        name: "Venom: Let There Be Carnage",
        description:
          "Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters.",
        rating: "8.3/10"
      },
      {
        name: "Spider-Man",
        description:
          "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
        rating: "7.3/10"
      }
    ],
    Comedy: [
      {
        name: "Parasite",
        description:
          "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        rating: "8.6/10"
      },
      {
        name: "Guardians of the Galaxy",
        description:
          "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        rating: "8/10"
      },
      {
        name: "Thor: Ragnarok",
        description:
          "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
        rating: "7.9/10"
      },
      {
        name: "Knives Out",
        description:
          "A detective investigates the death of a patriarch of an eccentric, combative family.",
        rating: "7.9/10"
      },
      {
        name: " Free Guy",
        description:
          "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        rating: "7.5/10"
      }
    ],
    Thriller: [
      {
        name: "No Time to Die",
        description:
          "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        rating: "8.1/10"
      },
      {
        name: " Blade Runner 2049",
        description:
          "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        rating: "8/10"
      },
      {
        name: "Casino Royale",
        description:
          "After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
        rating: "8/10"
      },
      {
        name: "Tenet",
        description:
          "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        rating: "7.4/10"
      },
      {
        name: "The Courier",
        description:
          "Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.",
        rating: "7.1/10"
      }
    ],
    Fiction: [
      {
        name: "Inception",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: "8.8/10"
      },
      {
        name: "The Matrix",
        description:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        rating: "8.7/10"
      },
      {
        name: "Interstellar",
        description:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: "8.6/10"
      },
      {
        name: "Jurassic Park",
        description:
          "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        rating: "8.1/10"
      },
      {
        name: "Spider-Man: Far from Home",
        description:
          "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
        rating: "7.5/10"
      }
    ],
    Horror: [
      {
        name: "The Exorcist",
        description:
          "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
        rating: "8/10"
      },
      {
        name: "Get Out (I)",
        description:
          "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        rating: "7.7/10"
      },
      {
        name: "The Evil Dead",
        description:
          "Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.",
        rating: "7.5/10"
      },
      {
        name: "The Conjuring",
        description:
          "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        rating: "7.5/10"
      },
      {
        name: "Insidious: Chapter 3",
        description:
          "A prequel set before the haunting of the Lambert family that reveals how gifted psychic Elise Rainier reluctantly agrees to use her ability to contact the dead in order to help a teenage girl who has been targeted by a dangerous supernatural entity.",
        rating: "7/10"
      }
    ]
  };

  var [selectedButton, setSelectedButton] = useState("Action");
  var [list, setList] = useState(movies.Action);

  function clickListner(movie) {
    setSelectedButton(movie);
    var selectedList = movies[movie];
    setList(selectedList);
  }

  var genresArray = Object.keys(movies);

  return (
    <div className="App">
      <h1 className="header">Movie Recommendations</h1>
      <h3 className="intro-line">
        Checkout my favourite movies. Select a genre to get started...
      </h3>
      <div>
        {genresArray.map(function buttonMaker(movie) {
          return (
            <button
              className={
                selectedButton === movie ? "buttons selected" : "buttons"
              }
              onClick={() => clickListner(movie)}
            >
              {movie}
            </button>
          );
        })}
      </div>
      <div>
        {list.map(function listPrinter(movie) {
          return (
            <li className="list-container">
              <div className="one-movie-block" className="movie-title">
                {movie.name}
              </div>
              <div className="one-movie-block">{movie.rating}</div>
              <div className="one-movie-block">{movie.description}</div>
            </li>
          );
        })}
      </div>
      <h3 className="closing-line">
        Note: The source of these movie ratings is IMDb, they are subject to
        change (depending on further voting by IMDb users). These ratings are as
        of September, 2021.
      </h3>
      <footer class="footer-container">
        <h2>Connect with me</h2>
        <div class="social-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mohitdhatrak"
          >
            <img src="/twitter.svg" alt="" class="small-image-size" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohitdhatrak/"
          >
            <img src="/linkedin.svg" alt="" class="small-image-size" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mohitdhatrak"
          >
            <img src="/github.svg" alt="" class="small-image-size" />
          </a>
        </div>
      </footer>
    </div>
  );
}
