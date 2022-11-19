import './App.css';

function Header(props) {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

function App() {
    return (
        <div className="App">
            <Header title="Tinder Clone" />
        </div>
    );
}

export default App;
