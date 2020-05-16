const basket = [];
const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Poky',
    description: 'Red top with white dots',
    imgUrl: 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Pixi',
    description: 'Yellow with floating fairy dust',
    imgUrl: 'https://images.unsplash.com/photo-1577186606264-8bc8d1fdf9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Pacito',
    description: 'Small whitehead close forest floor',
    imgUrl: 'https://images.unsplash.com/photo-1576748870080-5ec5260c3e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Wavly',
    description: 'Large head with ribs',
    imgUrl: 'https://images.unsplash.com/photo-1575454125289-efff09c1f04f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Philantro',
    description: 'Redish with flat tops',
    imgUrl: 'https://images.unsplash.com/photo-1553521306-4fe73b17ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Dembi',
    description: 'Poofy and golden Brown',
    imgUrl: 'https://images.unsplash.com/photo-1513505002430-c8b38f63e1f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Kimtree',
    description: 'Yellow with upward head ',
    imgUrl: 'https://images.unsplash.com/photo-1572734316180-1a97a7892b6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Randlif',
    description: 'Orangy white grows in groups',
    imgUrl: 'https://images.unsplash.com/photo-1570834754033-af8d886a3193?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Fleafloe',
    description: 'Beige with wite dots',
    imgUrl: 'https://images.unsplash.com/photo-1501413890230-66ceae8c4f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Carboron',
    description: 'White shelves attached to trees',
    imgUrl: 'https://images.unsplash.com/photo-1565387376348-b7630e135167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Lou Lu',
    description: 'Small pointy heads white in color',
    imgUrl: 'https://images.unsplash.com/photo-1563368726-cf5b12bcf986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Brimly',
    description: 'Small with flower like heads',
    imgUrl: 'https://images.unsplash.com/photo-1539044841117-fe42f43613cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Tombuci',
    description: 'Small with rough grey heads',
    imgUrl: 'https://images.unsplash.com/photo-1541180475231-f0baf3d27b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Shemtoci',
    description: 'Upward pointing ribbed head',
    imgUrl: 'https://images.unsplash.com/photo-1574172477549-03985150570b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Seminole',
    description: 'slender body with pointy head',
    imgUrl: 'https://images.unsplash.com/photo-1583406712884-97467bb5d3c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: true,
  },
  {
    id: 'mushroom16',
    name: 'Gimbles',
    description: 'Dark Brown with thick stocks',
    imgUrl: 'https://images.unsplash.com/photo-1541296093088-f079b71d3478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: true,
  },
  {
    id: 'mushroom17',
    name: 'Tommies',
    description: 'Close growing small bunches',
    imgUrl: 'https://images.unsplash.com/photo-1554697229-c6b6341d5994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1673&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Srams',
    description: 'Weird shell looking heads',
    imgUrl: 'https://images.unsplash.com/photo-1560783113-daa119dd15a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Treafolds',
    description: 'Bubble looking clusters',
    imgUrl: 'https://images.unsplash.com/photo-1557838001-48bc085f1dfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Castas',
    description: 'Smooth white head',
    imgUrl: 'https://images.unsplash.com/photo-1570976447609-edbed1eb16d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];


const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const pickMushroom = (mushroomId) => {
  const randomMushroom = Math.floor(Math.random() * mushrooms.length);
  const pickedMushroom = mushrooms[randomMushroom];
  const pickedMushroomIndex = mushrooms.indexOf(pickedMushroom);
  mushrooms.splice(pickedMushroomIndex, 1);
  basket.push(pickedMushroom);
};


export default { getMushrooms, getBasket, pickMushroom };
