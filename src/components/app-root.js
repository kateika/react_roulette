import React from "react";
import { renderRoutes } from "react-router-config";

const AppRoot = (props) => {
  console.log(props.route);
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default AppRoot;
