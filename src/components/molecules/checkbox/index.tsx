import React from "react";

import { Checkbox, Label } from "../../atoms";

interface ITypography {
  children: string;
}

export const Typography: React.FC<ITypography> = ({ children }) => (
  <div>
    <Checkbox />
    <Label />
  </div>
);
