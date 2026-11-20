console.log("Работа Валерии!");
var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
let imageId = document.getElementById("radio_image")
console.log("Stations: " + stations);
console.dir(stations);
console.log("Length: "+stations.length);
array_Images = ["1 радио.webp","2 радио.webp","3 радио.webp",
    "4 радио.webp","5 радио.webp","6 радио.webp"]

function getRadio(){
    //result_id.textContent = "Выбрана радиостанция: "+ 
    //stations[selected_index].value;

    let indexSelect = 0;
    for(let i=0;i<stations.length;i++){
        console.log("["+i+"]:"  +    stations[i].value);
        console.log("checked: " +    stations[i].checked);
        

        stations[i].addEventListener('change', getRadio);

        if (stations[i].checked){
            indexSelect = i;
        }
        resultId.textContent = "Выбрана радиостанция: "+ 
        stations[indexSelect].value;
        imageId.src = array_Images[indexSelect];
        
}
}

getRadio(resultId, 0);

for (let i=0; i<array_Images.length; i++){
    console.log(i+1+")"+array_Images[i]);}