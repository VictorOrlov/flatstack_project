import React from 'react';
import Sections from '../../molecules/Sections';
import { newsList } from '../../molecules/MapForSection';

const NewsSection = () => (
  <span>
    <Sections title="Новости (не кликабельно)">{newsList}</Sections>
  </span>
);

export default NewsSection;
