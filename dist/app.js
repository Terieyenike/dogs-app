// https://dog.ceo/api/breeds/list/all
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
    console.log(breedsArray);
  });

select.addEventListener('change', e => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
  getDoggo(url);
});

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = (url) => {
  spinner.classList.add('show');
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTimeout(() => {
        img.src = data.message;
      }, 1000);
      spinner.classList.remove('show');
      setTimeout(() => {
        img.classList.add('show');
      }, 2000);
    });
}
