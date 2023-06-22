import {
   $,
   component$,
   useSignal,
   useStore,
   useResource$,
   Resource,
} from "@builder.io/qwik";

import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
import { Post } from "./blog/[id]/interfaces/post";
import Card from "~/components/starter/card/card";

export const getBlogs = routeLoader$<Post[]>(async () => {
   const response = await fetch("http://localhost:3000/blogs");
   return await response.json();
});
export default component$(() => {
   const blogs = getBlogs();

   return (
      <>
         <div class="blogs">
            {blogs.value &&
               blogs.value.map((post) => (
                  <Card key={post.id}>
                     <h3 q:slot="title">{post.title}</h3>
                     <p q:slot="content">{post.content.slice(0, 50)}...</p>
                     <Link q:slot="footer" href={`/blog/${post.id}`}>
                        <button>
                           Read More
                        </button>
                     </Link>
                  </Card>
               ))}
         </div>
      </>
   );
});

export const head: DocumentHead = {
   title: "Welcome to Qwik",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
