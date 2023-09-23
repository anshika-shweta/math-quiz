p1n=localStorage.getItem("p1name");
p2n=localStorage.getItem("p2name");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1n+" : ";
document.getElementById("p2name").innerHTML=p2n+" : ";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="question turn - "+p1n;
document.getElementById("player_answer").innerHTML="answer turn - "+p2n;
function send(){
   n1=document.getElementById("n1").value;
   n2=document.getElementById("n2").value;
   aa=parseInt(n1)*parseInt(n2);
    qw="<h4>"+n1+" X "+n2+"</h4>";
    ibox="<br>Answer : <input type='text' id='input_check_box'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=qw+ibox+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}
qt="p1";
at="p2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    
    if(get_answer==aa)
    {
        if(at=="p1")
        {
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
        }
        else{
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    if(qt=="p1")
    {
        qt="p2";
        document.getElementById("player_question").innerHTML="question turn - "+p2n;
    }
    else{
        qt="p1";
        document.getElementById("player_question").innerHTML="question turn - "+p1n;
    }
    if(at=="p1")
    {
        at="p2";
        document.getElementById("player_answer").innerHTML="answer turn - "+p2n;
    }
    else{
        at="p1";
        document.getElementById("player_answer").innerHTML="answer turn - "+p1n;
    }
    document.getElementById("output").innerHTML="";
}