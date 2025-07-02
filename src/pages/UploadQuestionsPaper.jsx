import React, {useEffect} from 'react';
import UploadBox from '../components/UploadBox';

const UploadQuestionPaper = () => {
   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Development';
        }, []);
  return (
    <div className="d-flex">
      <div className="container-fluid p-4">
        <UploadBox label="Upload Technical Question Paper" />
        <UploadBox label="Upload Practical Question Paper" />
      </div>
    </div>
  );
};

export default UploadQuestionPaper;
