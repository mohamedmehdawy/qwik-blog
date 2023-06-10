import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyle from "./modal.css?inline";
export default component$(() => {
   useStylesScoped$(ModalStyle);
   return (
      <div class="modal">
         <div class="modal-content">
            <div class="close">close</div>
            <main class="main-content">
               <Slot />
            </main>
            <footer>
               <Slot name="footer"></Slot>
            </footer>
         </div>
      </div>
   );
});
