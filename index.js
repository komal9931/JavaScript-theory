/*
What is async ?
what is await ?
how async works behind the scenes?
examples of using async/await
error handling
interviews 
async await vs Promise.then/catch




*/
console.log("hello world -1");

async function handlePromise() {
  console.log("hello world -4");
  const data = await fetch("https://api.github.com/users/komal9931");
  console.log(data);
  //   return data;
  console.log("hello world -3");
  console.log("hello world -6");
  console.log("hello world -10");
}
handlePromise().then((response) => {
  console.log(response);
});
console.log("hello world -2");
