import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThisHeroPage.module.css';
import PageTemplate from '../../templates/PageTemplate';
import heroesForThisHeroPage from '../../atoms/hero_page_List';
import BtnParall from '../../atoms/BtnParall';

const ThisHeroPage = (props) => {
  const { match } = props;
  const hero = heroesForThisHeroPage[match.params.id];
  if (!hero) {
    return <div>Сорян, герой не найден</div>;
  }
  return (
    <PageTemplate>
      <main className={`${styles.main_style} row justify-content-center`}>
        <div className="col-11 col-md-10 p-0">
          <h1>{hero.name}</h1>
          <p>
            <strong>Настоящее имя:</strong>
            {' '}
            {hero.real_name}
          </p>
          <p>
            <strong>Вид:</strong>
            {' '}
            {hero.race}
          </p>
          <p>
            <strong>Рост:</strong>
            {' '}
            {hero.height}
          </p>
          <p>
            <strong>Вес:</strong>
            {' '}
            {hero.weight}
          </p>
          <hr />
        </div>
        <div className={`${styles.hero_img} col-11 col-md-2 p-0`}>
          <img src={hero.img} alt="" />
        </div>
        <div className="col-12">
          <h3>Способности</h3>
          {hero.abilities}
          <hr />
        </div>
        <div className="col-12">
          {hero.short_story}
        </div>
        <div className="col-10">
          <p>
            Здесь вы можете перейти к полному списку героев, вселенной Марвел
          </p>
          <BtnParall link="/heroes">Перейти</BtnParall>
        </div>
      </main>
    </PageTemplate>
  );
};
ThisHeroPage.defaultProps = {
  match: {},
};

ThisHeroPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default ThisHeroPage;
