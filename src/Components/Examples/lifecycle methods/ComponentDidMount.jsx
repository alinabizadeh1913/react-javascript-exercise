import React from 'react';
import Template from '../../Template/Template'
import axios from 'axios';

export default class ComponentDidMount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts : null,
            loading : true
        }

        axios.defaults.baseURL = "http://localhost:5000/"
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get('posts2').then(response => {
                this.setState({
                    posts : response.data,
                    loading : false
                })
            }).catch(e => console.log(e))
        }, 2000)
    }

    render () {
        return (
            <Template title="get post in componentDidMount">
                <section id="did-mount">
                    <div className="container">
                        {
                            this.state.loading ? <div className="loading d-flex justify-content-center">
                                <img src="./img/spinner.svg" alt="" style={{width : '131.3px'}}/>
                            </div> : <div className="row justify-content-center">
                                {
                                    this.state.posts && this.state.posts.map(post => {
                                        return (
                                            <div className="col-12 col-md-6 col-lg-3">
                                                <div className="post my-2">
                                                    <div className="image">
                                                        <img src={post.imgSrc} alt="" />
                                                    </div>
                                                    <h3 className="title my-3">
                                                        {post.title}
                                                    </h3>
                                                    <p className="mb-0 description">
                                                        {post.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </section>
            </Template>
        )
    }
}