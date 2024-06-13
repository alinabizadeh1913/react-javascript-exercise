import React from "react";
import Template from "../../Template";
import axios from "axios";

export default class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks : [],
            posts : null
        }

        axios.defaults.baseURL = 'http://localhost:5000/';
        this.getPost = this.getPost.bind(this);
    }

    componentDidMount() {
        axios.get('posts2').then(response => {
            this.setState({
                navLinks : response.data
            })
        })
    }

    getPost(title) {
        axios.get(`posts2?title=${title}`).then(response => {
            this.setState({
                posts : response.data[0]
            })
        })
    }

    render() {
        return (
            <Template title="Handle Post By Using getDerivedStateFromProps">
                <section id="get-derived">
                    <div className="container">
                        <div className="row">
                            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                {
                                    this.state.navLinks && this.state.navLinks.map(link => {
                                        return (
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" onClick={() => {
                                                    this.getPost(link.title);
                                                }}>
                                                    {link.title}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="row justify-content-center">
                            <Post data={this.state.posts}/>
                        </div>
                    </div>
                </section>
            </Template>
        )
    }
}

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                {
                this.props.data && <div className="col-6">
                    <div className="post">
                        <div className="image">
                            <img src={this.props.data.imgSrc} alt="" />
                        </div>
                        <h3 className="title text-white my-3">
                            {this.props.data.title}
                        </h3>
                        <p className="mb-0 text-center text-white">
                            {this.props.data.description}
                        </p>
                    </div>
                </div>
                }
            </React.Fragment>
        )
    }
}