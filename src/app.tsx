import React from 'react';
import { render } from "react-dom";

import { Teste } from "./teste";

const Main: React.FC = () => (
  <div>
    <h1>Olá mundo!</h1>
    <p>Hello world!</p>
    <Teste />
  </div>
);

render(<Main />, document.getElementById("app"));
