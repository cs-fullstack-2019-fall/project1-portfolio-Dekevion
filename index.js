let frame = document.getElementById('Frameworks');
let Projects = document.getElementById('Projects');
let Education = document.getElementById('Education');
let Reflection = document.getElementById('Reflections');
let Contact = document.getElementById('Contact');
let Resume = document.getElementById('Resume');
const el = document.querySelector('section');

// el.classList.add('animated','bounceOutLeft');
$(function () {
    $('section').click(function () {
        animate('section', 'fadeInLeft')
    });
    function animate(e,animation) {
        $(e).addClass('animated ' + animation);
        var wait = setTimeout(function () {
            $(e).removeClass('animated' + animation)
        },1000);
    }
});

//
// frame.addEventListener('mouseenter',function () {
//
// });


// Projects.addEventListener('click',function () {
//     alert('Click to Learn more about my Passion Project, Rumy')
// });
//
//
// Education.addEventListener('click',function () {
//     alert('you got mail')
// });
//
//
// Reflection.addEventListener('click',function () {
//     alert('you got mail')
// });
//
//
// Contact.addEventListener('click',function () {
//     alert('you got mail')
// });
//
//
//
// Resume.addEventListener('click',function () {
//     alert('you got mail')
// });
