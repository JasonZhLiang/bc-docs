import React from 'react';
import Footer from '@theme-original/Footer';

// // this is an alternative for inserting intercom widget
// import { IntercomProvider, useIntercom } from 'react-use-intercom';
// const INTERCOM_APP_ID = 'za9nz70e';
// const App = () => (
//   <IntercomProvider appId={INTERCOM_APP_ID}>
//     <HomePage />
//   </IntercomProvider>
// );
// // Anywhere in your app
// const HomePage = () => {
//   const { boot, shutdown, hide, show, update } = useIntercom();
//   return <button onClick={boot}>Boot intercom! ☎️</button>;
// };

export default function FooterWrapper(props) {
  return (
    <>
      {/* <App /> */}
      <Footer {...props} />
    </>
  );
}
