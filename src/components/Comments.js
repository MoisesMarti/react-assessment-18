
const Comments = ({comments}) => {
    const handleClick = (id) => {
        console.log(`clicked on comment with ID of: ${id}`)
    }
    
    return comments.map((current) => (
      <p key={current.id} onClick={() => handleClick(current.id)}>
        {current.body}</p>
    ));
  }
  
  export default Comments;
  
    
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.