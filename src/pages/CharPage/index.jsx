import React, { Component } from 'react';
import axios from 'axios';
import styles from './CharPage.module.css';
import PageTemplate from '../../templates/PageTemplate';
import BtnParall from '../../atoms/BtnParall';

class CharPage extends Component {
  state = {
    loading: false,
    error: false,
    data: null,
    showComicsList: false,
    showHistList: false,
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
      data: null,
    });

    const { match } = this.props;

    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters/${match.params.id}`, {
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

  comicsOnClick = () => {
    this.setState(prevState => ({
      showComicsList: !prevState.showComicsList,
    }));
  };

  histOnClick = () => {
    this.setState(prevState => ({
      showHistList: !prevState.showHistList,
    }));
  };

  render() {
    const {
      loading, error, data, showComicsList, showHistList,
    } = this.state;
    // const comicsUrl = "nnjnj";
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
        {data && (

          <main className={`${styles.main_style} row justify-content-center`}>
            <div className={`${styles.hero_img} col-10 col-sm-3 p-0`}>
              <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
            </div>
            <div className={`${styles.hero_desc} col-10 col-sm-9`}>
              {/* {console.log(data.comics.items[0].resourceURI.match(/[^\/]+$/)[0])} */}

              <h1>
                Герой:
                {' '}
                {data.name}
              </h1>
              {data.description && (
                <p>
                  <strong>Данные о объекте - </strong>
                  {data.description}
                </p>
              )}
              {' '}
              {!data.description && (<p><strong>Нет данных!!! Объект не засвечен.</strong></p>)}
              <hr />
            </div>
            <hr />
            <div className={`${styles.hero_dossier} col-12`}>
              <h1> Досье: </h1>
              <div className={styles.btn_margin}>
                <BtnParall
                  link="#"
                  click={this.comicsOnClick}
                >
                  {showComicsList ? 'Скрыть список' : 'Показать список Комиксов с участием этого героя'}
                </BtnParall>
              </div>
              <div className="col-10">
                {showComicsList && (
                  <span>
                    <h3>Список комиксов</h3>
                    <ul>
                      {data.comics.items.map(comics => (
                        <li key={comics.name}>
                          {comics.name}
                        </li>
                      ))}
                    </ul>
                  </span>
                )}
              </div>
              <div className={styles.btn_margin}>
                <BtnParall
                  link="#"
                  click={this.histOnClick}
                >
                  {showHistList ? 'Скрыть список' : 'Показать список Иссторий с участием этого героя'}
                </BtnParall>
              </div>
              <div className="col-10">
                {showHistList && (
                  <span>
                    <h3>Список иссторий</h3>
                    <ul>
                      {data.stories.items.map(stories => (
                        <li key={stories.resourceURI}>
                          {stories.name}
                        </li>
                      ))}
                    </ul>
                  </span>
                )}
              </div>
            </div>
          </main>
        )}

      </PageTemplate>
    );
  }
}

export default CharPage;
