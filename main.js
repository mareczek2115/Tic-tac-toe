fields = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
len = fields.length;

let round = "cross";
document.getElementById("sign").setAttribute("src", "cross_small.png");

function whoWon(){
    if( (fields[0] == fields[1] && fields[1] == fields[2]) ||
        (fields[3] == fields[4] && fields[4] == fields[5]) ||
        (fields[6] == fields[7] && fields[7] == fields[8]) ||
        (fields[0] == fields[3] && fields[3] == fields[6]) ||
        (fields[1] == fields[4] && fields[4] == fields[7]) ||
        (fields[2] == fields[5] && fields[5] == fields[8]) ||
        (fields[0] == fields[4] && fields[4] == fields[8]) ||
        (fields[2] == fields[4] && fields[4] == fields[6])
    ){
        if(round == "cross"){
            alert("Wygrało kółko")
        }

        else{
            alert("Wygrał krzyżyk")
        }
        fields = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        round = "cross";
        return window.location.assign("index.html");
    }
    else{
        if(fields[0] != "one" && fields[1] != "two" &&
           fields[2] != "three" && fields[3] != "four" && 
           fields[4] != "five" && fields[5] != "six" && 
           fields[6] != "seven" && fields[7] != "eight" &&
           fields[8] != "nine"){
                alert("Remis");
                fields = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
                round = "cross";
                return window.location.assign("index.html");
        }
    }
}

function setSign(id){
    var img_id = "img_" + id.toString();
    if(round == "cross"){
        if(document.getElementById(`${img_id}`).getAttribute("src") != ""){
            alert("Nie możesz tu postawić krzyżyka")
        }
        else if(document.getElementById(`${img_id}`).getAttribute("src") == ""){
            document.getElementById(`${img_id}`).setAttribute("src", "cross.png");
            round = "circle";
            for(i=0; i<len; i++){
                if(fields[i] == id){
                    fields[i] = "cross";
                }
            }
            document.getElementById("sign").setAttribute("src", "circle_small.png");
        }
    }
    else if(round == "circle"){
        if(document.getElementById(`${img_id}`).getAttribute("src") != ""){
            alert("Nie możesz tu postawić kółka")
        }
        else if(document.getElementById(`${img_id}`).getAttribute("src") == ""){
            document.getElementById(`${img_id}`).setAttribute("src", "circle.png");
            round = "cross";
            for(i=0; i<len; i++){
                if(fields[i] == id){
                    fields[i] = "circle";
                }
            }
            document.getElementById("sign").setAttribute("src", "cross_small.png");
        }   
    }
    document.getElementById(`${img_id}`).style.cursor = "not-allowed";
    whoWon();
}

