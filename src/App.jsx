import React, {useState} from "react";

import {
    Routes,
    Route,
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function App() {
    const [books, setBooks] = useState(['a', 'b', 'c']);


    const Books = ({books}) => {
        const result = books.map(function(book){
            return <div>{book}</div>
        })
        return (
            <div>
                {result}
            </div>
        );
    }

    const AddBook = ({books, setBooks}) => {
        const [input, setInput] = useState('')
        function addBook(){
            setBooks([...books, input])
        }
        return (
            <div>
                <input type="text" onChange={(event) => {setInput(event.target.value)}}/>
                <button onClick={addBook}>add</button> <br/><br/>
                <Link to="/">
                    На главную
                </Link>
            </div>
        )
    }

    const AboutCompany = () => {
        return (
            <div>
                <p>Информация об компании</p>
                <Link to="/">
                    На главную
                </Link>
            </div>
        )
    }

  return (
    <Router>
        <nav>
            <Link to="/">Книги</Link>
            <Link to="/about">О нас</Link>
            <Link to="/addbook">Добавление</Link>
        </nav>
        <Routes>
                <Route path="/" element={<Books books={books}/>} />
                <Route path="/about" element={<AboutCompany />}/>
                <Route path="/addbook" element={<AddBook books={books} setBooks={setBooks}/>}/>
        </Routes>
    </Router>
  );
}

export default App;