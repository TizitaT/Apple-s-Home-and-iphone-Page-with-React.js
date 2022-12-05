import React from "react";

function Iphone13ProAndWatch() {
  return (
    <div className="container-fluid text-center">
      <div className="row mx-md-3">
        {/* <!-- iphone13 starts here--> */}
        <div className="iphone13-pro col-md mr-md-2">
          <h2 className="pt-5">iPhone 13 Pro</h2>
          <p className="description my-2">Oh.So.Pro</p>
          <ul className="learn-buy">
            <li className="list-inline-item">
              <a href="">Learn more</a>
            </li>
            <li className="list-inline-item">
              <a href="">Buy</a>
            </li>
          </ul>
        </div>

        {/* <!-- watch starts here--> */}
        <div className="watch-bcg mt-3 pt-5 col-md ml-md-2">
          <h3 className="watch-logo"></h3>
          <p className="description my-2">It's our largest display yet.</p>
          <ul className="list-inline learn-buy">
            <li className="list-inline-item">
              <a href="#">Learn more</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Iphone13ProAndWatch;
