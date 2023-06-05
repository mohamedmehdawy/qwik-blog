import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import AboutStyle from "./about.css?inline";

export default component$(() => {
   useStylesScoped$(AboutStyle)
   return (
      <article>
         <h2>About page</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
      </article>
   );
});
