import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import * as S from "./main.style";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function Main() {
  //To Fetch all Movie List from The API
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/?format=json")
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //TO DIsplay selected particular movie Item with details
  const [movieDetails, setMovieDetails] = useState({});
  const handleSelectMovie = (el) => {
    setMovieDetails(el);
  };
  // console.log(movieDetails, "Selected Movie");

  //To sorting data by episode id and date
  const [sortKey, setSortKey] = useState("default");
  function sortByKey(array, key) {
    // console.log(key)
    return array.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }

  function handleSort(key) {
    setSortKey(key);
    setShowModal(false);
  }

  let sortedData;
  if (sortKey === "default") {
    sortedData = movieList;
    // console.log(sortedData);
  } else {
    sortedData = sortByKey(movieList, sortKey);
    // console.log(sortedData);
  }

  //To Search with the help of input search parameters
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? movieList
    : movieList.filter((element) =>
        element.title.toLowerCase().includes(search.toLowerCase())
      );
  // console.log(filtered);
  // console.log(getData);

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // to convert id numerical into roman values
  let intToRoman = function (num) {
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return (
      M[Math.floor(num / 1000)] +
      C[Math.floor((num % 1000) / 100)] +
      X[Math.floor((num % 100) / 10)] +
      I[num % 10]
    );
  };
  return (
    <>
      {" "}
      <S.TopBarSection>
        <div className="input-container">
          <button onClick={handleModalOpen} className="sortBtn">
            Sort By...
          </button>
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Type to Search..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        {showModal && (
          <div className="modalSection">
            <div>
              <label>Sort By... </label>
              <button onClick={handleModalClose} className="crossIcons">
                &times;
              </button>
            </div>
            <hr />
            <div onClick={() => handleSort("episode_id")} className="sortLabel">
              Episode
            </div>
            <hr />
            <div
              onClick={() => handleSort("release_date")}
              className="sortLabel"
            >
              Year
            </div>
          </div>
        )}
      </S.TopBarSection>
      <S.MainContainer>
        <S.ListSection>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                {filtered.length > 0 &&
                  filtered.map((row) => {
                    return (
                      <TableRow
                        key={row.episode_id}
                        onClick={() => handleSelectMovie(row)}
                      >
                        <TableCell className="tableCol">
                          Episode {row.episode_id}
                        </TableCell>
                        <TableCell className="tableCols">
                          Episode {intToRoman(row.episode_id)} - {row.title}
                        </TableCell>
                        <TableCell className="tableCol">
                          {row.release_date}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableHead>
            </Table>
          </TableContainer>
        </S.ListSection>
        <S.DetailSection>
          {Object.keys(movieDetails).length > 0 && (
            <>
              <div className="movieTitle">
                Episode {intToRoman(movieDetails.episode_id)} -{" "}
                {movieDetails.title}
              </div>
              <div className="movieDescription">
                {movieDetails.opening_crawl}
              </div>
              <div className="movieDirector">
                Directed by : {movieDetails.director}
              </div>
            </>
          )}
          {Object.keys(movieDetails).length === 0 && (
            <div className="noMovieTitle">No Movie Selected</div>
          )}
        </S.DetailSection>
      </S.MainContainer>
    </>
  );
}
