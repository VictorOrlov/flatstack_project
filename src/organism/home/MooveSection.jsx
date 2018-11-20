import React from 'react';
import Sections from '../../molecules/Sections';
import { mooveList } from '../../molecules/MapForSection';

const MooveSection = () => (
  <Sections title="Фильмы">{mooveList}</Sections>
);

export default MooveSection;
