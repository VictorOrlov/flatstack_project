import React from 'react';
import Sections from '../../molecules/Sections';
import { newsList } from '../../molecules/MapForSection';

const NewsSection = () => (
  <Sections title="Новости">{newsList}</Sections>
);

export default NewsSection;
