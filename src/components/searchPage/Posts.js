import React from 'react'
import { Card } from 'react-bootstrap'
// import './Search__page.css'
import './Posts.css'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading......</h2>
    }
    return (
        <div>
            {
                posts.map((posts,index) => (<Card key={index}>
                    <Card.Body>
                        <div>
                            <dl className="box">
                                <dd className="ques" key={posts.id}>
                                    {posts.id}.&nbsp;&nbsp;
                                    {posts.title}</dd>
                                <dd className="ans"> {posts.body} {posts.body}{posts.body}</dd>
                                
                            </dl>
                        </div>
                    </Card.Body>
                </Card>


                ))}
        </div>
    )

}

export default Posts
