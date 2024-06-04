import React from "react";

const Post = ({currentPost}) => {

    const post = currentPost && <div className="post-wrapper d-flex flex-column align-items-center my-2 rounded-2">
        <div className="image">
            <img src={currentPost.imgSrc} alt="" />
        </div>
        <div className="post-content w-100 d-flex flex-column align-items-center">
            <h3 className="text-center text-white mb-0 mt-2">
                {currentPost.title}
            </h3>
            <p className="mb-0 mt-2 text-center text-white">
                {currentPost.description}
            </p>
            {
                currentPost.comments.map(comment => {
                    return (
                        <div className="comment my-2 p-2 rounded-2 col-8">
                            <p className="mb-0 text-center text-white">
                                {comment.text}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    )
}

export default Post;