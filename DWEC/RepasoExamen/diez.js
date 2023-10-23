function color() {
     var selectTheme = document.getElementById("tema").value;
     if (selectTheme == "claro") {
         document.body.className = "claro";
     } else if (selectTheme == "dark") {
         document.body.className = "dark";
     } else if (selectTheme == "colores") {
         document.body.className = "colores";
     }
}