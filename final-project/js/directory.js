const requestURL = 'https://lizbirnel.github.io/external/json/directory.json';

fetch(requestURL) 
    .then(function (response) {
        console.log(response);
        //return response.json();
        return response.text();
    })
    .then(function (jsonObject) {
        let test = JSON.parse(jsonObject);
        console.log(jsonObject);
        //console.table(jsonObject); //temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];
        //towns.shift();
        //towns.splice(1,3);

        for (let i = 0; i < directory.length; i++) {

            //if(towns[i].name === 'Preston'|| towns[i].name === 'Fish Haven' || towns[i].name === 'Soda Springs') {

            let card = document.createElement('article');
            
            let dataDiv = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = directory[i].name;
            
            /*let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;*/

            let address = document.createElement('p');
            address.textContent = 'Address: ' + directory[i].address;

            let phone = document.createElement('p');
            phone.textContent = 'Phone: ' + directory[i].phone;

            let website = document.createElement('p');
            website.textContent = directory[i].websiteurl;
         
            dataDiv.appendChild(h2);
            dataDiv.appendChild(address);
            dataDiv.appendChild(phone);
            dataDiv.appendChild(website);
            
            card.appendChild(dataDiv);
            document.querySelector('div.cards').appendChild(card);
            
            let image = document.createElement('img');
            image.setAttribute('src', 'external/images/' + directory[i].logoimgurl);
            image.setAttribute('alt', directory[i].name);

            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

          
        //}

        }
    }).catch(error => {
        console.error("Error: ", error);
    });