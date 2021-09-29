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
    Thriller: [
      {
        name: " Parasite",
        description:
          "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        rating: "8.6/10"
      },
      {
        name: " Blade Runner 2049",
        description:
          "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        rating: "8/10"
      },
      {
        name: " Stillwater",
        description:
          "A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit.",
        rating: "6.6/10"
      }
    ],
    Comedy: [
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
        Checkout my favourite movies. Select a genre to get started
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
