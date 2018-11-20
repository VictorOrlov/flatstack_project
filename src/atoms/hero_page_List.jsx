import React from 'react';
import starlord from '../img/heroes/starlord.jpg';
import raketa from '../img/heroes/raketa.jpg';
import grut from '../img/heroes/grut.jpg';
import gamora from '../img/heroes/gamora.jpg';
import draks from '../img/heroes/draks.jpg';
import spidy from '../img/heroes/spider.jpg';
import ironman from '../img/heroes/iron.jpg';
import hulk from '../img/heroes/hulk.jpg';
import tor from '../img/heroes/thor.jpg';
import capitan from '../img/heroes/capitan.jpg';
import redhead from '../img/heroes/vdova.jpg';
import ant from '../img/heroes/ant.jpg';
import socol from '../img/heroes/socol.jpg';
import strange from '../img/heroes/dr_srange.jpg';

export const marvelHeroes = [
  {
    id: 'heroMarvel_starlord',
    name: 'Звездный Лорд',
    link: '/heroes/starlord',
    img: starlord,
  }, {
    id: 'heroMarvel_raketa',
    name: 'Ракета',
    link: '/heroes/raketa',
    img: raketa,
  }, {
    id: 'heroMarvel_grut',
    name: 'Грут',
    link: '/heroes/grut',
    img: grut,
  }, {
    id: 'heroMarvel_gamora',
    name: 'Гамора',
    link: '/heroes/gamora',
    img: gamora,
  }, {
    id: 'heroMarvel_draks',
    name: 'Дракс',
    link: '/heroes/draks',
    img: draks,
  }, {
    id: 'heroMarvel_spidy',
    name: 'Человек-Пук',
    link: '/heroes/spidy',
    img: spidy,
  }, {
    id: 'heroMarvel_ironman',
    name: 'Железный-человек',
    link: '/heroes/ironman',
    img: ironman,
  }, {
    id: 'heroMarvel_hulk',
    name: 'Халк',
    link: '/heroes/hulk',
    img: hulk,
  }, {
    id: 'heroMarvel_tor',
    name: 'Тор',
    link: '/heroes/thor',
    img: tor,
  }, {
    id: 'heroMarvel_capitan',
    name: 'Капитан Америка',
    link: '/heroes/capitan',
    img: capitan,
  }, {
    id: 'heroMarvel_redhead',
    name: 'Чёрная Вдова',
    link: '/heroes/vdova',
    img: redhead,
  }, {
    id: 'heroMarvel_ant',
    name: 'Человек-Муравей',
    link: '/heroes/ant',
    img: ant,
  }, {
    id: 'heroMarvel_socol',
    name: 'Соколинный Глаз',
    link: '/heroes/socol',
    img: socol,
  }, {
    id: 'heroMarvel_strange',
    name: 'Доктор Стрэндж',
    link: '/heroes/strange',
    img: strange,
  },
];
const heroes_for_ThisHeroPage = {
  starlord: {
    name: 'Звездный Лорд',
    real_name: 'Питер Джейсон Квилл',
    race: 'Человек',
    height: '189 см',
    weight: '79 кг',
    abilities:
  <ul>
    <li>Умение драться на мечах</li>
    <li>Обширные навыки использования вооружения</li>
    <li>Мастерство рукопашного боя</li>
    <li>Костюм, позволяющий выживать в открытом космосе</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Питер Квилл — космический авантюрист, который живет
          бесконечными приключениями. Лидер команды «Стражи Галактики».

      </strong>

    </p>
    <p>
Питер Квилл родом с Земли, был воспитан матерью, которая
          умерла, когда он был еще ребенком. Личность отца неизвестна.
          Маленький Питер был похищен бандой космических пиратов под
          предводительством Йонду Удонта. Питер вырос среди них и сам
          стал бандитом, взяв себе псевдоним Звёздный Лорд.

    </p>
    <p>
Во время очередной авантюры Звёздный Лорд украл загадочную
          Сферу, которая, как позже станет известно, является одним из
          шести Камней Бесконечности. В погоне за Сферой Питер Квилл
          опередил людей Ронана, правой руки безумного титана Таноса,
          чем здорово разозлил последнего. Ронан отправил Гамору,
          приёмную дочь Таноса, вернуть Сферу, но ее планам помешала
          парочка охотников за головами — Ракета и Грут. В результате
          потасовки все четверо были арестованы. В тюрьме герои решили
          ненадолго объединиться, чтобы продать Сферу, но сделка
          сорвалась, и артефакт оказался в руках Ронана. Понимая, что
          мир во вселенной теперь под угрозой, Звёздный Лорд предложил
          объединиться против Ронана, сформировав команду под названием
          «Стражи Галактики».

    </p>
    <p>
У Звёздного Лорда есть разные приспособления для работы в
          космосе. Так, например, его ботинки позволяют ему летать
          даже в открытом космосе, а шлем оберегает от всевозможных
          повреждений и даёт возможность дышать в вакууме. Питер
          обладает прекрасной физической формой, метко стреляет,
          искусно владеет мечом, умеет драться врукопашную — при этом
          он дал клятву не забирать чужую жизнь, пока есть другой выход.

    </p>
    <p>
Харизма и уникальное чувство юмора Питера могут как спасти
          ему жизнь, так и привести к новым неприятностям. Главное
          сокровище Питера — кассетный плеер, последний подарок его
          матери. Ради него Звёздный Лорд готов ввязаться в самые
          опасные приключения.

    </p>
  </div>,
    img: starlord,
  },
  raketa: {
    name: 'Ракета',
    real_name: 'Объект 89P13',
    race: 'генетически усовершенствованный енот',
    height: '122 см',
    weight: '25 кг',
    abilities:
  <ul>
    <li>Боевые навыки</li>
    <li>Глубокие познания в инженерии</li>
    <li>Владение всеми видами оружия</li>
    <li>Острый нюх и зрение</li>
    <li>Навыки стратега и тактика</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
За плечами кибернетически усовершенствованного
          енота Ракеты — отчаянные космические приключения и
          многочисленные нарушения закона. С ним лучше не шутить:
          Ракета очень умён, может сделать бомбу из ничего и очень
          не любит, когда над ним смеются.

      </strong>

    </p>
    <p>
Объект 89P13, который называет себя Ракетой, — результат
          эксперимента по генной модификации животных. По словам
          самого Ракеты, в лаборатории его разбирали и собирали
          заново много раз, и это сформировало тяжёлый характер и
          вспыльчивый нрав героя. По данным Корпуса Новы личное
          дело Ракеты насчитывает 13 фактов хищения, 23 факта
          побега из-под стражи, 7 случаев наёмнической деятельности
          и 15 поджогов.

    </p>
    <p>
Во время своих путешествий Ракета встретил Грута,
          который стал его другом и напарником. Они хотели сдать
          Питера Квилла за вознаграждение, когда их планам помешала
          Гамора. Все четверо оказались в тюрьме, где решили
          объединиться для продажи таинственной Сферы, украденной
          Питером. Ракета успешно организовал побег, но их сделка
          провалилась, а артефактом завладел жестокий и опасный
          Ронан. Тогда герои решили объединиться, чтобы противостоять
          ему, сформировав команду под названием «Стражи Галактики».

    </p>
    <p>
Ракета обладает всеми особенностями обычного енота,
          такими как острый нюх и зрение. В ходе эксперимента Ракета
          получил модифицированный скелет, который позволяет ему
          передвигаться и на двух, и на четырёх лапах.

    </p>
    <p>
Ракета обладает острым умом, находчивостью и блестящими
          навыками тактика и стратега. Он необычайно силен, вынослив,
          и очень любит пушки размером больше, чем он сам. Ракета —
          прекрасный пилот и может собирать мощные гранатомёты и атомные
          бомбы из ничего.

    </p>
    <p>
У Ракеты сложный характер, он вспыльчив, не всегда справляется
          с гневом и совершает необдуманные поступки, которые часто
          создают неприятности для всей команды.

    </p>
  </div>,
    img: raketa,
  },
  grut: {
    name: 'Грут',
    real_name: 'Грут',
    race: 'Инопланетянин',
    height: 'Неизвестен (может изменяться)',
    weight: 'Неизвестен (может изменяться)',
    abilities:
  <ul>
    <li>Невероятная физическая сила</li>
    <li>Способность к регенерации</li>
    <li>Способность менять размеры своего тела</li>
    <li>Телекинетические способности</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Похожий на дерево пришелец Грут обладает невероятной
          физической силой, добрым сердцем и одной-единственной фразой в
          лексиконе.

      </strong>

    </p>
    <p>
Грут — древоподобный пришелец с планеты Икс, криминальное
          прошлое которого насчитывает 3 факта причинения тяжких телесных
          повреждений, 15 случаев побега из-под ареста и 3 факта
          наёмнической деятельности.

    </p>
    <p>
Грут долгое время был напарником Ракеты в охоте за головами,
          но, когда они попытались схватить Питера Квилла на Ксандаре,
          их планы нарушила Гамора, и вся четвёрка была арестована
          Корпусом Нова. В тюрьме герои решили объединиться, чтобы
          заработать на продаже таинственной Сферы, украденной Квиллом
          с планеты Мораг. С помощью заключенного по имени Дракс
          Разрушитель и гениального плана, продуманного Ракетой, им
          удалось сбежать из тюрьмы.

    </p>
    <p>
Сделка со Сферой провалилась, и артефактом завладел опасный
          воин Ронан, решивший уничтожить Галактику. Тогда герои решили
          объединиться ради спасения мира, образовав команду «Стражи Галактики».
          В разгаре схватки с Ронаном Грут жертвует собой, чтобы спасти
          товарищей.

    </p>
    <p>
Благодаря способности к регенерации Грут может менять
          собственные размеры и пропорции, а также восстанавливать своё
          тело даже из маленькой ветки. У Грута есть склонность к
          телекинетическим способностям, которые он может использовать
          только на определённых планетах с растительными формами жизни.

    </p>
    <p>
В лексиконе Грута есть только фраза «Я есть Грут», под
          которой он может подразумевать все, что угодно. Несмотря на
          это, Ракета прекрасно понимает все, что хочет сказать его
          напарник.

    </p>
  </div>,
    img: grut,
  },
  gamora: {
    name: 'Гамора',
    real_name: 'Гамора',
    race: 'Зен-Хобери',
    height: '183 см',
    weight: '77 кг',
    abilities:
  <ul>
    <li>Мастер боевых искусств</li>
    <li>Опытный атлет</li>
    <li>Улучшенная физическая сила</li>
    <li>Мастер вооружения</li>
    <li>Гимнастка</li>
    <li>Улучшенное зрение</li>
  </ul>,
    short_story:
  <div>
    <p>
Последняя выжившая представительница расы Зен-Хобери,
          Гамора была удочерена безумным титаном Таносом и всю
          жизнь готовилась стать убийцей. Не желая способствовать
          злу, она предала своего приёмного отца и теперь использует
          свои способности, чтобы помогать слабым вместе с командой
          «Стражи Галактики».

    </p>
    <p>
Когда Звёздный Лорд украл один из Камней Бесконечности,
          могущественную Сферу, опередив Ронана, одного из самых
          опасных подручных Таноса, Гамора вызвалась вернуть её. При
          попытке перехватить артефакт, она попала в потасовку с
          участием Грута, Ракеты и самого Звёздного Лорда, из-за которой
          все четверо были арестованы Корпусом Нова.

    </p>
    <p>
Многие заключённые в тюрьме угрожали ей расправой за грехи
          Ронана и Таноса, особенно Дракс Разрушитель, но Гамора смогла
          постоять за себя. Она объединилась со Звёздным Лордом, Драксом,
          Ракетой и Грутом, чтобы сбежать из тюрьмы и продать Сферу.
          Когда сделка сорвалась и артефакт оказался в руках Ронана,
          Гамора присоединилась к команде «Стражей Галактики», чтобы
          вернуть камень и передать его во имя всеобщей безопасности
          на хранение Корпусу Нова.

    </p>
    <p>
Гамора — настоящий эксперт в контактном бою, прекрасная
          гимнастка, владеющая всеми видами оружия. Она по праву
          заслужила звание самой опасной женщины во вселенной. Как
          представительница расы Зен-Хобери, Гамора намного сильнее и
          выносливее человека.

    </p>
  </div>,
    img: gamora,
  },
  draks: {
    name: 'Дракс',
    real_name: 'неизвестно',
    race: 'Инопланетянин',
    height: '201 см',
    weight: '308 кг',
    abilities:
  <ul>
    <li>Сверхчеловеческая сила</li>
    <li>Владение холодным оружием</li>
    <li>Ускоренная регенерация</li>
    <li>Навыки ведения рукопашного боя</li>
  </ul>,
    short_story:
  <div>
    <p>
Когда Ронан по приказу безумного титана Таноса хладнокровно
          убил его жену и дочь, Дракс поклялся отомстить за свою семью.
          Он успел заработать себе репутацию вселенского маньяка и
          прозвище Разрушитель, пока не был арестован Корпусом Нова.
          В тюрьме строгого режима Килн он прибился к группе заключённых,
          затеявших побег. Среди них была Гамора, приёмная дочь Таноса,
          и Дракс планировал, что она выведет его на Ронана.

    </p>
    <p>
Когда Дракс, наконец, встретился с Ронаном один на один, он
          проиграл ему и чуть не погиб. Однако это поражение помогло ему
          пересмотреть свои приоритеты: отодвинув личную месть на второй
          план, он решил присоединиться к «Стражам Галактики», чтобы
          защитить от Ронана вселенную.

    </p>
    <p>
Дракс — первоклассный боец, обладающий огромной силой и
          яростью в бою. Грамотно используя свои боевые навыки, Дракс
          может справиться с любым противником и преодолеть любое
          препятствие. В бою он отдаёт предпочтение холодному оружию,
          особенно ножам. Выносливость, превосходящая человеческую, и
          ускоренное восстановление клеток делают его серьезным противником
          в любой схватке.

    </p>
    <p>
Дракс неоднократно показывал свою неспособность понимать метафоры
          и символизм в речи. Несмотря на это, он внимательно относится к
          своим друзьям, помогая им справляться с трудностями.

    </p>
  </div>,
    img: draks,
  },
  spidy: {
    name: 'Человек-Пук',
    real_name: 'Питер Бенджамин Паркер',
    race: 'Человек',
    height: '183 см',
    weight: '71 кг',
    abilities:
  <ul>
    <li>Суперсила</li>
    <li>Паучье чутье</li>
    <li>Веб-шутеры</li>
    <li>Гениальный интеллект</li>
    <li>Суперловкость</li>
    <li>Сверхбыстрые рефлексы</li>
    <li>Повышенная регенерация</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Когда обычного подростка Питера Паркера укусил
          радиоактивный паук, его жизнь полностью изменилась. Теперь
          он борется с преступностью, скрываясь под маской
          Человека-Паука.

      </strong>

    </p>
    <p>
Ещё ребёнком Питер Паркер лишился родителей, а тётя Мэй и
          дядя Бен вырастили его как родного сына. Мальчик хорошо
          учился и добился больших успехов в естественных науках,
          из-за чего одноклассники не воспринимали его всерьёз, считая
          тихоней и зубрилой. На одной из научных выставок Питера
          укусил паук, заряженный мощной дозой радиации. Укус повлиял
          на генетическую структуру организма Питера, наделив парня
          суперсилой и уникальными способностями.

    </p>
    <p>
Желая заработать на своих новых силах, Питер сделал себе
          уникальный костюм и начал участвовать в боях без правил.
          Возвращаясь после очередной схватки, Питер отказался остановить
          грабителя, посчитав, что этим делом должна заниматься полиция.
          Позже этот же преступник наткнулся на дядю Бена и застрелил его,
          когда тот попытался дать ему отпор. Тогда Питер поклялся
          использовать свои силы для борьбы с преступностью, всегда держа в
          памяти слова дяди: «С великой силой приходит и великая
          ответственность»

    </p>
    <p>
У Человека-Паука множество опасных врагов, от которых он много
          раз защищал невинных жителей Нью-Йорка. Однако не все относятся к
          герою в маске положительно. Главный редактор газеты «Daily Bugle»
          Джей Джона Джеймсон в каждом выпуске пытался очернить героя,
          обвиняя во всевозможных преступлениях против общества. Питер Паркер
          решил использовать это в своих целях, устроившись в газету
          внештатным фотографом и поставляя на регулярной основе снимки
          Человека-Паука.

    </p>
    <p>
Человек-Паук обладает множеством уникальных способностей и является
          одним из самых сильных супергероев. Он может передвигаться по стенам
          и потолку, легко поднять предмет весом в десять тонн. Комбинация из
          акробатических трюков и искусственной паутины позволяет ему быстро
          двигаться, а сверхбыстрые рефлексы и «паучье» чутьё, помогают ему
          избегать ранений и предугадывать действия противника.

    </p>
    <p>
Ещё до укуса паука Питер Паркер был одним из самых умных людей на
          планете, его IQ близок к гениальности. Он прекрасно разбирается в
          химии, физике, биологии и инженерии. Благодаря обширным познаниям в
          инженерии, Питер смог самостоятельно усовершенствовать свой костюм
          веб-шутерами с сверхпрочной искусственной паутиной.

    </p>
  </div>,
    img: spidy,
  },
  ironman: {
    name: 'Железный-человек',
    real_name: 'Энтони Эдвард «Тони» Старк',
    race: 'Человек',
    height: '185 см (без брони), 198 см (в броне)',
    weight: '90 кг (без брони), 193 кг (в броне)',
    abilities:
  <ul>
    <li>Гениальный интеллект</li>
    <li>Выдающийся изобретатель и инженер</li>
    <li>Мастер рукопашного боя</li>
    <li>Обширные знания во многих областях науки</li>
    <li>Кибернетическая связь с бронекостюмом</li>
    <li>Большие финансовые возможности</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Эксцентричный гений, миллионер, дамский угодник и
          филантроп Тони Старк также является супергероем в броне,
          известным как Железный Человек.

      </strong>

    </p>
    <p>
Тони Старк – сын богатого промышленника и изобретателя
          Говарда Старка. Его родители погибли в автокатастрофе,
          когда Тони был 21 год. Унаследовав компанию отца «Старк Индастриз»,
          он вывел ее в лидеры по производству оружия. Когда Тони Старк
          приехал в Афганистан, чтобы лично присутствовать на тестовых
          испытаниях, его отряд подвергся атаке террористов, и раненый
          шрапнелью миллиардер попал в плен к оружейному барону Вонг-Чу

    </p>
    <p>
Глава террористов обещал оставить Старка в живых, если тот
          изготовит для него оружие массового поражения. Тони согласился
          на сделку в надежде выиграть время и получить доступ к
          необходимым материалам. В работе ему помогал другой пленный
          учёный, известный азиатский физик и лауреат Нобелевской премии
          профессор Хо Инсен, чьи работы вдохновляли Старка в колледже.

    </p>
    <p>
Вместе они создали боевой костюм с генератором магнитного поля,
          который защищал сердце раненого Старка. С помощью костюма Тони
          удалось сбежать из плена, в то время как Хо Инсен пожертвовал
          собой, выиграв для него время. Вернувшись домой, Тони Старк
          занялся усовершенствованием костюма и магнитного генератора,
          от которого полностью зависела его жизнь.

    </p>
    <p>
По этическим соображениям Тони прекратил заниматься производством
          оружия и сосредоточил деятельность компании «Старк Индастриз»
          на создании новых технологий, которые служат на благо человечества.
          Он создал множество благотворительных фондов, и, чувствуя все
          большую ответственность перед миром, решил раскрыть тайну своей
          личности и признаться, что он и есть Железный Человек.

    </p>
    <p>
Тони Старк прекрасно знает себе цену: он одновременно является и
          спонсором Мстителей, и одним из важнейших участников команды. Он
          кажется самовлюблённым и постоянно нарушает правила, но он делает
          это ради достижения своей главной цели – спасения жизни людей.

    </p>
    <p>
Созданный Тони Старком высокотехнологичный костюм Железного
          Человека многократно увеличивает человеческие характеристики. В
          костюме Железного Человека Тони Старк способен поднимать до 90 тонн,
          броня защищает его от ножевых и пулевых ранений. Встроенное
          вооружение костюма состоит из многочисленных пушек, лазеров и ракет,
          а репульсоры в ботинках и перчатках позволяют Железному Человеку
          летать. В костюм также встроена встроена операционная система,
          напоминающая искусственный интеллект, с помощью которого, Тони может
          связаться со спутниками или штабом Мстителей.

    </p>
    <p>
Тони Старк разработал множество моделей своего костюма для разных
          целей. Так, например, один из них полностью предназначен для
          стелс-операций, а другой позволяет передвигаться в открытом космосе.

    </p>
  </div>,
    img: ironman,
  },
  hulk: {
    name: 'Халк',
    real_name: 'Брюс Бэннер',
    race: 'Человек',
    height: '179 см (214-244 см в виде Халка)',
    weight: '58 кг (472-635 кг в виде Халка)',
    abilities:
  <ul>
    <li>Сверхразвитая мускулатура</li>
    <li>Гениальный интеллект</li>
    <li>Скорость и прочность</li>
    <li>Адаптация к различным средам</li>
    <li>Нечеловеческая выносливость</li>
    <li>Сверхчеловеческая сила</li>
    <li>Регенеративные способности</li>
  </ul>,
    short_story:
  <div>
    <p>
Спасая жизнь подростку, доктор Брюс Беннер оказался в эпицентре
          взрыва гамма-бомбы, после которого он обнаружил у себя необычные
          способности. Стоит кому-то разозлить или спровоцировать его, как
          он теряет контроль над собой и превращается в зелёного монстра Халка.

    </p>
    <p>
Выдающиеся интеллектуальные способности Брюса начали проявляться в
          раннем возрасте и уже тогда заинтересовали военных. Получив докторскую
          степень по ядерной физике, доктор Бэннер приступил к работе на базе
          ядерных исследований Министерства Обороны США в Нью-Мехико. Во время
          первого испытания разработанной им гамма-бомбы Брюс Бэннер бросился
          на помощь подростку, пробравшемуся на экспериментальный полигон.
          Брюс успел откинуть подростка в защитную траншею, но сам оказался
          в зоне поражения и получил огромную дозу гамма-радиации.

    </p>
    <p>
По неизвестной причине, скрытой в генах Бэннера, взрыв не
          причинил ему вреда, но спровоцировал в его организме изменения,
          из-за которых учёный начал превращаться в существо, обладающее
          сверхчеловеческой силой, — в огромного зелёного монстра Халка.
          Сначала Халк «просыпался» в теле Брюса каждую ночь, но со временем
          трансформации стали напрямую зависеть от всплеска адреналина в
          крови Брюса, вызванного гневом.

    </p>
    <p>
Халк обладает безграничной мощью и выносливостью, которые
          напрямую зависят от его эмоционального состояния, — когда
          Халк злится, он становится сильнее. Благодаря сверхразвитой
          мускулатуре он может преодолевать огромные расстояния за один
          прыжок. Его тело способно выдержать любую атаку: Халку не страшны
          высокие температуры, ядерные взрывы и огнестрельное оружие. Он
          даже способен выжить в абсолютном вакууме. Его разум невозможно
          контролировать, а ткани организма восстанавливаются за считанные
          секунды. Это делает Халка одним из самых сильных существ на планете.

    </p>
    <p>
Брюс Бэннер не способен полностью контролировать Халка, поэтому,
          опасаясь вреда, который может принести его альтер-эго, он старается
          вести уединённый образ жизни, избегая тех, кто может в своих интересах
          воспользоваться его силой. Однако, когда он нужен миру, он приходит на
          помощь и как ученый, и в качестве Халка, поэтому он играет важную роль
          в команде Мстителей.

    </p>
    <p>
В отличие от своего альтер-эго, доктор Брюс Бэннер — гениальный учёный,
          чей интеллект невозможно измерить стандартными тестами. Он очень
          застенчив, замкнут в себе и не умеет строить отношения с людьми.
          На его характер очень сильно повлияла детская травма: его отец-алкоголик
          безумно ревновал жену к собственному сыну и жестоко избивал его. Во
          время очередной вспышки ярости он убил свою жену, после чего был
          отправлен в психиатрическую лечебницу. Маленького Брюса забрала к
          себе его тётя Сьюзан, которая окружила мальчика любовью и заботой и
          воспитала, как родного сына.

    </p>
  </div>,
    img: hulk,
  },
  thor: {
    name: 'Тор',
    real_name: 'Тор сын Одина (Одинсон)',
    race: 'Асгардец',
    height: '201 см',
    weight: '290 кг',
    abilities:
  <ul>
    <li>Нечеловеческая сила</li>
    <li>Способность летать</li>
    <li>Управление погодой</li>
    <li>Повышенная выносливость</li>
    <li>Волшебный молот Мьёльнир</li>
    <li>Удлинённый период жизни</li>
    <li>Создание молний</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Могущественный бог грома Тор, достойный носить величайшее
          оружие во вселенной – волшебный молот Мьёльнир — никогда не
          перестаёт сражаться за правое дело и защищать любимую Землю.

      </strong>

    </p>
    <p>
Тор — дитя союза Одина, владыки Асгарда, и Геи, богини
          Мидгарда (Земли). Тор появился на свет в одной из норвежских
          пещер, откуда Один забрал его на воспитание в Асгард. Тор
          провёл детство со своим приёмным братом Локи, который постоянно
          ему завидовал и, в конце концов, вздумал убить брата. Так
          началась их многовековая вражда.

    </p>
    <p>
Когда Тору исполнилось восемь, Один сделал для него Мьёльнир —
          молот, наделённый невероятной магической силой. Однако право
          обладать им Тор должен был заслужить, и только спустя годы упорных
          тренировок и славных подвигов он доказал, что достоин этой великой
          чести и был провозглашён великим воином Асгарда.

    </p>
    <p>
Почти безграничные возможности не могли не повлиять на характер
          Тора. Его высокомерие и упрямство чуть не стали причиной войны с
          ледяными великанами, которая подвергла бы Асгард величайшей опасности.
          В наказание за этот проступок Один изгнал сына на Землю, лишив его
          божественной силы.

    </p>
    <p>
Когда Тор осознал свои ошибки и в очередной раз доказал своё право
          носить Мьёльнир, Один разрешил ему вернуться домой. Однако Тор решил
          остаться на Земле, потому что чувствовал невероятную тягу к людям.
          Теперь, заполучив «двойное гражданство», Тор помогает людям на Земле и
          народу Асгарда, а также является одним из самых могущественных
          участников команды Мстителей.

    </p>
    <p>
Сын двух могущественных богов, Тор обладает невероятной силой и
          выносливостью даже в сравнении с другими жителями Асгарда. Кроме
          того, Тор может управлять погодой и вызывать молнию. Мьёльнир только
          усиливает его возможности, делая его непобедимым противником. Молот
          всегда возвращается к Тору, враг не может им завладеть, ведь поднять
          Мьёльнир может только тот, кто достоин править Асгардом.

    </p>
  </div>,
    img: tor,
  },
  capitan: {
    name: 'Капитан Америка',
    real_name: 'Стивен Роджерс',
    race: 'Человек',
    height: '187 см',
    weight: '108 кг',
    abilities:
  <ul>
    <li>Усиленные физические характеристики</li>
    <li>Навыки рукопашного боя</li>
    <li>Стратегическое мышление</li>
    <li>Эксперт по военному делу</li>
    <li>Превосходный атлет</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Герой вне времени Стив Роджерс борется за свободу
          в качестве непоколебимого Капитана Америка.

      </strong>

    </p>
    <p>
Во время Второй мировой войны юный Стивен Роджерс согласился
          на участие в сверхсекретной экспериментальной программе по
          созданию суперсолдат, которая превратила его в непобедимого
          Капитана Америка – живой символ свободы. Проведя много лет
          замороженным во льдах, легендарный герой вновь очнулся, чтобы
          продолжить битву за справедливость.

    </p>
    <p>
Стивен Роджерс с детства отличался хрупким телосложением и
          слабым здоровьем, поэтому его упорные попытки попасть в армию
          в начале войны не увенчались успехом. Однако они не остались
          незамеченными, и Роджерс стал участником секретной операции
          «Возрождение» – проекта по созданию суперсолдат с помощью сыворотки,
          которая доводит физические способности человека до пика.
      {' '}

    </p>
    <p>
Профессор Авраам Эрскин, разработавший сыворотку, увидел в
          маленьком худом Стиве исключительные качества – отвагу, чувство
          долга, способность к самопожертвованию, и выбрал его для
          первого эксперимента. После инъекций сыворотки Стив Роджерс
          подвергся воздействию вита-лучей, которые активировали и
          стабилизировали вещество в его организме. Во время эксперимента
          в лабораторию проник нацистский агент, который убил профессора
          Эрскина, а вместе с ним и возможность воссоздать формулу
          сыворотки.

    </p>
    <p>
Стив Роджерс стал агентом контрразведки и символом борьбы против
          нацистской Германии. Он получил красно-бело-синий костюм,
          созданный по его собственным эскизам, и кодовое имя – Капитан
          Америка.

    </p>
    <p>
Стив и его верные союзники спасли множество жизней, обезвредили
          немало злодеев и сумели изменить ход войны. Во время своей
          последней военной миссии Капитан Америка пропал в ледяных водах
          Северной Атлантики и после долгих безуспешных поисков был
          объявлен погибшим.

    </p>
    <p>
Тело Стива Роджерса было обнаружено во льдах спустя много лет
          –герой все это время находился в состоянии анабиоза. Капитан
          Америка чувствует себя потерянным в современном мире, но его сила
          и лидерские качества помогают ему быть живой легендой, символом
          чести, доблести и мужества и стоять во главе команды могучих
          Мстителей.

    </p>
    <p>
Сыворотка многократно усилила его физические характеристики и
          личные качества, наделив Капитана Америка развитым интеллектом,
          силой, ловкостью и выносливостью. Его единственным оружием стал
          щит в форме диска, сделанный из сверхпрочного сплава стали и
          вибраниума. Капитан Америка отличается непоколебимым характером
          и силой духа.

    </p>
  </div>,
    img: capitan,
  },
  vdova: {
    name: 'Чёрная Вдова',
    real_name: 'Наталья Альяновна Романова',
    race: 'Человек',
    height: '170 см',
    weight: '60 кг',
    abilities:
  <ul>
    <li>Владение боевыми искусствами</li>
    <li>Замедленное старение</li>
    <li>Усиленная иммунная защита</li>
    <li>Владение навыками шпионажа</li>
    <li>Превосходная спортивная форма</li>
    <li>Улучшенные физические характеристики</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Наташа Романофф, известная также как Черная Вдова, —
          эксперт в шпионаже и боевых искусствах. Наташа в течение долгого
          времени выполняла приказы КГБ, но позже стала одним из лучших
          агентов службы Щ.И.Т. и присоединилась к команде Мстителей.

      </strong>

    </p>
    <p>
Данных о прошлом Наташи Романовой не так много. Известно,
          что она рано осталась без дома и семьи, и в совсем юном
          возрасте вызвала интерес у советской разведки, где начала
          обучаться технике шпионажа. Наташа участвовала в советской
          правительственной программе «Черная Вдова», главной миссией
          которой была подготовка элитной команды женщин-агентов к
          внедрению во вражеские организации по всему миру.

    </p>
    <p>
Романова обучалась у Зимнего Солдата и подверглась ряду
          биотехнологических процедур, которые замедлили старение,
          укрепили иммунную защиту и улучшили ее физические характеристики.
          Прикрытием Наташи служила балетная школа, а позже замужество с
          лётчиком-испытателем Алексеем Шостаковым.

    </p>
    <p>
Чёрная Вдова — одна из основателей команды Мстители. Желая
          загладить грехи своего прошлого, она решила использовать свои
          уникальные способности, чтобы защищать мир. Ее костюм оснащен
          браслетами, способными выпускать мощные высокочастотные
          электрические разряды, которые могут оглушить даже суперчеловека.
          Многочисленные тренировки, ловкость, выносливость, навыки шпионажа
          и знание боевых искусств позволяют ей работать в команде с
          Капитаном Америка и Железным Человеком.

    </p>
  </div>,
    img: redhead,
  },
  ant: {
    name: 'Человек-Муравей',
    real_name: 'Скотт Эдвард Харрис Лэнг',
    race: 'Человек',
    height: '183 см (может уменьшаться)',
    weight: '86 кг',
    abilities:
  <ul>
    <li>Специалист по электронике</li>
    <li>Уменьшение размеров тела (в костюме)</li>
    <li>Невероятная сила (в костюме)</li>
    <li>Мастер рукопашного боя</li>
    <li>Контроль над муравьями (в костюме)</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Благодаря костюму, позволяющему ему менять размеры
          собственного тела  и при этом становиться сильнее, Скотт
          Лэнг стал супергероем, известным как Человек-Муравей.

      </strong>

    </p>
    <p>
Подающий надежды инженер и специалист в области электроники,
          Скотт Лэнг был осуждён за кражу и провел некоторое время в
          тюрьме. Освободившись, он решил завязать с криминальным
          прошлым ради своей дочери Кэсси, но из-за судимости не смог
          найти работу и был вынужден вернуться к воровству. По
          наводке друзей он вторгся в дом гениального инженера Хэнка
          Пима, но нашёл там только спроектированный учёным костюм
          Человека-Муравья, который позволяет его владельцу уменьшаться
          в размерах.

    </p>
    <p>
Хэнк Пим обучил Скотта использовать костюм, чтобы обезвредить
          Даррена Кросса, который воспроизвёл технологию Пима по уменьшению
          материи и создал прототип аналогичного боевого костюма, который
          получил название Жёлтый Шершень. Скотт успешно справился со
          своей задачей, победив Кросса и уничтожив все его исследования,
          и, став настоящим героем, продолжил использовать костюм
          Человека-Муравья в благих целях, в том числе сражаясь в рядах
          команды «Мстители».
      {' '}

    </p>
    <p>
Костюм Человека-Муравья позволяет Скотту уменьшаться в размерах,
          одновременно увеличивая силу в обратной пропорции. Специальный шлем
          обеспечивает ему телепатическую связь с муравьями и позволяет
          контролировать муравьиное воинство. Кроме того, Скотт обучился
          навыкам рукопашного боя у дочери Хэнка, Хоуп ван Дайн, которая
          впоследствии стала его напарницей, известной как Оса.

    </p>
  </div>,
    img: ant,
  },
  socol: {
    name: 'Соколинный Глаз',
    real_name: 'Клинтон Френсис Бартон',
    race: 'Человек',
    height: '180 см',
    weight: '100 кг',
    abilities:
  <ul>
    <li>Феноменальная меткость</li>
    <li>Арсенал из стрел с различными эффектами</li>
    <li>Навыки в акробатике, воздушной гимнастике и рукопашному бою</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Благодаря своей исключительной реакции, координации
          и меткости Соколиный Глаз — лучший стрелок и лучник, известный
          человечеству.

      </strong>

    </p>
    <p>
Бартон с четырнадцати лет путешествовал с бродячим цирком,
          где его природную меткость заметили звезды шоу Фехтовальщик и
          Трикшот. Они помогли юному Бартону освоить акробатику, стрельбу
          из лука и научили метать ножи. Когда Бартон выяснил, что оба его
          наставника — преступники, он покинул цирк и долгое время выступал
          на ярмарках и карнавалах под псевдонимом Соколиный Глаз.

    </p>
    <p>
Подвиги Железного Человека вдохновили Бартона надеть костюм и
          использовать свою природную меткость для борьбы с преступностью.
          В первой же попытке предотвратить ограбление Клинтона по ошибке
          приняли за вора, и ему пришлось драться со своим кумиром. Позже
          он встретил Чёрную Вдову, которая тогда работала на КГБ и
          настроила Бартона против Тони Старка.

    </p>
    <p>
Бартон вскоре пожалел об этом и, чтобы загладить вину, выдвинул
          свою кандидатуру в команду Мстителей. Проявив себя, Соколиный
          Глаз стал постоянным членом команды и работал с ними на протяжении
          многих лет, делая лишь короткие перерывы.

    </p>
    <p>
Соколиный Глаз — непревзойденный мастер стрельбы из лука, чья
          феноменальная меткость сравнима с суперспособностями других
          Мстителей. Он владеет арсеналом изготовленных на заказ луков и
          специальных стрел с различными эффектами. Соколиный Глаз имеет
          великолепную физическую форму и обладает навыками акробатики,
          воздушной гимнастики и рукопашного боя.

    </p>
    <p>
Таких впечатляющих результатов Соколиный Глаз добился ежедневными
          упорными тренировками, которые заменили ему сверхчеловеческие
          способности. Однако Бартон периодически заимствовал формулу роста
          Хэнка Пима и помогал Мстителям как Голиаф.

    </p>
  </div>,
    img: socol,
  },
  strange: {
    name: 'Доктор Стрэндж',
    real_name: 'Стивен Винсент Стрэндж',
    race: 'Человек',
    height: '189 см',
    weight: '82 кг',
    abilities:
  <ul>
    <li>Владение магией</li>
    <li>Связь с параллельными измерениями</li>
    <li>Владение боевыми искусствами</li>
    <li>Умение использовать магические артефакты</li>
    <li>Обширные знания нейрохирургии</li>
  </ul>,
    short_story:
  <div>
    <p>
      <strong>
Когда страшная автокатастрофа поставила крест
          на карьере гениального нейрохирурга Стивена Стрэнджа, он
          обратился к мистическим практикам, которые навсегда
          изменили его жизнь.

      </strong>

    </p>
    <p>
Попав в страшную автомобильную аварию, успешный нейрохирург
          Стивен Стрэндж повредил руки и потерял возможность оперировать.
          Традиционная медицина оказалась бессильна, и после долгих
          поисков и скитаний Стрэндж узнал о таинственном городе в
          Тибете, куда направился в поисках исцеления, и где обрёл
          учителя. Древняя – мастер магических искусств, открыла для
          Стрэнджа путь в мультивселенную и пространства, простирающиеся
          за пределами нашего измерения.

    </p>
    <p>
Благодаря Древней, Стивен Стрэндж становится могущественным
          магом, учится черпать свою силу от мистических сущностей других
          измерений и использовать их энергию для создания заклятий. В
          распоряжении Стрэнджа множество мистических артефактов, например,
          Плащ Левитации, который дает ему возможность летать, Глаз Агамотто –
          амулет, в сердце которого один из Камней Бесконечности, способный
          управлять временем, и Книги Вишанти – сборник, в котором содержатся
          многочисленные магические заклинания и процедуры. Доктор Стрэндж
          также владеет боевыми навыками, может сражаться врукопашную и
          умеет обращаться с холодным оружием.

    </p>
    <p>
После гибели своего учителя Доктор Стрэндж становится Верховным
          Магом, главная задача которого – защита человечества.

    </p>
  </div>,
    img: strange,
  },
};

export default heroes_for_ThisHeroPage;
