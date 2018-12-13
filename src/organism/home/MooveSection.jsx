import React from 'react';
import Sections from '../../molecules/Sections';
import BtnParall from '../../atoms/BtnParall';
import { mooveList } from '../../molecules/MapForSection';

const MooveSection = () => (
  <span>
    <Sections title="Фильмы (не кликабельно)">{mooveList}</Sections>
    <div className="row justify-content-center m-0 d-flex d-md-none">
      <div className="col-10">
        <hr />
        <h3>Фильмы</h3>
        <p>
          Кинематографическая вселенная Marvel занимает первое место
          в списке самых прибыльных серий фильмов с общими сборами более
          $17,5 млрд, а картины «Мстители: Война бесконечности», «Мстители»,
          «Мстители: Эра Альтрона» и «Чёрная Пантера» занимают четвёртое,
          шестое, восьмое и девятое места в списке самых кассовых фильмов за
          всю историю кинематографа.
        </p>
        <p>
          Здесь вы можете перейти к полному списку любимой киновселенной :
          <br />
          <BtnParall link="/films">
            Йа переход
          </BtnParall>
        </p>
      </div>
    </div>
  </span>
);

export default MooveSection;
