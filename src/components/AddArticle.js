import React, { Component } from 'react';
import { addArticle } from '../api';
import Articles from './Articles';
import { navigate } from '@reach/router';
import NewTopic from './NewTopic';
import './AddArticle.css';

class AddArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: 'coding',
  };
  render() {
    const { body, title, topic } = this.state;
    const { topics, user } = this.props;
    console.log(this.state);

    return (
      <div>
        {this.state.topic === 'add-topic' && <NewTopic user={user} />}
        {this.state.topic !== 'add topic' && (
          <form className="articleAdd" onSubmit={this.handleSubmit}>
            <h1>Add your article</h1> <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={this.handleChange}
              name="title"
              required
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
              <option key="other" value="add-topic">
                Add a topic
              </option>
            </select>
            <br />
            <label>Your article</label>
            <input
              className="typing"
              type="text"
              value={body}
              onChange={this.handleChange}
              name="body"
              required
            />
            {topic !== 'add-topic' && (
              <button type="submit">Submit Article</button>
            )}
          </form>
        )}
        {(title, topic, body && <Articles article={body} user={user} />)}
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
      console.log(article, '<<<<NEW ARTICLE');
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({ title: '', topic: '', body: '' });
  };
}

export default AddArticle;
