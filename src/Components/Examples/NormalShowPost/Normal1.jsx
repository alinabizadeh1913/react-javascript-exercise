import React, { useState } from "react";
import Template from "../../Template/Template";

const Normal1 = () => {

    const [post,setPost] = useState([
        {
            id : 1,
            title : 'post 1',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsam alias. Aliquam voluptates numquam rem velit.',
        },
        {
            id : 2,
            title : 'post 2',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsam alias. Aliquam voluptates numquam rem velit.',
        },
        {
            id : 3,
            title : 'post 3',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ipsam alias. Aliquam voluptates numquam rem velit.',
        }
    ])


    const posts = post.map(item => {
        return (
            <div className="col-12 col-md-6 col-lg-4 my-2" key={item.id}>
                <div className="post rounded-2">
                    <h4>
                        {item.title} 
                    </h4>
                    <p className="mb-0 mt-2">
                        {item.description}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <Template title="normal show post with functional component">
            <section id="normal1" className="container">
                <div className="row justify-content-center">
                    {posts}
                </div>
            </section>
        </Template>
    )
}

export default Normal1;