import React, {useEffect} from "react";
import OverviewHeader from "../components/Overview1";
import Overviewrow2 from "../components/Overview2";
import OverviewRow3 from "../components/Overview3";

const Overview = () => {
   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Overview';
        }, []);
  return (
    <div>
      <OverviewHeader />
      <Overviewrow2 />
      <OverviewRow3 />
    </div>
  );
};

export default Overview;
