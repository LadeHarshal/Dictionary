const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      //   console.log(data[0].phonetics[0].audio);
      result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <img class='soundb' src="https://static.vecteezy.com/system/resources/thumbnails/015/124/149/small/speaker-black-icon-social-icon-set-png.png".
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});
function playSound() {
  sound.play();
}
