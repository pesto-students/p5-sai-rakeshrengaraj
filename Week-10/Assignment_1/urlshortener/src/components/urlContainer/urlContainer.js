import React from "react";

function UrlContainer() {
  return (
    <main className="urlContainer">
      <div className="containerHeader">
        <h1>More than just shorter Links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <div className="containerInput">
        <div className="urlInput">
          <input type="text" placeholder="Enter URL" value="value" />
        </div>
        <div className="urlOutput">
            <div className="displayOutput">
                 Output goes Here
            </div>
          <button className="copyOutput">Copy</button>
        </div>
      </div>
    </main>
  );
}

export default UrlContainer;
