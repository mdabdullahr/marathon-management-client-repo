import React, { useEffect } from 'react';

const TermsAndCondition = () => {
  useEffect(() => {
        document.title = "Marathon Management | Terms-&-Condition";
      }, []);
  return (
    <div className='py-24 bg-white dark:bg-gray-900 min-h-screen'>
      <h1>This is Terms and condition page</h1>
    </div>
  );
};

export default TermsAndCondition;