import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({postId, addComment }) => {
    const [text, setText] = useState('')
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, {text});
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="Post Comments"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          type="submit"
          className="btn btn-primary my-1"
          value="Submit"
        ></input>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { addComment })(CommentForm);
