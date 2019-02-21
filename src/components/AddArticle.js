import React, { Component } from 'react';
import { addArticle } from '../api';
import Articles from './Articles';
import { navigate } from '@reach/router';

class AddArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: 'coding',
  };
  render() {
    const { body, title, topic } = this.state;
    const { topics } = this.props;

    return (
      <div className="sidebar">
        <form className="commentAdd" onSubmit={this.handleSubmit}>
          <h1>Add an article</h1> <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={this.handleChange}
            name="title"
          />
          <br />
          <label>Topic</label>
          {/* ADD OR SELECT TOPIC */}
          <select id="topics" onChange={this.handleChange} name="topic">
            {' '}
            {topics &&
              topics.map(topic => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            {/* <option key="other" value="add-topic">
              Add a topic
            </option> */}
          </select>
          <br />
          <label>Your article</label>
          <input
            type="text"
            value={body}
            onChange={this.handleChange}
            name="body"
          />
          {/* {this.state.topic === 'add-topic' && <p>Hi</p>} */}
          <button type="submit">Submit</button>
        </form>
        {(title, topic, body && <Articles article={this.state.body} />)}
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const { user } = this.props;

    addArticle(title, topic, body, user.username).then(article => {
      console.log(article);
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({ title: '', topic: '', body: '' });
  };
}

export default AddArticle;