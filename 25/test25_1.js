console.log("Работа Валерии!");
var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
console.log("Stations: " + stations);
console.dir(stations);
console.log("Length: "+stations.length);

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
    }
}
getRadio(resultId, 0);
