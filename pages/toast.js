import * as React from "react";
import toast from "../components/Toast";

const Home = () => {
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    toast.dismiss();
  }, []);

  return (
    <>
      <div onClick={() => notify("success", "Success!")} className="message">
        <p>Success Message</p>
      </div>
      <div onClick={() => notify("error", "Error!")} className="message">
        <p>Error Message</p>
      </div>
      <div onClick={() => notify("info", "Info!")} className="message">
        <p>Info Message</p>
      </div>
      <div onClick={() => notify("warning", "Warning!")} className="message">
        <p>Warning Message</p>
      </div>
      <div onClick={dismiss} className="message">
        <p>Dissmiss All Messages</p>
      </div>
      <style jsx>{`
        .message {
          cursor: pointer;
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 20px;
          text-align: center;
          transition: 100ms ease-in background;
          margin: 10px;
        }
        .message:hover {
          background: #ccc;
        }
      `}</style>
    </>
  );
};

export default Home;
