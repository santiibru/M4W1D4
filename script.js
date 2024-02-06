//IN AGGIORNAMENTO...




const cover = (query, id) => {
    const row = document.querySelector(`#${id}Section`)
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q="+query
    )
      .then((raw) => {
        return raw.json()
      })
      .then((result) => {
        let music = result.data
        for (let i = 0; i < music.length; i++) {
            const element = music[i]
            if (element.artist.name.includes("Eminem")) { 
            row.innerHTML += `<div class='col col-3 pb-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
            } else if (element.artist.name.includes("Queen")) {
                row.innerHTML += `<div class='col col-3 pb-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
            } else if (element.artist.name.includes("Metallica")){
                row.innerHTML += `<div class='col col-3 pb-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
            }
        }
      })
      .catch((err) => console.log(err))
  }
  window.onload = () => {
    cover("eminem", "eminem")
    cover("queen", "queen")
    cover("metallica", "metallica")
  }



