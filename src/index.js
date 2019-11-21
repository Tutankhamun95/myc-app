import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Parent Class"Board", Whole board with 9 Squares (0,1,2,3,4,5,6,7,8)//
class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    renderSquare(i) {
    //fills each square with an "i" value which is defined below
      return <Square value={i} />;
    }
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  //game component





//Child Component or Class called "Square", Code for each individual square//
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render() {
      return (
        <button className="square" 
        onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }

//End of individual squares code//
  


  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  