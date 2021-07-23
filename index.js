var x=document.getElementsByClassName("p1");

for(var i=0;i<68;++i)
{
if(x[i])
{
    x[i].addEventListener("click",function()
    {
        alert("your order is placed");
    });
    }
}

var i=0;
var b=document.getElementsByClassName("btn5");

    if(b[0])
    {   
        b[0].addEventListener("click",function()
        {
            if(!i)
            {
                var dis=document.getElementsByClassName("more");
                dis[0].style.display="inline-flex";
                var but=document.getElementsByClassName("btn5");
                but[0].innerHTML="VIEW LESS";
                i=1;
            }
            else{
                var dis=document.getElementsByClassName("more");
                dis[0].style.display="none";
                var but=document.getElementsByClassName("btn5");
                but[0].innerHTML="VIEW MORE";
                i=0;
            }
        
        })

    }

    if(b[1])
    {   
        b[1].addEventListener("click",function()
        {
            if(!i)
            {
                var dis=document.getElementsByClassName("more");
                dis[1].style.display="inline-flex";
                var but=document.getElementsByClassName("btn5");
                but[1].innerHTML="VIEW LESS";
                i=1;
            }
            else{
                var dis=document.getElementsByClassName("more");
                dis[1].style.display="none";
                var but=document.getElementsByClassName("btn5");
                but[1].innerHTML="VIEW MORE";
                i=0;
            }
        
        })

    }


    if(b[2])
    {   
        b[2].addEventListener("click",function()
        {
            if(!i)
            {
                var dis=document.getElementsByClassName("more");
                dis[2].style.display="inline-flex";
                var but=document.getElementsByClassName("btn5");
                but[2].innerHTML="VIEW LESS";
                i=1;
            }
            else{
                var dis=document.getElementsByClassName("more");
                dis[2].style.display="none";
                var but=document.getElementsByClassName("btn5");
                but[2].innerHTML="VIEW MORE";
                i=0;
            }
        
        })

    }



    if(b[3])
    {   
        b[3].addEventListener("click",function()
        {
            if(!i)
            {
                var dis=document.getElementsByClassName("more");
                dis[3].style.display="inline-flex";
                var but=document.getElementsByClassName("btn5");
                but[3].innerHTML="VIEW LESS";
                i=1;
            }
            else{
                var dis=document.getElementsByClassName("more");
                dis[3].style.display="none";
                var but=document.getElementsByClassName("btn5");
                but[3].innerHTML="VIEW MORE";
                i=0;
            }
        
        })

    }


    if(b[4])
    {   
        b[4].addEventListener("click",function()
        {
            if(!i)
            {
                var dis=document.getElementsByClassName("more");
                dis[4].style.display="inline-flex";
                var but=document.getElementsByClassName("btn5");
                but[4].innerHTML="VIEW LESS";
                i=1;
            }
            else{
                var dis=document.getElementsByClassName("more");
                dis[4].style.display="none";
                var but=document.getElementsByClassName("btn5");
                but[4].innerHTML="VIEW MORE";
                i=0;
            }
        
        })

    }

 



