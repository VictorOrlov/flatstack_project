import React from 'react';
import styles from './styles/MoovesPage.module.css';
import PageTemplate from '../templates/PageTemplate';
import {mooves_list} from '../molecules/MapForSection';

const MoovesPage = () => (
  <PageTemplate>
    <main className={styles.mooves_page + ' ' + "row justify-content-center"}>
      {mooves_list}
    </main>
  </PageTemplate>
);

export default MoovesPage;