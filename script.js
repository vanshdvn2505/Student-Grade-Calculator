let btn = document.querySelector('.btn button');

btn.addEventListener('click', ()=>{
    let phy = parseInt(document.getElementById('phys').value);
    let chem = parseInt(document.getElementById('chem').value);
    let math = parseInt(document.getElementById('math').value);
    let eng = parseInt(document.getElementById('eng').value);
    let sports = parseInt(document.getElementById('sports').value);

    let percentage = document.querySelector('.percentage');
    let grade = document.querySelector('.grade');
    let total = document.querySelector('.total');
    let pass = document.querySelector('.pass');

    if(phy < 0 || chem < 0 || math < 0 || eng < 0 || sports < 0){
        alert("Enter Valid Details");
        return;
    }

    let marks = phy + chem + math + eng + sports;
    let percent = ((marks/500)*100).toFixed(2);

    if(isNaN(marks)){
        alert("Enter Valid Details");
        return;
    }

    if(percent == NaN){
        return;
    }

    percentage.innerHTML = "Percentage: " + percent;
    total.innerHTML = "Total Marks: " + marks + "/500";

    if(percent <= 100 && percent >= 80){
        grade.innerHTML = "Grade: A";
    }
    else if(percent <= 79 && percent >= 60){
        grade.innerHTML = "Grade: B";
    }
    else if(percent <= 59 && percent >= 40){
        grade.innerHTML = "Grade: C";
    }
    else{
        grade.innerHTML = "Grade: F";
    }

    if(percent >= 40){
        pass.innerHTML = "PASS";
    }
    else{
        pass.innerHTML = "FAIL";
    }
    // percentage.style.fontSize = "2rem";
});