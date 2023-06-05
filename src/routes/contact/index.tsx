import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyle from "./contact.css?inline";
export default component$(() => {
   useStylesScoped$(ContactStyle);
   
   return (
      <section>
         <h2>contact page</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
      </section>
   );
});
