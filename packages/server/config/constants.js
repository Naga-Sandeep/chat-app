export const Users = [
  { id: 1, name: 'sam', friends: [ { userId: 2 }, { userId: 3 }, { userId: 4 }, { userId: 5 }]},
  { id: 2, name: 'kam', friends: [ { userId: 1 }, { userId: 4 }, { userId: 5 },]},
  { id: 3, name: 'juan', friends: [ { userId: 1 }]},
  { id: 4, name: 'tom', friends: [ { userId: 1 }]},
  { id: 5, name: 'ryan', friends: [ { userId: 1 }]}
];

export const Conversations = {
  'sam-kam': [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hello' },
    { id: 1, message: 'long time, no see!' },
    { id: 2, message: 'yeah.. ' },
    { id: 1, message: 'lol' },
  ]
};
