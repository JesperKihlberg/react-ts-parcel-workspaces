import React from "react";

interface NamePresenterProps {
  name: string;
}

const NamePresenter: React.FC<NamePresenterProps> = ({ name }) => {
  return <div>Hello, {name}</div>;
};

export default NamePresenter;
