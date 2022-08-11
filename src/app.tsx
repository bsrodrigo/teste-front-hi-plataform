import React from "react";
import { render } from "react-dom";

import { ChecklistPage } from "./pages/checklist-page";

const Main: React.FC = () => <ChecklistPage />;

render(<Main />, document.getElementById("app"));
