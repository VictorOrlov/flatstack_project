import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate';
import styles from './CharactersPage.module.css';

class CharactersPage extends Component {
    state = {
      loading: false,
      error: false,
      data: [],
      totalPage: 0,
    };

    componentDidMount() {
      this.fetch();
    }

    // componentDidUpdate() {
    // }

    fetch = () => {
      const currentPage = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
      console.log(currentPage.page);
      this.setState({
        data: [],
        loading: true,
        error: false,
      });

      axios
        .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
          params: {
            apikey: process.env.REACT_APP_MARVEL_API_KEY,
            limit: 5,
            offset: (currentPage.page - 1) * 5,
          },
        })
        .then((response) => {
          this.setState({
            loading: false,
            data: response.data.data.results,
            totalPage: response.data.data.total,
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
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(this.state.totalPage / 5); i++) {
        pageNumbers.push(i);
      }
      const renderPageNumbers = pageNumbers.map(number => (
        <li key={number} id={number}>
          <Link
            to={`/heroes/?page=${number}`}
            className={styles.linkPaginate}
          >
            {number}
          </Link>
        </li>
      ));
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
            { data.map(character => (
              <div className={`${styles.itemlist} col-2`} key={character.id}>
                <Link to={`${'/hero/'}${character.id}`}>
                  <div className={styles.itemlist__img}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
                  </div>
                  <div className={styles.itemlist__title}>
                    <h5>{character.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
            <ul className={styles.paginate}>
              {renderPageNumbers}
            </ul>
          </div>
        </PageTemplate>
      );
    }
}

export default CharactersPage;
