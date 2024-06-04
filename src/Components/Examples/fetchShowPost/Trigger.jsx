import React from "react";

const Trigger = ({data, showPostById}) => {

    const trigger = data && data.map(link => {
        return (
            <a href="#" className="text-white my-2 fs-5 mx-3" key={link.id} onClick={(e) => {
                e.preventDefault();
                showPostById(link.id)
            }}>
                <i class="fa-regular fa-circle-down"></i>
                {link.title}
                </a>
        )
    })

    return (
        <div className="trigger-wrapper">
            {trigger}
        </div>
    )
}

export default Trigger;