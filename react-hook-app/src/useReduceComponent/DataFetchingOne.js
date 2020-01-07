import React, {useState, useEffect} from 'react';
import axios from 'axios'
function DataFetchingOne(props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(err => {
            setLoading(true)
            setPost({})
            setError('Fetching post data is having an issue please try again after some time!')
        })
    }, [])

    return (
        <div>
            {loading ? 'loading' : `${post.id}.${post.title}`}
            {error ? error : null}
        </div>
    );
}

export default DataFetchingOne;