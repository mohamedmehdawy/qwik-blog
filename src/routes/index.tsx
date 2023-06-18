import {
   $,
   component$,
   useSignal,
   useStore,
   useResource$,
   Resource,
} from "@builder.io/qwik";

import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
interface Post {
   id: string;
   title: string;
   content: string;
}
export default component$(() => {
   const blogsData = useResource$<Post[]>(async (req) => {
      console.log("resource");
      const response = await fetch("http://localhost:3000/blogs");
      return await response.json();
   });

   return (
      <>
         <div>
            <Resource
               value={blogsData}
               onPending={() => <div>loading...</div>}
               onResolved={(blogs) => (
                  <>
                     <div class="blogs">
                        {blogs &&
                           blogs.map((post) => (
                              <div key={post.id}>
                                 <h3>{post.title}</h3>
                                 <p>{post.content.slice(0, 50)}...</p>
                              </div>
                           ))}
                     </div>
                  </>
               )}
            />
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
