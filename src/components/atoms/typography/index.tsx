import React from "react";

interface ITypography {
  children: string;
}

export const Typography: React.FC<ITypography> = ({ children }) => (
  <div>
    <p>{children}</p>
  </div>
);
