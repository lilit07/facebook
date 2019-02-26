var btn = document.getElementById('btn');
var icon = document.getElementsByClassName('fa-exclamation-circle');
var input = document.getElementsByClassName('pad');
var fName = document.getElementsByName('f_name')[0];
fName.onkeyup = function(){
    console.log(this.value);
    if (this.value == "number"){
        input[0].style = 'border-color: red;'
            icon[0].style = 'opacity: 1;';

    }



}

// btn.addEventListener('click', function () {
//     for(var j = 0; j < input.length; j++) {
//
//             for (var i = 0; i < icon.length; i++) {
//                 icon[i].style = 'opacity: 1;';
//             }
//
//             input[j].style = 'border-color: red;'
//
//     }
// });