import {
   component$,
   useSignal,
   useStore,
   useStylesScoped$,
   $,
} from "@builder.io/qwik";
import ContactStyle from "./contact.css?inline";
import Modal from "~/components/starter/modal/modal";
export default component$(() => {
   useStylesScoped$(ContactStyle);
   const formVisible = useSignal(false);
   const formData = useStore({
      name: "",
      message: "",
   });

   const modalVisible = useSignal(false);

   const closeModal = $(() => {
      modalVisible.value = false;
   });

   return (
      <section>
         <h2>contact page</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            aperiam rem voluptatem, porro, consequatur accusantium recusandae
            enim tempora explicabo natus nisi ut nostrum molestias rerum
            corrupti. Corporis, numquam architecto? Fugit.
         </p>
         <button onClick$={() => (formVisible.value = true)}>show from</button>
         {formVisible.value && (
            <form
               preventdefault:submit
               onSubmit$={() => {
                  modalVisible.value = true;
               }}
            >
               <label>
                  <span>Your name:</span>
                  <input
                     type="text"
                     value={formData.name}
                     onInput$={(e) =>
                        (formData.name = (e.target as HTMLInputElement).value)
                     }
                  />
               </label>
               <label>
                  <span>Your message:</span>
                  <textarea
                     value={formData.message}
                     onInput$={(e) =>
                        (formData.message = (
                           e.target as HTMLInputElement
                        ).value)
                     }
                  ></textarea>
               </label>
               <button>Send</button>
               <div>name: {formData.name}</div>
               <div>message: {formData.message}</div>
            </form>
         )}
         {modalVisible.value && (
            <Modal size="lg" close={closeModal} frosted={true}>
               <h2>Welcome {formData.name}</h2>
               <div q:slot="footer">your message is: {formData.message}</div>
            </Modal>
         )}
      </section>
   );
});
