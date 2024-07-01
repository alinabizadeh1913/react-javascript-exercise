import React from "react";
import Template from "../../Template";

const Zustand = () => {
    return (
        <Template title="Using the Zustand state management package">
             <section id="zustand" className="my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 d-flex justify-content-center">
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Template>
    )
}

export default Zustand;