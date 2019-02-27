import React, { Component } from 'react';
import { addArticle } from '../api';
import Articles from './Articles';
import { navigate } from '@reach/router';
import NewTopic from './NewTopic';
import './AddArticle.css';
import Error from './Error';

class AddArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: 'coding',
    showAdd: false,
    hasError: false,
    error: '',
  };
  render() {
    const { body, title, topic, showAdd, hasError, error } = this.state;
    const { topics, user } = this.props;

    if (hasError) return <Error error={error} />;
    return (
      <div>
        <button className="buttonToAdd" onClick={this.toggleArticle}>
          {showAdd ? 'Cancel' : `Add an article, ${user.name}?`}
        </button>{' '}
        {showAdd && (
          <form className="articleAdd" onSubmit={this.handleSubmit}>
            <label className="topic">Topic</label>
            <select
              className="topicDrop"
              id="topics"
              onChange={this.handleChange}
              name="topic"
            >
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
            {this.state.topic === 'add-topic' ? (
              <NewTopic user={user} />
            ) : (
              <div className="divArt">
                <label htmlFor="titleSpace" className="title">
                  Title
                </label>
                <br />
                <input
                  className="titleSpace"
                  type="text"
                  value={title}
                  onChange={this.handleChange}
                  name="title"
                  required
                />
                <br />
                <label>Your article</label>
                <br />
                <textarea
                  rows="4"
                  cols="50"
                  className="typing"
                  type="text"
                  value={body}
                  onChange={this.handleChange}
                  name="body"
                  id="newArt"
                  required
                />{' '}
              </div>
            )}

            <button type="submit">Submit article</button>
          </form>
        )}
      </div>
    );
  }

  toggleArticle = () => {
    const { showAdd } = this.state;
    this.setState({ showAdd: !showAdd });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const { user } = this.props;

    addArticle(title, topic, body, user.username).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({ title: '', topic: '', body: '' });
  };
}

export default AddArticle;
