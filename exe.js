var counter=1
function fonction_statique (){
    counter= counter+1;
    var z = document.getElementById("container").innerHTML + "<div>test x</div>";
    document.getElementById("container").innerHTML= z;
}

function fonction_dynamique(){
    counter=counter+1;
    var z = document.getElementById("container").innerHTML+"<div>test "+counter+"</div>";
    document.getElementById("container").innerHTML= z;
}
function fonction_loop_dynamique(parametre){
    for(var i=0;i<parametre; i=i+1){
        fonction_dynamique();
    }
}
function update(){
    if(counter>10){
        document.getElementById("answer").innerHTML= "Yes";
    }
    else{
        document.getElementById("answer").innerHTML = "No";
    }
    document.getElementById("count").innerHTML= counter;
}
