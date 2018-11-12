import React from 'react';
import styles from './styles/ThisHeroPage.module.css';
import PageTemplate from '../templates/PageTemplate';
import heroes_for_ThisHeroPage from '../atoms/hero_page_List';

// let hero = heroes_for_ThisHeroPage[this.props.match.params.id]

const ThisHeroPage = (props) => {
  const hero = heroes_for_ThisHeroPage[props.match.params.id];
  if(!hero){
    return <div>Сорян, герой не найден</div>
  }
  return (
    <PageTemplate>
      <main className={styles.main_style + ' '+"row justify-content-center"}>
        <div className="col-10 p-0">
          <h1>{hero.name}</h1>
          <p><strong>Настоящее имя:</strong>  {hero.real_name}</p>
          <p><strong>Вид:</strong>  {hero.race}</p>
          <p><strong>Рост:</strong>  {hero.height}</p>
          <p><strong>Вес:</strong>  {hero.weight}</p>
          <hr/>
        </div>
        <div className={styles.hero_img + ' ' +"col-2 p-0"}>
          <img src={hero.img} alt=""/>
        </div>
        <div className="col-12">
          <h3>Способности</h3>
          {hero.abilities}
          <hr/>
        </div>
        <div className="col-12">
          {hero.short_story}
        </div>
      </main>
    </PageTemplate>
  );
};

export default ThisHeroPage;