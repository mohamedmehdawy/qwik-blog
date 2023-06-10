import {
   component$,
   useSignal,
   useStyles$,
   useStylesScoped$,
} from "@builder.io/qwik";
import Modal from "~/components/starter/modal/modal";
import AboutStyle from "./about.css?inline";

export default component$(() => {
   useStylesScoped$(AboutStyle);

   const modalVisible = useSignal(false);

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
         <button onClick$={() => modalVisible.value = true}>Show modal</button>
         {modalVisible.value &&
            <Modal>
               <h2>Good News!!!</h2>
               
               <div q:slot="footer">
                  <button>Sign Up Now</button>
               </div>
            </Modal>}
      </article>
   );
});
