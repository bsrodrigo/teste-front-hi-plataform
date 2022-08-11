import React from "react";

import { Checkbox, Label } from "../../atoms";

interface ICheckboxList {
  data: any;
}

export const CheckboxList: React.FC<ICheckboxList> = ({ data }) => (
  <div>
    {data &&
      Object.keys(data)?.map((key) => {
        console.log({ data: data[key] });
        return (
          <>
            pai: {data[key]?.name}
            {data[key] && data[key]?.level <= 2 && (
              <div>
                _______________________ filhos
                {Object.keys(data?.[key]?.children || {})?.map(
                  (keyChildren) => {
                    console.log({ children: data[key]?.children, keyChildren });
                    return <CheckboxList data={data[key]?.children} />;
                  }
                )}
              </div>
            )}
          </>
        );
      })}
  </div>
);
