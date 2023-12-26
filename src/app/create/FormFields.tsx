"use client";

import { useState } from "react";
import { SecondPage } from "./components/SecondPage";
import { FormButtons } from "./FormButtons";
import { FirstPage } from "./components/FirstPage";

export const FormFields = () => {
  const [firstPageActive, setFirstPageActive] = useState<boolean>(true);

  return (
    <>
      {firstPageActive ? <FirstPage /> : <SecondPage />}
      <FormButtons
        firstPageActive={firstPageActive}
        setFirstPageActive={setFirstPageActive}
      />
    </>
  );
};
