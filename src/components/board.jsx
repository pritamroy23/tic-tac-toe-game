import React , {useState} from 'react';
import Square from './square.jsx';
const Board = () =>
{
    const [state, setState] =useState(Array(9).fill(null));
    const[isxTurn, setisxTurn] =useState(true);

    const checkWinner =()=> {
        const winningCombinations = [   // All possible winning combinations
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
               return state[a]; // Return the winner ("X" or "O")
            }

        }
        return null; // No winner yet

    }
    const iswinner = checkWinner();
   

    
    const handleclick =(index) =>   
    {
        const copyState =[...state];
        copyState[index] = isxTurn ? "X" : "O";
        setState(copyState);
        setisxTurn(!isxTurn);

    }
    const handleReset =() => {
        setState (Array(9).fill(null));
    }
    return (
        <div className='board-container'>
            {iswinner ? (<>{iswinner} won the game.
        <button onClick={handleReset}>play again</button> </>
        ) : 
        (<>
            <h4>please {isxTurn? "X" : "O"} move</h4>
            <div className='board-row'>
                <Square onClick={()=>handleclick(0)} value ={state[0]}/>
                <Square onClick={()=>handleclick(1)} value ={state[1]}/>
                <Square onClick={()=>handleclick(2)} value ={state[2]}/>
            </div>
            <div className='board-row'>
                <Square onClick={()=>handleclick(3)} value ={state[3]}/>
                <Square onClick={()=>handleclick(4)} value ={state[4]}/>
                <Square onClick={()=>handleclick(5)} value ={state[5]}/>
            </div>
            <div className='board-row'>
                <Square onClick={()=>handleclick(6)} value ={state[6]}/>
                <Square onClick={()=>handleclick(7)} value ={state[7]}/>
                <Square onClick={()=>handleclick(8)} value ={state[8]}/>
            </div>
            </>)}

        </div>
    );
}
export default Board;