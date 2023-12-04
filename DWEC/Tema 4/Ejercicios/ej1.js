let listaTurnos = [];
listaTurnos.push(["Ana Gomez", "9:00"]);    //Se registran tres pacientes al inicio del día. 
listaTurnos.push(["Carlos Rodriguez", "9:15"]);
listaTurnos.push(["Elena Lopez", "9:30"]);
listaTurnos.unshift(["Pedro Lopez", "8:45"]);   //Llama un paciente de atención Urgente. 

listaTurnos.shift();    //Retira al primer paciente de la lista.
listaTurnos.push(["Miguel Sanchez", "10:00"]);  //Agrega un nuevo paciente al final de la lista.
listaTurnos.shift();    //Retira al siguiente paciente de la lista.
listaTurnos.pop();  //El último paciente ha cancelado su cita.