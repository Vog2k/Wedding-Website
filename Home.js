

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'http://127.0.0.1:5500/Wedding-Website/Home.html?';
const site = 'http://127.0.0.1:5500/Wedding-Website/Home.html?';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);



var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/lukes.jpg",
    "images/riverhead.jpg",
    "images/ohariu-farm-wedding-3.jpg",
    "images/IMG_5550.jpg",
    "images/Seating.jpg",
    "images/image12.jpg",
    "images/Kamana.jpg"
    );

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',4000);
}

    // When the user scrolls down 20px from the top of the document, slide down the navbar
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 140) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
    }
            var navLinks = document.getElementById("navLinks");
            function showMenu() {
                navLinks.style.right = "0";
            }
            function hideMenu() {
                navLinks.style.right = "-200px";
            }    
        
          
