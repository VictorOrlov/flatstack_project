import React from 'react';
import Sections from '../../molecules/Sections';
import {mooves_list} from '../../molecules/MapForSection';

const MooveSection = () => (
  <Sections title="Фильмы">{mooves_list}</Sections>
);

export default MooveSection;