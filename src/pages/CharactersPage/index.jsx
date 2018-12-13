import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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


    componentDidUpdate(pervProps) {
      const { location } = this.props;
      if (pervProps.location !== location) {
        return this.fetch();
      }
      return null;
    }

    fetch = () => {
      const { location } = this.props;
      const currentPage = qs.parse(location.search, { ignoreQueryPrefix: true });
      this.setState({
        data: [],
        loading: true,
        error: false,
      });

      axios
        .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
          params: {
            apikey: process.env.REACT_APP_MARVEL_API_KEY,
            limit: 30,
            offset: (currentPage.page - 1) * 30,
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
      const {
        loading, error, data, totalPage,
      } = this.state;

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil((totalPage / 2) / 30); i++) {
        pageNumbers.push(i);
      }
      const renderPageNumbers = pageNumbers.map(number => (
        <li key={number} id={number} className="page-item">
          <Link
            to={`/heroes/?page=${number}`}
            className="page-link"
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
              <div className={`${styles.itemlist} col-10 col-sm-2`} key={character.id}>
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
            <div className={`${styles.pagList} col-12`}>
              <ul className={`${styles.paginate}`}>
                {renderPageNumbers}
              </ul>
            </div>
          </div>
        </PageTemplate>
      );
    }
}
CharactersPage.defaultProps = {
  location: {},
};

CharactersPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

export default CharactersPage;
