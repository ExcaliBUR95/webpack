import "./styles.css";

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();

  const root = document.getElementById('root');
  const divWithJoke = document.createElement('div');

  divWithJoke.append(json.value);

  root.append(divWithJoke);
})
