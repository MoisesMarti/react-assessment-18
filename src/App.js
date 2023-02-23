import logo from './logo.svg';
import './App.css';
import Instructions from './components/Instructions'
import Comments from './components/Comments'
import { useState,useEffect } from 'react';

    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.

const App = ()  => {
  const [comments, setComments] = useState([])

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await response.json()
      setComments(data)
    }

    getData()
  }, [])   


  return (
    <div className="container">
      <Instructions />
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
