import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetching(props) {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)
    const clickHandle = () => {
        setIdFromButton(id)
    }

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res => {setPost(res.data)})
        .catch(err => {console.log(err)})
    }, [idFromButton])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} /><br />
            <button onClick={clickHandle}>Fetch Data</button> <br />
            {post.title}
            {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}=========>{post.body}</li>)
            }
            </ul> */}
        </div>
    );
}

export default DataFetching;