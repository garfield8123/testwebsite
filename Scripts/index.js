var slideindex = 0;
slideshow();

function slideshow(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log("length of mySlides" + slides.length);
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideindex++;
  console.log("slideIndex" + slideindex);
  console.log("lnegth slides" + slides.length);
  if(slideindex > slides.length){slideindex = 1;}
  slides[slideindex-1].style.display = "block";
  setTimeout(slideshow, 5000);
}

function loggClick(e) {
  if (!e) e = window.event;

  e.preventDefault();  // cancels the link

  var theLink = this.href;  // stores the link for later

  $.ajax({
     async: false,
     type: "POST",
        url: "./Logger.txt", //dynamic url to logging action
        data: {
            sid: 'abc123' //random data
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: false,
         complete: function() {
           // navigate when the log completes
           this.location.href = theLink;
         }
    });
    return true;
  }
}