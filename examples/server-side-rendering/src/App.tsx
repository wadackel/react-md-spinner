import React, { useState, useEffect } from "react";
import MDSpinner from "../../../src";

export const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <h1>{mounted ? "Mounted" : "Loading..."}</h1>
      <MDSpinner />
    </div>
  );
};
