import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  height: 91vh;
  margin-top: 10px;
  position: fixed;
  z-index: 1;
  top: 6%;
  grid-template-columns: 50% 70%;
`;

export const ListSection = styled.div`
  border: 1px solid #eee;

  .tableCol {
    cursor: pointer;
    width: 10vw;
    color: #425a6f;
    font-size: 16px;
    padding: 10px;
  }

  .tableCols {
    width: 30vw;
    cursor: pointer;
    color: #204160;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const DetailSection = styled.div`
  border: 1px solid #eee;
  padding: 30px;

  .movieTitle {
    font-size: 30px;
    color: #204160;
    font-weight: 700;
  }

  .movieDescription {
    margin: 20px 0 0 0;
    line-height: 25px;
    color: #425a6f;
    font-size: 16px;
  }

  .movieDirector {
    margin: 20px 0 0 0;
    font-size: 16px;
    color: #425a6f;
    font-weight: 500;
    font-size: 16px;
  }

  .noMovieTitle {
    font-size: 30px;
    margin: 35vh 0 0 35vh;
    font-weight: 600;
  }
`;

export const TopBarSection = styled.div`
  .modalSection {
    width: 300px;
    background-color: white;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 0px 10px #eee;
    position: relative;
    z-index: 2;
    margin-top: 10px;
  }

  label {
    font-size: 22px;
    border: none;
    color: #425a6f;
  }

  hr {
    border: 1px solid #eee;
  }
  .crossIcons {
    float: right;
    font-size: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #425a6f;
  }
  .sortBtn {
    width: 10vw;
    padding: 14px;
    font-size: 16px;
    cursor: pointer;
    color: #0b4793;
    border: 1px solid #0b4793;
    border-radius: 8px;
    background-color: #e7edf7;
  }

  .sortLabel {
    font-size: 18px;
    cursor: pointer;
    padding: 6px;
    color: #9da8b3;
  }

  .sortBtn:hover {
    outline: none;
    box-shadow: 0 0 5px #0b4793;
  }

  input {
    width: 85.5vw;
    margin: 0 0 0 10px;
    padding: 14px 0 14px 40px;
    font-size: 16px;
    border: 1px solid #eee;
    color: gray;
    border-radius: 8px;
  }

  input:focus {
    outline: none;
    border-color: #eee;
    box-shadow: 0 0 10px gray;
  }

  .input-container {
    position: relative;
  }

  .input-container input {
    padding-left: 30px;
  }

  .icon {
    position: absolute;
    top: 45%;
    color: gray;
    transform: translateY(-50%);
    margin-left: 20px;
  }

  @media only screen and (max-width: 900px) {
    input {
      width: 80.5vw;
    }

    .sortBtn {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1200px) {
    input {
      width: 80.5vw;
    }

    .sortBtn {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1400px) {
    input {
      width: 80.5vw;
    }

    .sortBtn {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1500px) {
    input {
      width: 80.5vw;
    }

    .sortBtn {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 835px) {
    input {
      width: 80.5vw;
    }

    .sortBtn {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 790px) {
    input {
      width: 75.5vw;
    }

    .sortBtn {
      font-size: 14px;
      padding: 10px 0 10px 0;
    }
  }
`;
