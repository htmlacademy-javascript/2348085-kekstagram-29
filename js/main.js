function generateComment() {
  const comments = [];
  for (let i = 0; i < getRandomNumber(0, 30); i++) {
    comments.push({
      id: getRandomId(),
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomMessage(),
      name: getRandomName(),
    });
  }

  return comments;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomMessage() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  return messages[getRandomNumber(0, messages.length - 1)];
}

function getRandomName() {
  const names = [
    'Артем',
    'Максим',
    'Марина',
    'Ольга',
    'Алексей',
    'Дмитрий',
    'Иван',
    'Елена',
    'Николай',
    'Сергей',
    'Аня',
  ];

  return names[getRandomNumber(0, names.length - 1)];
}

function getRandomId() {
  let id = getRandomNumber(1, 160);
  while (usedIds.includes(id)) {
    id = getRandomNumber(1, 160);
  }
  usedIds.push(id);
  return id;
}

const usedIds = [];

const photosArray = [];

for (let i = 1; i <= 25; i++) {
  const photo = {
    id: getRandomId(),
    url: `photos/${i}.jpg`,
    comments: generateComment(),
  };
  photosArray.push(photo);
}
console.log(photosArray)
