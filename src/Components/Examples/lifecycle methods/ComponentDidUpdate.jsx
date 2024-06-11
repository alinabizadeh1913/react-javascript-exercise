import React from "react";
import Template from "../../Template/Template";

export default class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPost : 1,
            links : [
                {
                    id : 1,
                    title : 'Show Post 1'
                },
                {
                    id : 2,
                    title : 'Show Post 2'
                },
                {
                    id : 3,
                    title : 'Show Post 3'
                },
                {
                    id : 4,
                    title : 'Show Post 4'
                }
            ]
        }
    }

    render() {
        return (
            <Template title="change post by using componentDidUpdate">
                <section id="did-update">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                                <div className="trigger d-flex flex-wrap flex-row flex-lg-column justify-content-center">
                                    {
                                        this.state.links.map(link => {
                                            return <a href="" className="mx-1 mx-lg-0" key={link.id} onClick={e => {
                                                e.preventDefault();
                                                this.setState({
                                                    currentPost : link.id
                                                })
                                            }}>
                                                <i class="fa-brands fa-pagelines mx-2"></i>
                                                {link.title}
                                            </a>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-lg-9">
                                <Post currentPost={this.state.currentPost}/>
                            </div>
                        </div>
                    </div>
                </section>
            </Template>
        )
    }
    
}


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/posts2?post-id=${this.props.currentPost}`)
        .then(response => response.json())
        .then(result => {
            this.setState({
                posts : result[0]
            })
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevProps.currentPost !== this.props.currentPost) {
            fetch(`http://localhost:5000/posts2?post-id=${this.props.currentPost}`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    posts : result[0]
                })
            })
        }
    }

    render () {
        return (
            <React.Fragment>
                {
                    this.state.posts && <div className="post d-flex flex-column align-items-center my-3 my-lg-0">
                    <div className="image">
                        <img src={this.state.posts.imgSrc} alt="" />
                    </div>
                    <h3 className="title my-3 text-white text-center">
                        {this.state.posts.title}
                    </h3>
                    <p className="mb-0 description text-white text-center">
                        {this.state.posts.description}
                    </p>
                    <a href={`/post/${this.state.posts.title}`} className="more">
                        More Information ...
                    </a>
                </div>
                }
            </React.Fragment>
        )
    }
}