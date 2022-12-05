import React from "react";
import Unicef from "../main/Unicef";
import MacBookAir from "../main/MacBookAir";
import MacBookPro13 from "../main/MacBookPro13";
import Iphone13 from "../main/Iphone13";
import Iphone13ProAndWatch from "../main/Iphone13ProAndWatch";
import IpadairAndFitness from "../main/IpadairAndFitness";
import CardAndTv from "../main/CardAndTv";
import AppleYouTubeVideos from "../youTube/AppleYouTubeVideos";

function Main() {
  return (
    <div>
      <Unicef />
      <MacBookAir />
      <MacBookPro13 />
      <Iphone13 />
      <Iphone13ProAndWatch />
      <IpadairAndFitness />
      <CardAndTv />
      {/* <AppleYouTubeVideos /> */}
    </div>
  );
}

export default Main;
