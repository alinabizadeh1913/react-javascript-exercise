import React from "react";

const Template = (props) => {
    return (
        <React.Fragment>
            <div id="template" className="container p-0 rounded-3 overflow-hidden my-5">
                <div className="header d-flex justify-content-between p-4 mb-4">
                    <div className="circle-wrapper d-flex">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>

                    <div className="title-example text-white">
                        {props.title}
                    </div>
                </div>
                <div className="content p-4 mt-2">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Template;