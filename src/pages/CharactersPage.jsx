import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link, Redirect } from 'react-router-dom';
import PageTemplate from '../templates/PageTemplate';
import styles from './styles/CharactersPage.module.css';

class CharactersPage extends Component {
    state = {
      loading: false,
      error: false,
      data: [],
      page: 1,
    };

    componentDidMount() {
      this.fetch();
    }

    fetch = () => {
      this.setState({
        loading: true,
        error: false,
      });

      axios
        .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
          params: {
            apikey: process.env.REACT_APP_MARVEL_API_KEY,
            limit: 5,
            offset: (this.state.page - 1) * 5,
          },
        })
        .then((response) => {
          this.setState(prevState => ({
            loading: false,
            data: [...prevState.data, ...response.data.data.results],
          }));
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    };

    handleShowMore = () => {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }), () => {
        this.fetch();
      });
    };

    render() {
      const { loading, error, data } = this.state;


      return (
        <PageTemplate>
          <div className="row m-0 justify-content-center">
            <h1>Герои</h1>
            <div className="w-100" />
            {loading && 'Зарузка...'}
            {!loading && !error && data.length === 0 && 'Пусто'}
            {error && (
            <div>
              <p>Произошла ошибка при загруке</p>
              <button type="button" onClick={this.fetch}>Повторить загрузку</button>
            </div>
            )}
            {data.map(character => (
              <div className={`${styles.itemlist} col-2`} key={character.id}>
                <Link to={`${'/heroes/'}${character.id}`}>
                  <div className={styles.itemlist__img}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
                  </div>
                  <div className={styles.itemlist__title}>
                    <h5>{character.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
            <div className="w-100" />
            {!loading && !error && <button onClick={this.handleShowMore} className={styles.button} type="button">Показать ещё</button>}
          </div>
        </PageTemplate>
      );
    }
}

export default CharactersPage;
