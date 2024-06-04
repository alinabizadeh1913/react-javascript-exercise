import React from "react";
import Template from "../../Template/Template";

export default class Normal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [
                {
                    id : 1,
                    title : 'Person 1',
                    description : 'my name is ali nabizadeh',
                    job : 'front-end developer'
                },
                {
                    id : 2,
                    title : 'Person 2',
                    description : 'my name is mohammad nabizadeh',
                    job : 'student'
                },
                {
                    id : 3,
                    title : 'Person 3',
                    description : 'my name is mohsen nabizadeh',
                    job : 'teacher'
                },
                {
                    id : 4,
                    title : 'Person 4',
                    description : 'my name is azar shakeri',
                    job : 'teacher'
                }
            ]
        }
    }

    render() {

        const post = this.state.posts.map(person => {
            return (
                <div className="col-12 col-md-6 col-lg-3 my-2" key={person.id}>
                    <div className="person rounded-2">
                        <h4 className="title">
                            <i class="fa-regular fa-user mx-2 fs-5"></i>
                            {person.title}
                        </h4>
                        <p className="description mb-0 mt-2">
                            <i class="fa-solid fa-circle-info mx-2 fs-5"></i>
                            {person.description}
                        </p>
                        <p className="job mb-0 mt-2">
                            <i class="fa-solid fa-leaf mx-2 fs-5"></i>
                            {person.job}
                        </p>
                    </div>
                </div>
            )
        })

        return (
            <Template title="normal show post with class component">
                <section id="normal2" className="container">
                    <div className="row justify-content-center">
                        {post}
                    </div>
                </section>
            </Template>
        )
    }
}