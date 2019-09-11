

// let juris = document.querySelector(".jurisdiction")
// let address = document.querySelector(".address")
// let community = document.querySelector(".communityB")
// let council = document.querySelector(".councilD")
// let gardenName = document.querySelector("#garden")
let button = document.querySelector("#submit");
let jurisOuterDiv = document.querySelector(".jurisdiction-outer-div")
let zipcodeInput = document.querySelector("#zipcode")

const makeCall = async (event) => {
    event.preventDefault();
    let userInput = zipcodeInput.value

    // let response = await axios.get(`https://data.cityofnewyork.us/resource/ajxm-kzmj.json`)
    // let response = await axios.get(`https://data.cityofnewyork.us/resource/ajxm-kzmj.json?garden_name=${userInput}`)
    let response = await axios.get(`https://data.cityofnewyork.us/resource/ajxm-kzmj.json?postcode=${userInput}`)
    console.log(response)
    //console.log(userInput)

    data = response.data;

    for (let i = 0; i < data.length; i += 1) {
        let juris = data[i].jurisdiction;
    let gardenName = data[i].garden_name;
    let gardenJuris = document.createElement('div')
    gardenJuris.className = "jurisdiction"; 
    gardenJuris.innerHTML = `
    <p>Community Garden: ${gardenName}</p>
    <p>Jurisdiction: ${juris}</p>`

    jurisOuterDiv.appendChild(gardenJuris);

    
    }



}

button.addEventListener('click', makeCall);






function changeImg() {
    let image = [];
    let time = 7000;
    image[0] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/rainbow-garden-of-life-and-health_src_HunterCollege.jpg";
    image[1] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/creative-little-garden-1_src yaya_the_duck.jpg";
    image[2] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/clinton-community-garden_src_exceptionalea.jpg";
    image[3] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/newRoots_CommunityFarm.webp";
    image[4] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/42_Rodale_Gallery1-src_NYRP.jpg";
    image[5] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/HarlemRose_src_Troy_Columbiablog.jpg";
    image[6] = "/Users/kennethwilliams/SEI_augTOnov/week_3/Tuesday/project1/NYC-Community-Gardens-by-Jurisdiction-/images/TroySimpson_Diamante_src_Columbiablog.jpg";
    for (let i = 0; i < image.length - 1; i += 1) {
        // document.img.src= image[i]; 
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg; 