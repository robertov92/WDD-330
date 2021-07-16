// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        if (quakeList.features.length > 0) {
            quakeList.features.forEach(element => {
                const item = document.createElement('li');
                item.setAttribute('data-id', element.id);
                item.innerHTML = `${element.properties.title} 
                <p>${new Date(element.properties.time)}</p>`;
                listElement.appendChild(item);
            });

            listElement.innerHTML = quakeList.features
                .map(quake => {
                    return `<li class="my-5" data-id=${quake.id}>${
                    quake.properties.title
                  } <div>${new Date(quake.properties.time)}</div></li>`;
                })
                .join('');
        } else {
            listElement.innerHTML = `<p>Nothing to show. Try a bigger radius!</p>`
        }

    }
    renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake.properties);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        element.innerHTML = quakeProperties
            .map(item => {
                if (item[0] === 'time' || item[0] === 'updated') {
                    return `<li>${item[0]}: ${new Date(item[1])}</li>`;
                } else return `<li>${item[0]}: ${item[1]}</li>`;
            })
            .join('');
    }
}