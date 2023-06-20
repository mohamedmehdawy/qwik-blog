import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { Post } from "./interfaces/post";
export const getPost = routeLoader$<Post>(async (req) => {
   const response = await fetch(`http://localhost:3000/blogs/${req.params.id}`);

   return await response.json();

})
export default component$(() => {
   const post = getPost();

   return (
      <>
         <article class="post">
            <h1>{ post.value.title }</h1>
            <p>{ post.value.content }</p>
         </article>
      </>
   )
})