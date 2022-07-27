// If any other rates choosen , which one
var checkChecked = [false,0];
var classListName = "checked";
var elementName = document.getElementsByClassName('not-checked');
var submition = 0;

for(let i = 0;i<5;i++){
    elementName[i].addEventListener("click", function(){
        chooseRate(i);
    })
    console.log(`Confirmed${i}`)
}

let chooseRate = (ind)=>{
    if(checkChecked[0] == true && ind !== checkChecked[1]){
        elementName[checkChecked[1]].classList.remove(classListName);
        console.log("33 confirmatory test done");
    };
    if(!elementName[ind].classList.contains(classListName)){
        elementName[ind].classList.add(classListName)
        console.log("sec confirmatory test done")
    }
    checkChecked = [true , ind];
    submition = ind + 1
}

let submit = ()=>{
    if(checkChecked[0]==true){document.getElementsByClassName('card')[0].innerHTML=`
    <div class="lg-icon">
                <img src="img/illustration-thank-you.svg" alt="" srcset="">
            </div>
            <div class="selection-message">
                <p>
                    You selected ${submition} out of 5
                </p>
            </div>
            <div class="thanks-message">
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
    `}
    else{
        document.getElementById('none-message').innerHTML+="Please choose rating before submiting!";
        setTimeout(()=>{document.getElementById('none-message').innerHTML=""} , 3000)
    }
}