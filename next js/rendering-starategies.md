# Rendering Strategies
## 1️⃣ SSR – Server Side Rendering
Page is rendered on each request.
✔ Good for dynamic data
✔ Slower than SSG

## 2️⃣ SSG – Static Site Generation
In Next.js, SSG is implemented using:

1. Using Cacche and revalidate:
```jsx
type Post = {
  id: number;
  title: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // default → SSG
  });

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

```
2. generateStaticParams for dynamic routes

```jsx
type Post = {
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return posts.slice(0, 5).map(post => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "force-cache" }
  );
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

```

## 3️⃣ ISR – Incremental Static Regeneration
```jsx
export const revalidate = 60;
fetch(URL,
  {
    next: {revalidate: 60}
  }
).then(res => res.json())

```

### Disabling SSR:
```jsx
fetch(URL,
  {
    cache: "no-store"
  }
).then(res => res.json())
```

## 4️⃣ CSR – Client Side Rendering
Data fetched in browser using useEffect.