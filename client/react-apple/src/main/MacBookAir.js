import React from "react";

function MacBookAir() {
  return (
    <div className="container-fluid text-center">
      <div className="macbook-air pt-5">
        <div className="macbook-air-internal">
          <h2>MacBook Air</h2>
          <h3 className="macBookAir-logo"></h3>
          <p className="text-muted pt-2">Avialable next month</p>

          <ul className="list-inline learn-buy py-2">
            <li className="list-inline-item">
              <a href="#">Learn more</a>
            </li>
            <li className="list-inline-item">
              <a href="#">View Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MacBookAir;
