import './App.css';
import AddressBook from './AddressBook.js';
import contacts from "./data.js";


function App() {
    console.log( contacts );
    
    return (
      <div className="App">
        <h1>My address book</h1>
            <AddressBook contacts={contacts}/>
      </div>
    );
}

export default App;
