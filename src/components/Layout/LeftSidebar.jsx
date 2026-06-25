import { useContext } from "react";

import { ViewContext } from "../../contexts/ViewContext.jsx";

import FileComponent from "../FileComponent";

import ElementsList from "../Elements/ElementsList";

import Sidebar from "./Sidebar";

export default function LeftSidebar() {
  const { leftBarView } = useContext(ViewContext);

  const renderLeftBarView = () => {
    switch (leftBarView) {
      case "file":
        return <FileComponent />;
      case "elements":
        return <ElementsList />;
      default:
        return null;
    }
  };

  return (
    <>
      <Sidebar sx={{ width: 240 }}>{renderLeftBarView()}</Sidebar>
    </>
  );
}
