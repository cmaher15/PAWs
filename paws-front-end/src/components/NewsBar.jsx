import React from "react";
import "../styles/NewsBar.css";

export default function NewsBar() {
  return (
    <div className="main-box">
      <span className="article">
        <img className="message-image" src="images/lola1.jpg"></img>
        <h4 className="news-title">This Just In: Lola is a GOOD GIRL!</h4>
        <p className="news-article">
          She's not accepting interviews at this time, but we expect she's busy
          getting lots of belly rubs!
        </p>
      </span>
      <span className="article">
        <img className="message-image" src="images/dogpark.jpg"></img>
        <h4 className="news-title">New Dog Park Gets Great Turnout!</h4>
        <p className="news-article">
          A great place to mix and mingle, just don't drop your ball!
        </p>
      </span>
      <span className="article">
        <img className="message-image" src="images/ozzie.jpg"></img>
        <h4 className="news-title">Westhound Terrier!</h4>
        <p className="news-article">
          Ozzie is a little terrorist when he isn't walked enough! He is looking
          for some friends to walk with.
        </p>
      </span>
      <span className="article">
        <img className="message-image" src="images/maz.jpg"></img>
        <h4 className="news-title">All Bows 50% Off at BowWow Boutique!</h4>
        <p className="news-article">It's time to get fancy.</p>
      </span>
      <span className="article">
        <img className="message-image" src="images/gloria.jpg"></img>
        <h4 className="news-title">Dogs can get depressed too</h4>
        <p className="news-article">
          Daily walks are essential! Find a walking buddy today.
        </p>
      </span>
      <span className="article">
        <img className="message-image" src="images/dogbakery.jpg"></img>
        <h4 className="news-title">Best Treats In The Area!</h4>
        <p className="news-article">
          Best baked goodies you can get your paws on!
        </p>
      </span>
    </div>
  );
}
