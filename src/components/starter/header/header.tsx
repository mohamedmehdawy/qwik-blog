import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
   useStyles$(styles);

   return (
      <header>
         <nav>
            <QwikLogo />
            <ul>
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/about">About</Link>
               </li>
               <li>
                  <Link href="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
});
