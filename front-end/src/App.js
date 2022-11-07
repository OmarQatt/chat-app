import './App.css';

function App() {
  const socket = io('http://localhost:3000');
  return (
   
    <div className="App">
     

      <div className="user-container">
        <h1>Users</h1>
        <ul id="users"></ul>
      </div>


      <header className="App-header">
        <h1>Chat App</h1>
        <button onClick={() => socket.emit('new-user', 'John')}>New User</button>
      </header>
      

      <div className="container">
        <div className="message-container">
          <div className="message">
            <p className="meta">User <span>10:12</span></p>
            <p className="text">
              A message
            </p>
          </div>
        </div>
        <div className="form-container">
          <input type="text" name="message" id="message" />
          <button type="submit">Submit</button>
        </div>
      </div>
       
    </div>
    
  );
}

export default App;
