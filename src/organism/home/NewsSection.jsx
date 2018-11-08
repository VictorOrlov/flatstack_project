import React from 'react';
import Sections from '../../molecules/Sections';
import {news_list} from '../../molecules/MapForSection';

const NewsSection = () => (
  <Sections title="Новости">{news_list}</Sections>
);

export default NewsSection;