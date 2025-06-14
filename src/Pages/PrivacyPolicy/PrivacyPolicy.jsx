import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
        document.title = "Marathon Management | Privacy-Policy";
      }, []);
  return (
    <div className='py-24 bg-white dark:bg-gray-900 min-h-screen'>
      <h1>This is Privacy and Policy page</h1>
    </div>
  );
};

export default PrivacyPolicy;