const urlImg = "http://localhost:1337";

fetch('myinfo.json')
    .then((response) => response.json())
    .then((data) => {

    
        let myName = document.querySelector('#myname')
        let myAge = document.querySelector('#myage')
        let where = document.querySelector('#localisation')
        let myPic = document.querySelector('#mypicture')
        let desc = document.querySelector('#mydesc')


        let generateName = `
        <h1> ${data.data[0].attributes.Name} </h1>
        `

        myName.innerHTML = generateName

        let generateAge = `
            <h2> ${data.data[0].attributes.myage} ans </h2>
        `

        myAge.innerHTML = generateAge

        let generatePlace = `
            <h3> ${data.data[0].attributes.location} </h3>
        `

        where.innerHTML = generatePlace

        let generateAvatar = `
            <img src="`+ urlImg + data.data[0].attributes.mypicture.data.attributes.formats.small.url + `">
        `

        myPic.innerHTML = generateAvatar

        let generateDesc = `
            <p> ${data.data[0].attributes.MyDescription} </p>
        `

        desc.innerHTML = generateDesc

    })