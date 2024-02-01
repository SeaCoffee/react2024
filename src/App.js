import './App.css';
import Character from "./components/character";
import RickAll from "./components/rickFewComponents";

function App() {
    return (
        <div className="App">
            <Character
                itemName={'Bart'}
                image={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}
                description={'is a fictional character in the American animated television series The Simpsons'}
            />

            <Character
                itemName={'Marge'}
                image={'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}
                description={'is a fictional character in the American animated television series The Simpsons'}
            />

            <Character
                itemName={'Homer'}
                image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                description={'is a fictional character in the American animated television series The Simpsons'}
            />

            <Character
                itemName={'Lisa'}
                image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
                description={'is a fictional character in the American animated television series The Simpsons'}
            />

            <Character
                itemName={'Maggie'}
                image={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
                description={'is a fictional character in the American animated television series The Simpsons'}
            />

            <h1>
                _______________________________________________________________________________________________
            </h1>

            <h1>Part 2 hw</h1>

            <p>Я знаю, що дз наче без фетча, але який сенс просто копіпастити? В Прев"ю це все було</p>

            <h1>
                _______________________________________________________________________________________________
            </h1>


            <h1>Rick and Morty Characters</h1>
            <RickAll/>
        </div>
    )
}


export default App;
