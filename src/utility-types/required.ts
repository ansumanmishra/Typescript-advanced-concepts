interface Post {
  article: string;
  description: string;
  id?: number;
}

// It's opposite of Partial type - All properties are mandatory
const post: Required<Post> = {
  article: 'New Article',
  description: 'Article description',
  id: 5, // id is also required even though it's defined as optional
};
