import React from "react";
import Template from '../../Template'
import Trigger from "./Trigger";
import Post from "./Post";

export default class Fetch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            triggerData : [
                {
                    id : 1,
                    title : 'Butterfly'
                },
                {
                    id : 2,
                    title : 'Beach'
                },
                {
                    id : 3,
                    title : 'Flower'
                },
                {
                    id : 4,
                    title : 'Eagle'
                }
            ],
            currentPost : null,
            loading: false
        }
    }

    async showPostById(id) {
        fetch(`http://localhost:5000/posts2?post-id=${id}`).then(response => response.json())
        .then(result => {
            this.setState({
                currentPost : result[0]
            })
        });

        this.setState({
            loading : true
        })
        setTimeout(() => {
            this.setState({
                loading : false
            })
        },1100)
    }

    render() {
        return (
            <Template title="show post with comment used by fetch">
                <section id="fetch">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <Trigger data={this.state.triggerData} showPostById={this.showPostById.bind(this)}/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col">
                                {
                                    this.state.loading ? <div className="loading d-flex justify-content-center">
                                    <img src="./img/spinner.svg" alt="" style={{width : '131.3px'}}/>
                                </div> : <Post currentPost={this.state.currentPost}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Template>
        )
    }
}