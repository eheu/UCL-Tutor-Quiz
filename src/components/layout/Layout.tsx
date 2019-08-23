import React, { FC } from "react";
import "./layout.css";

const Layout: FC = props => (
  <div className="container">
    <main>{props.children}</main>
  </div>
);

export { Layout };
