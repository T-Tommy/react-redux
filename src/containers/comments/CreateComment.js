import { connect } from 'react-redux';
import CommentForm from '../../components/comments/CommentForm';
import { addComment } from '../../actions/commentActions';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(addComment(props.postId, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
