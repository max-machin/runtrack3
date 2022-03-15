window.addEventListener("DOMContentLoaded", (event) => {
    var keylog = document.getElementById("keylogger");
    console.log(keylog);

    function getcaracters() {
        window.addEventListener('keypress' , function(e){
            keylog.innerHTML += appendCharacter(e.keyCode)
        });
        
        function appendCharacter(c) {
            switch (c) {
                case 8: // Backspace
                    keylog.value = keylog.value.slice(0, -1);
                    break;
                default:
                    keylog.value = keylog.value + String.fromCharCode(c);
            }
        }
        
          
    }

    getcaracters();
});