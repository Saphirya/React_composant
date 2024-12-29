export function Hello({ name, age, majeur }) {
  console.log(name, age, majeur);
  return <h1>Hello {name}</h1>;
}

export function Greeting() {
  return <h2>Greeting !</h2>;
}
