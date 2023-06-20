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
                  <div key={post.id}>
                     <h3>{post.title}</h3>
                     <p>{post.content.slice(0, 50)}...</p>
                     <Link href={`/blog/${post.id}`}>Read More</Link>
                  </div>
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
