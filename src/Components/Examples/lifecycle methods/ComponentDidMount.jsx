import React from 'react';
import Template from '../../Template/Template'

export default class ComponentDidMount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts : null,
            loading : true
        }
    }

    async getPost() {
        const request = await fetch('http://localhost:5000/posts2');
        return await request.json();
    }

    componentDidMount() {
        setTimeout(() => {
            this.getPost().then(result => {
                this.setState({
                    posts : result,
                    loading : false
                })
            })
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