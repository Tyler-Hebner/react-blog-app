export const posts = [
  { 
    id: 3,
    title: 'Fourth Post',
    content: 'Hello, this is a fourth post made for testing in the lab code review.',
    author: 'Tyler',
    date: '2023-04-01'
  },
  { 
    id: 2,
    title: 'Third Post',
    content: 'Hello, this is yet another post.',
    author: 'Tyler',
    date: '2023-03-26'
  },
  { 
    id: 1,
    title: 'Second Post',
    content: 'Hello, this is my second post!',
    author: 'Tyler',
    date: '2023-03-26',
    comments: [] 
  },
  { 
    id: 0,
    title: 'First Post',
    content: 'Hello, this is my first post!',
    author: 'Tyler',
    date: '2023-03-19',
    comments: [
      {name: "Tyler", content: "Test Comment" },
      {name: "Tyler", content: "Another Test Comment" }
    ]
  }
];