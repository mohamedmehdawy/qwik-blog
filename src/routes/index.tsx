import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {

   const name = useSignal('mohamed');
   const person = useStore({
      name: name.value,
      age: 18,
      gender: 'male'
   });
   const blogs = useStore([
      { id: 1, title: '5 Tips for Reducing Stress in the Workplace' },
      { id: 2, title: 'Why Investing in Self-Care is Essential for Your Mental Health' },
      { id: 3, title: 'The Benefits of Mindfulness Meditation for Beginners' },
      { id: 4, title: 'How to Build a Successful Remote Team: Lessons Learned' }
   ]);
   return (
      <>
      <h1>Hello my name is: {person.name}</h1>
      <p>i have {person.age}</p>
      <p>and my gender is: {person.gender}</p>
      <button onClick$={() => person.name = 'ahmed'}>change me</button>
      {blogs.map(blog => {
         return (
            <div key={blog.id}>{blog.title}</div>
         )
      })}
      <button onClick$={() => blogs.pop()}>remove a blog</button>

      </>
   )
;
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
