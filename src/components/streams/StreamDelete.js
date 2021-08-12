import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const action = (
    <div>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
    </div>
  )

  return (
    <div>
      StreamDelete
      <Modal 
        title="DELETE STREAM"
        content="Are you sure that you want to delete this stream?"
        action={action}
      />
    </div>
  );
};

export default StreamDelete;
