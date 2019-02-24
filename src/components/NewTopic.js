import React, { Component } from 'react';
import { addNewTopic } from '../api';
import NewTopicArticle from './NewTopicArticle';

class NewTopic extends Component {
  state = {
    slug: '',
    description: '',
    newSlug: '',
    toggleArticle: false,
  };
  render() {
    const { slug, description, newSlug, toggleArticle } = this.state;
    const { user } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New topic:</label>
          <input
            name="slug"
            type="text"
            value={slug}
            onChange={this.handleChange}
            required
          />
          <label onChange={this.handleChange}>Topic description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.toggleNewTopicArticle} type="submit">
            Submit new topic!!!
          </button>
        </form>
        {toggleArticle && <NewTopicArticle topic={newSlug} user={user} />}
      </div>
    );
  }

  toggleNewTopicArticle = () => {
    const { toggleArticle } = this.state;
    this.setState({ toggleArticle: !toggleArticle });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    addNewTopic(slug, description).then(topic => {
      console.log(topic);
      this.setState({ slug: '', description: '', newSlug: topic.slug });
    });
  };
}

export default NewTopic;
