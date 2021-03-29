import React, { useEffect, useState } from "react";
import "./Alert.scss";

function Alert(props) {
  const { isShowAlert, isSuccess, contentAlert, closeAlert } = props;
  const [newIsShowAlert, setNewIsShowAlert] = useState(isShowAlert);
  const [newIsSuccess, setNewIsSuccess] = useState(isSuccess);
  const [newContentAlert, setNewContentAlert] = useState(contentAlert);
  useEffect(() => {
    setNewIsShowAlert(isShowAlert);
    setNewIsSuccess(isSuccess);
    setNewContentAlert(contentAlert);
  }, []);
  useEffect(() => {
    setNewIsShowAlert(isShowAlert);
    setNewIsSuccess(isSuccess);
    setNewContentAlert(contentAlert);
  }, [isShowAlert]);
  return (
    <div
      className={`alert ${
        newIsShowAlert === 1 ? "show" : newIsShowAlert === 2 ? "hide" : ""
      }  ${newIsSuccess ? "msg-success" : "msg-err"}`}
    >
      <span className="success">
        <i
          id="icon-message"
          class="fas "
          className={`fas ${
            newIsSuccess ? "fa-check-circle" : "fa-times-circle"
          }`}
        ></i>
      </span>
      <span className="msg" id="msg">
        {newContentAlert}
      </span>
      <span className="close-btn" onClick={closeAlert}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
}

export default Alert;
