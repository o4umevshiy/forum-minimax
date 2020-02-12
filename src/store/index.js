import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screen : 1,
    list : [
      { index : '01', name : 'Мышление и сознание', text : 'Что такое мысль? Как наш мозг принимает решения?  Неосознаваемые процессы. Что такое сознание? Интерпретатор. Может ли сознание влиять на бессознательную работу мозга? Как устроена память? Как на нее влияет возраст и образ жизни?', status : 0 },
      { index : '02', name : 'Наука', text : 'Чем научное мышление отличается от ненаучного? Критическая проверка гипотез. Как организовать корректный эксперимент?  Научные парадигмы. Как устроена современная наука? Как распознать лженауку? Наиболее распространенные лженаучные идеи и их опровержение.  ', status : 0 },
      { index : '03', name : 'Мозг и нервная система', text : 'Из чего состоит мозг? Отделы мозга и ансамбли нейронов. Коннектом. Как мозг анализирует информацию и управляет организмом? Нейромедиаторы и гормоны. Как устроена нервная система человека в целом? Нейроинтерфейсы и искусственные органы – станут ли люди киборгами?', status : 0 },
      { index : '04', name : 'Интеллект', text : 'Что такое интеллект? Как его измеряют?  Социальный, эмоциональный и другие виды интеллекта. Интеллект у животных. Что такое искусственный интеллект? Как и где он работает? Могут ли у него быть собственные интересы?', status : 0 },
      { index : '05', name : 'Познание и образование', text : 'Что происходит в мозге, когда человек учится? Условные рефлексы. Как происходит накопление знаний и навыков? Чему нужно учить детей в разных возрастах? Непрерывное образование. Педагогические технологии. Как меняется образование в цифровом обществе?', status : 0 },
      { index : '06', name : 'Логика и рациональность', text : 'Зачем нужна логика в науке и в обычной жизни? Доказательства и опровержения. Логические  законы и парадоксы. Что значит мыслить рационально? Когнитивные искажения – как их избежать? Как нерациональное  мышление влияет на экономику?', status : 0 },
      { index : '07', name : 'Фундамент физики', text : 'Основные физические законы и принципы. Как они связаны с понятием симметрии? Фундаментальные константы – почему они именно такие? Антропный принцип. Зависит ли мир от наблюдателя? Врожденные физические знания.', status : 0 },
      { index : '08', name : 'Вселенная', text : 'Как возникла и развивалась Вселенная? Большой взрыв и инфляция Вселенной. Разбегание галактик. Каковы размеры Вселенной? Как эволюционируют звезды? Черные дыры, сверхновые, квазары и другие необычные космические объекты.', status : 0 },
      { index : '09', name : 'Жизнь и смерть', text : 'Что это такое жизнь? Где проходит граница между жизнью и нежизнью? Когда и как появилась жизнь на Земле? Можно ли "зародить" жизнь в лаборатории? Почему и как происходит старение? Насколько можно продлить жизнь? Возможно ли бессмертие?  ', status : 0 },
      { index : '10', name : 'Теория эволюции', text : 'Как трактует эволюционную теорию современная наука? Естественный отбор и генетика. Почему возникает эффект "высшего замысла"? Как теория эволюции работает за пределами биологии?', status : 0 },
      { index : '11', name : 'Гены', text : 'Что такое гены? ДНК и хромосомы. Геном. Как гены передаются и как проявляются? Когда они работают и когда молчат? Что в человеке определяется генами, а что – средой? Прикладная генетика.', status : 0 },
      { index : '12', name : 'Физиология человека', text : 'Как работают кровеносная, пищеварительная, выделительная и другие системы жизнеобеспечения? Как и зачем мы спим? Как устроена иммунная система?  Как она обучается и от чего может разладиться? Физиологические расстройства. ', status : 0 },
      { index : '13', name : 'Информация', text : 'Что такое информация? Как понятие информации связано с фундаментальными понятиями физики? Как передается и перерабатывается информация? Большие данные. Будущее информатики.', status : 0 },
      { index : '14', name : 'Психика', text : 'Что такое психика? Ощущения, чувства, эмоции и другие психические процессы. Где грань между нормой и патологией? Психические расстройства. Стресс. Как влияет психика на физическое состояние и наоборот? ', status : 0 },
      { index : '15', name : 'Изобретения и открытия', text : 'Важнейшие изобретения и открытия – что они дали человечеству? Куда идет научный и технологический прогресс? Выгоды и риски. Как люди совершают изобретения? Внедрение инноваций. Зачем нужна защита изобретений?', status : 0 },
      { index : '16', name : 'Материя', text : 'Как понимает материю современная физика? В каких состояниях  бывает вещество? Как оно связано с энергией? Темная материя и другие формы материи неясной природы. Что может быть «элементарнее» элементарных частиц и «фундаментальнее»  фундаментальных взаимодействий? Появится ли "теория всего"? ', status : 0 },
      { index : '17', name : 'Эволюция человека', text : 'Как обезьяна превратилась в человека? Этапы большого пути. В каких отношениях состоял homo sapiens с другими видами людей? Чем человек отличается от других животных? Эволюционирует ли человек сейчас?', status : 0 },
      { index : '18', name : 'Медицина и здоровье', text : 'Как развивалась медицина? Ее последние достижения. Что будет дальше? Персонализированная медицина. Лекарства – как их создают, тестируют и контролируют качество? Рак, ВИЧ, малярия, другие смертельные болезни – чем они вызваны? Можно ли их победить? ', status : 0 },
      { index : '19', name : 'Время и пространство', text : 'Как современная наука понимает время и пространство? Единство пространства и времени. Почему время течет в одну сторону? Как восприятие деформирует пространство и время? Психологическое и биологическое время. Почему время – деньги? Как мы измеряем время?', status : 0 },
      { index : '20', name : 'Химия жизни', text : 'Из чего состоят и как устроены молекулы жизни – ДНК, РНК, белки? Как они помогают синтезировать друг друга? Какие функции они выполняют в живых организмах? Основные метаболические процессы.', status : 0 },
      { index : '21', name : 'Биотехнологии', text : 'Где применяются и что дают биотехнологии? Редактирование генома. ГМО – так ли это страшно? Что может синтетическая биология? Прогресс биотехнологий и новые этические проблемы.', status : 0 },
      { index : '22', name : 'Организм', text : 'Как устроена клетка – мельчайший живой организм? Как функционируют многоклеточные организмы?  Основные ткани и органы. Как происходит сборка организма из миллиардов клеток? Где закодирован план сборки и кто его реализует?', status : 0 },
      { index : '23', name : 'Квантовый мир', text : 'Странности микромира. Как их объясняет квантовая механика? В чем смысл принципа неопределенности? Что такое фундаментальные частицы? Глюоны, фотоны и другие переносчики базовых взаимодействий. Стандартная модель.', status : 0 },
      { index : '24', name : 'Человек в обществе', text : 'Почему человека называют социальным животным? Социальные инстинкты. Социальные институты – как они влияют на поведение людей? Как возникает власть? Как устроена политическая власть? Какие бывают идеологии? Что их роднит с религиями?', status : 0 },
      { index : '25', name : 'Досягаемый космос', text : 'Где проходят границы солнечной системы? Относительные размеры и особенности Солнца, планет и их спутников. Основные вехи освоения космоса. Как используется космос сейчас? Когда и как будут освоены Луна и Марс? Что дальше?', status : 0 },
      { index : '26', name : 'Общение', text : 'Как человек улавливает смыслы, понимает чувства и намерения других людей? Зеркальные нейроны. Ошибки восприятия. Массовая коммуникация. Как общаются между собой животные и растения? ', status : 0 },
      { index : '27', name : 'Теория относительности', text : 'Теория относительности. В чем смысл специальной и общей теории относительности? Замедление времени и парадокс близнецов. Почему E=mc²? Как гравитация искривляет пространство? Почему нельзя превысить скорость света? Или можно? ', status : 0 },
      { index : '28', name : 'Фундамент математики', text : 'Откуда берутся аксиомы и основные понятия математики? Число, множество, функция. Что важно помнить из элементарной математики? Что умеет высшая математика? Где она применяется?', status : 0 },
      { index : '29', name : 'Культура', text : 'Традиции, знания, технологии, нормы – что еще входит в культуру? Мем как единица культурной информации. Язык и другие знаковые системы. Как культура формирует человека? Многообразие культур.', status : 0 },
      { index : '30', name : 'Мораль', text : 'На чем основана мораль – на рассудке или чувствах? Есть ли мораль у животных? Насколько мораль зависит от генетики и от культуры? Свобода воли. Всегда ли человек должен отвечать за свои поступки? Права человека. Откуда берется понятие о справедливости? ', status : 0 },
      { index : '31', name : 'Атом', text : 'Как устроен атом? Что удерживает протоны в ядре атома? Чем отличаются атомы разных химических элементов? Периодический закон. Ядерные реакции. Как происходит синтез тяжелых элементов в природе и на ускорителях? ', status : 0 },
      { index : '32', name : 'Решения', text : 'Как человек принимает и реализует решения? Сбор информации и оценка альтернатив. Прокрастинация и сила воли. Как находят оптимальные решения в технике, политике, экономике и других областях? Согласование интересов.', status : 0 },
      { index : '33', name : 'Мотивация', text : 'Как возникают мотивы нашего поведения? Иерархия потребностей. Как формируется система ценностей в человеке и в обществе? Как понимается смысл жизни в разных культурах? Самореализация, служение идеалам, стремление к счастью – что еще наполняет жизнь смыслом? ', status : 0 },
    ],
    boxList : [
    ]
  },
  mutations: {
    toggleStatusItem : function (state, index) {
      if( state.list[index].status === 0 && state.boxList.length < 3 ){
        state.list[index].status = 1;
        state.boxList.push(index);
      }
    },
    setScreen : function (state, index) {
      state.screen = parseInt(index);
    },
    clearItemBox : function (state) {
      state.boxList = [];
    }
  },
  actions: {
    changeItem : function ({commit}, index) {
      commit('toggleStatusItem', index);
    },
    changeScreen : function ({commit}, index) {
      commit('setScreen', index);
    },
    clearBox : function ({commit}) {
      commit('clearItemBox');
    }
  },
})
