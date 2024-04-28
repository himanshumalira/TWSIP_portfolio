var webs = document.querySelector("#web")
var clk = 0;
webs.addEventListener("click", function(){
    if(clk == 0){
 webs.innerHTML = "Make a project in ALMA BETTER Assignments"
 
 webs.style.fontSize = "15px"
 clk = 1;
    } else{
        webs.innerHTML = "Personal Portfolio Website"
        
        clk = 0;
    }
})


var robs = document.querySelector("#robo")
var flag = 0;
robo.addEventListener("click", function(){
    if(flag == 0){
 robo.innerHTML = "Make a project in Shri Ram Group Of Colleges"
 
 robo.style.fontSize = "15px"
 flag = 1;
    } else{
        robo.innerHTML = "Introduction To Robotics"
        
        flag = 0;
    }
})