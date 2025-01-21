

const apiKey = 'xBaFxhJV205jIXuYqXP3cQ==2co1fd58tu29yXo1'; 

const searchInput = document.querySelector('.searchInput')

searchInput.addEventListener('input', () =>{
  const inputValue = searchInput.value
  if(inputValue){
    fetchEmoji(inputValue)
  }
})

function fetchEmoji (inputValue){
  
  const url = 'https://api.api-ninjas.com/v1/emoji?name=heart'; // Umumiy emoji so'rovi

  fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      allEmoji(data);
    })
    .catch(error => {
      console.log(error);
    });
  

}

const card = document.querySelector('.card');
function allEmoji(emoji) {
  card.innerHTML = '';
  emoji.forEach((item) => {
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emojiItem');

    // Emoji rasmi
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    // Emoji nomi
    const name = document.createElement('p');
    name.textContent = item.name;
    name.style.marginTop = '5px'; 

    // Divga qo'shish
    emojiItem.append(img, name);
    card.append(emojiItem);
  });
}