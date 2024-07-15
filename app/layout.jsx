import React from "react";
import Reduxprovider from "./reduxStore/Provider";
import "@/assets/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Reduxprovider>
          <main>{children}</main>
        </Reduxprovider>
      </body>
    </html>
  );
};

export default layout;
