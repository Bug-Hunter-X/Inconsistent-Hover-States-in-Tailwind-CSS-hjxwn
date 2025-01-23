```javascript
// Solution: Simplify classes or add specificity
<div class="bg-blue-500 p-4 text-white">
  <p class="text-xl font-bold">This is a paragraph</p>
  <button class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
    Click me!
  </button>
</div>
/* In CSS if you still face issues:
.bg-gray-800:hover { /* Add specificity here */
  @apply bg-gray-900 !important;
}
*/
```