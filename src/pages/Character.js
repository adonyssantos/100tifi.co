import { getHash, getData } from '../utils';
import { config } from '../config';

const Character = async () => {
  const id = getHash('/character');
  const character = await getData(config.apiUrl, id);

  console.log(character);

  const { image, name, status, species, gender, origin, location } = character;

  const view = /* html */ `
	  <div class="Characters-inner">
	    <article class="Characters-card">
		  <img src="${image}" alt="${name}" />
		  <h2>${name}</h2>
		</article>
		<article class="Characters-card">
		  <h3>Status: ${status}</h3>
		  <h3>Species: ${species}</h3>
		  <h3>Gender: ${gender}</h3>
		  <h3>Origin: ${origin.name}</h3>
		  <h3>Last Location: ${location.name}</h3>
		</article>
	  </div>
	`;

  return view;
};

export default Character;
