import { useContext } from "react";

import { ViewContext } from "../../contexts/ViewContext";

import Sidebar from "./Sidebar";

export default function RightSidebar() {
  const { rightBarView } = useContext(ViewContext);

  const renderRightBarView = () => {
    switch (rightBarView) {
      default:
        return "Right Sidebar";
    }
  };

  return (
    <>
      <Sidebar sx={{ width: 240 }}>{renderRightBarView()}</Sidebar>
    </>
  );
}
