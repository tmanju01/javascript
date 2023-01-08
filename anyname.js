var  img=document.getElementById("i");

function change(){
    if(img.src.match('i1.jpg')){
        img.src = 'i2.jpg';
        // img.style.background="cover";
    }
    else if(img.src.match('i2.jpg')){
        img.src= 'i3.jpg';
    }
    else if(img.src.match('i3.jpg')){
        img.src='i4.jpg';
    }
    else if(img.src.match('i4.jpg')){
        img.src='i5.jpg';
    }
    else{
        img.src='i1.jpg';
    }
}