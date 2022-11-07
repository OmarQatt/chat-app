import React from 'react';

export default function Message(props) {
    
  return (
    <div>
      <h1>{props.message}</h1>

        <form action="/message" method="POST">
            <input type="text" name="message" id="message" />
            <button type="submit">Submit</button>
        </form>
        
    </div>
  );
}