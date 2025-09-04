import React, { useEffect } from "react";

const Outlet = ({onClick}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);
  return (
    <div
    onClick={onClick}
      className="fixed inset-0 bg-black opacity-40 z-[20]"
      // style={{ pointerEvents: "auto" }}
    ></div>
  );
};

export default Outlet;