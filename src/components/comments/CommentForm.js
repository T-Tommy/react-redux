import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    body: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ body: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="body" type="textarea" value={this.state.body} onChange={this.handleChange} />
        <button>Add Comment</button>
      </form>
    );
  }
}
