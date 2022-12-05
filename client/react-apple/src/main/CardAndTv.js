import React from "react";

function CardAndTv() {
  return (
    <div className="container-fluid text-center">
      <div className="row mx-md-3">
        {/* <!-- apple card starts here --> */}
        <div className="apple-card mt-3 pt-5 col-md mr-md-2">
          <h3 className="card-logo "></h3>
          <p className="description py-1">
            Get up to 3% Daily Cash back <br /> with every Purchase
          </p>
          <ul className="list-inline learn-buy">
            <li className="list-inline-item">
              <a href="#">Learn more</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Apply now</a>
            </li>
          </ul>
        </div>
        {/* <!-- apple tv starts here --> */}
        <div className="apple-tv pt-5 my-3 col-md ml-md-2">
          <div className="tv-logo"></div>
          <div className="chacha-logo my-2"></div>
          <a href="">Stream now</a>
        </div>
      </div>
    </div>
  );
}

export default CardAndTv;
