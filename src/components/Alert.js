import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div>
      
       <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type + ": "}</strong>{props.alert.msg}
        <button
          type="button"
          className={"btn-close alert-"+"props.alert.type"}
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
