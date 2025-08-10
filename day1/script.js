const h1 = document.getElementById("title");
if (h1) {
  h1.innerHTML = "Hello World Changed";
  console.log("✅ SUCCESS: Script found the element and changed it!");
} else {
  console.error(
    "❌ ASYNC FAILURE: Element 'title' not found! Script executed before HTML parsing reached the target element."
  );
}
