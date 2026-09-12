import  readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NombreEst;
let NombreEq;
let horasSoli;
const costoHora = 2.25;

console.log("========== PRÉSTAMO DE EQUIPOS ==========");

r1.question("Ingresa el nombre del estudiante: ", (resp1) => {
    NombreEst = resp1;

    r1.question("Ingresa el nombre del equipo: ", (resp2) => {
        NombreEq = resp2;

        r1.question("Ingresa la cantidad de horas solicitadas: ", (resp3) => {
            horasSoli = parseFloat(resp3);

            let costoTotal = horasSoli * costoHora;

            let NombreEqMayus = NombreEq.toUpperCase();

            let fecha = new Date();
            let anio = fecha.getFullYear();
            let mes = fecha.getMonth() + 1;
            let diaMes = fecha.getDate();
            let diaSemana = fecha.getDay();
            let hora = fecha.getHours();
            let minutos = fecha.getMinutes();
            let segundos = fecha.getSeconds();

            let jornada;

            if(hora < 12){
                jornada = "Préstamo registrado en jornada de mañana";
            } else {
                jornada = "Préstamo registrado en jornada de tarde";
            }
            
            console.log("\n========== RECIBO DE PRÉSTAMO ==========");
            console.log("Estudiante: " + NombreEst);
            console.log("Equipo: " + NombreEqMayus);
            console.log("Horas solicitadas: " + horasSoli);
            console.log("Solamente el año " + anio);
            console.log("Solamente el mes " + mes);
            console.log("Solamente el dia del mes " + diaMes);
            console.log("Solamente el dia de la semana " + diaSemana);
            console.log("Solamente las horas " + hora);
            console.log("Solamente los minutos " + minutos);
            console.log("Solamente los segundos " + segundos);
            console.log("Costo total: $" + costoTotal.toFixed(2));
            console.log(jornada);
            console.log("==========================================");
            r1.close();
        });
    });
});