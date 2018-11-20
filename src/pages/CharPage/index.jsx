import React, { Component } from 'react';
import axios from 'axios';
import styles from './CharPage.module.css';
import PageTemplate from '../../templates/PageTemplate';

class CharPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetch();
    }, 500);
  }

  fetch = () => {
    this.setState({
      loading: true,
      error: false,
      data: [],
    });

    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters/${this.props.match.params.id}`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          data: response.data.data.results[0],
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  render() {
    const { loading, error, data } = this.state;
    return (
      <PageTemplate>
        {loading && 'Зарузка...'}
        {!loading && !error && !data && 'Пусто'}
        {error && (
        <div>
          <p>Произошла ошибка при загруке</p>
          <button type="button" onClick={this.fetch}>Повторить загрузку</button>
        </div>
        )}
        <main className={`${styles.main_style} row justify-content-center`}>
          <div className="col-10 p-0">
            <h1>
                Герой
              {' '}
              {data.name}
            </h1>
            <p>
              <strong>Настоящее имя:</strong>
              {' '}
              {data.real_name}
            </p>
            <p>
              <strong>Вид:</strong>
              {' '}
              {data.race}
            </p>
            <p>
              <strong>Рост:</strong>
              {' '}
              {data.height}
            </p>
            <p>
              <strong>Вес:</strong>
              {' '}
              {data.weight}
            </p>
          </div>
          <div className={`${styles.hero_img} col-2 p-0`}>
            {/* <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" /> */}
          </div>
          <hr />
          <div className="col-12">
            <h3>Способности</h3>
            {data.abilities}
            <hr />
          </div>
          <div className="col-12">
            {data.short_story}
          </div>
        </main>
      </PageTemplate>
    );
  }
}

export default CharPage;
