import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyle from "./modal.css?inline";

interface ModalProps {
   size: "sm" | "lg";
   frosted?: boolean
}
export default component$<ModalProps>((props) => {
   useStylesScoped$(ModalStyle);

   return (
      <div class={`modal ${props.size} ${props.frosted && 'frosted'}`}>
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
