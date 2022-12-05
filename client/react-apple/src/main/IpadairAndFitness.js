import React from "react";

function IpadairAndFitness() {
  return (
    <div className="container-fluid text-center">
      <div className="row mx-md-3">
        {/* <!-- ipad air starts here--> */}
        <div className="ipad-air white mt-3 pt-5 col-md mr-md-2">
          <h3 className="ipadair-logo"></h3>
          <p className="description py-2">Light.Bright.Full of might</p>
          <ul className="list-inline learn-buy">
            <li className="list-inline-item">
              <a href="#">Learn more</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
        {/* <!-- fitness starts here --> */}
        <div className="fitness mt-3 pt-5 white col-md ml-md-2">
          <h3 className="fitness-logo"></h3>
          <p className="description py-2">
            New Artist Spotlight workouts <br /> with music by Katy Perry.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item learn-buy">
              <a href="#">See what's new</a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                Try it free <sup>1</sup> <span>#8599</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IpadairAndFitness;
