// Hike View handler
export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, listElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
        for (const hike of hikeList) {
            const hikeElement = this.renderOneHikeLight(hike);
            listElement.appendChild(hikeElement);
        }
    }
    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty
        const hikeElement = document.createElement('li');
        hikeElement.innerHTML = `<h2 class='text-3xl text-center py-5 bg-purple-300 my-3 font-bold'>${hike.name}</h2>
        <div class="grid md:gap-1 md:grid-cols-2 lg:gap-10">
            <img src='${this.imgBasePath}${hike.imgSrc}' alt='${hike.imgAlt}' class='w-full md:p-5'>
            <div class='p-5'>
                <h3 class='text-2xl font-semibold'>Distance</h3>
                <p>${hike.distance}</p><br>
                <h3 class='text-2xl font-semibold'>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
        </div><br>`;
        return hikeElement;

    }
    renderOneHikeFull(hike, parentElement) {
        parentElement.innerHTML = `<h2 class='text-3xl text-center py-5 bg-green-300 my-3 font-bold'>${hike.name}</h2>
        <div class="grid md:gap-1 md:grid-cols-2 lg:gap-10">
            <img src='${this.imgBasePath}${hike.imgSrc}' alt='${hike.imgAlt}' class='w-full md:p-5'>
            <div class='p-5'>
                <h3 class='text-2xl font-semibold'>Distance</h3>
                <p>${hike.distance}</p><br>
                <h3 class='text-2xl font-semibold'>Difficulty</h3>
                <p>${hike.difficulty}</p><br>
                <h3 class='text-2xl font-semibold'>Description</h3>
                <p>${hike.description}</p><br>
                <h3 class='text-2xl font-semibold'>Direction</h3>
                <p>${hike.directions}</p>
            </div>
        </div><br>`;

        const returnBtn = document.createElement('a');
        returnBtn.classList.add('m-5', 'bg-blue-500', 'text-white', 'font-bold', 'px-4', 'py-2', 'rounded');
        returnBtn.innerText = 'Go back';
        returnBtn.setAttribute('href', '/WDD-330/week5/teamActivity/');
        parentElement.appendChild(returnBtn);
    }
}