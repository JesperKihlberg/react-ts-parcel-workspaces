import { NamePresenter, test } from "@ts-parcel-ws/package1";
import React from "react";

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  test("This is a test output");
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <NamePresenter name={name} />
    </div>
  );
};

export default App;
