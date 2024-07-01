import React, { useEffect, useMemo, useState } from "react";
import { useMatch, useParams } from "react-router-dom";

const Post = () => {

    const params = useParams();
    const match = useMatch('/post/:slug');
    const [post,setPost] = useState(null)

    useMemo(() => {
        if(match) {
            console.log('matched ... !');
        }else {
            console.log('not matched ... !');
        }
    }, [])

     useEffect(() => {
        fetch(`http://localhost:5000/posts2?title=${params.slug}`).then(response => response.json())
        .then(result => {
            setPost(result[0]);
        }).catch(error => console.log(error))
     }, [])

    
    return (
        <section id="post" className="my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        {
                            post ? <div className="post-wrapper d-flex flex-column flex-wrap align-items-center justify-content-center" style={{backgroundColor : '#00000040',borderRadius: '10px',padding: '20px'}}>
                                <img src={post.imgSrc} style={{width:'50%',borderRadius: '10px'}} alt="" />
                                <h1 className="my-2 text-center text-white">
                                    {post.title}
                                </h1>
                                <p className="text-center text-white fs-5 mb-0">
                                    {post.description}
                                </p>
                        </div> : <p className="text-center text-white fs-4 ">
                            No content available for display.
                        </p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;