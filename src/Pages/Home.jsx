import React from "react";
import Normal2 from "../Components/Examples/NormalShowPost/Normal2";
import Normal1 from "../Components/Examples/NormalShowPost/Normal1";
import Axios from "../Components/Examples/axiosShowPost/Axios";
import Fetch from "../Components/Examples/fetchShowPost/Fetch";
import ComponentDidMount from '../Components/Examples/lifecycle methods/ComponentDidMount'
import ComponentDidUpdate from "../Components/Examples/lifecycle methods/ComponentDidUpdate";
import GetDerivedStateFromProps from "../Components/Examples/lifecycle methods/GetDerivedStateFromProps";

const Home = () => {
    return (
        <React.Fragment>
            <GetDerivedStateFromProps />
            <ComponentDidUpdate />
            <ComponentDidMount />
            <Fetch />
            <Axios />
            <Normal1 />
            <Normal2 />
        </React.Fragment>
    )
}

export default Home;