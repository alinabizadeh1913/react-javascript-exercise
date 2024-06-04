import React, { useEffect, useState } from "react";
import Template from "../../Template/Template";
import axios from "axios";

const Axios = () => {

    const [post,setPost] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.defaults.baseURL = "http://localhost:5000/";
        setTimeout(() => {

            axios.get('http://localhost:5000/posts').then(response => response.data).then(result => {
            setPost(result);
            setLoading(false)
            }).catch(error => console.log(error));

        },2000)
    }, [])

    const items = post ? post.map(item => {
        return (
            <div className="col-12 col-md-6 col-lg-3 my-2">
                <div className="item rounded-2">
                    <h4>
                        {item.title}
                    </h4>
                    <p className="mb-0 mt-2">
                        {item.description}
                    </p>
                    <p className="mb-0 mt-2">
                        {item.job}
                    </p>
                </div>
            </div>
        )
    }) : null;

    return(
        <Template title="axios show post with functional component">
            <section id="axios" className="container">
                <div className="row justify-content-center">
                    {
                        loading ? <div className="loading d-flex justify-content-center">
                            <img src="./img/spinner.svg" alt="" style={{width : '131.3px'}}/>
                        </div> : items
                    }
                </div>
            </section>
        </Template>
    )
}

export default Axios;