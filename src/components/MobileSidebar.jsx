import React, { useRef, useEffect } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (offcanvas) {
      offcanvas.hide();
      document.querySelector('.offcanvas-backdrop')?.remove();
    }
  };

  useEffect(() => {
    return () => {
      document.querySelector('.offcanvas-backdrop')?.remove();
    };
  }, []);

  return (
    <div
      ref={offcanvasRef}
      className="offcanvas offcanvas-start d-lg-none bg-dark text-white"
      tabIndex="-1"
      id="mobileSidebar"
      aria-labelledby="mobileSidebarLabel"
    >
      <div className="offcanvas-header bg-dark text-white">
        <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
        <button 
          type="button" 
          className="btn-close btn-close-white" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
          onClick={() => document.querySelector('.offcanvas-backdrop')?.remove()}
        ></button>
      </div>
      <div className="offcanvas-body p-0">
        <Sidebar closeMobileSidebar={closeOffcanvas} />
      </div>
    </div>
  );
};

export default MobileSidebar;
