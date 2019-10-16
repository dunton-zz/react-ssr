import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

// this separates react server stuff from regular server stuff

export default () => {
  const content = renderToString(<Home />);
  //generate html doc with script tag
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
