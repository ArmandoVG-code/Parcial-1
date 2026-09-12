import  readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NombreCompleto;
let Codigo;

console.log("========== INSCRIPCIÓN ==========");

r1.question("Ingresa el nombre completo del estudiante: ", (resp1) => {
    NombreCompleto = resp1;

    r1.question("Ingresa el codigo de inscripcion ING-2026-0845: ", (resp2) => {

        Codigo = resp2;
        let NombreMayus = NombreCompleto.toUpperCase();
        let CodigoMayus = Codigo.toUpperCase();
        let partes = CodigoMayus.split("-");
        let Carrera = partes[0];
        let AnioStr = partes[1];
        let Registro = partes[2];
        let AnioNum = parseInt(AnioStr);
        let Estado;

        if(AnioNum === 2026){
            Estado = "INSCRIPCIÓN VÁLIDA";
        } else {
            Estado = "VERIFICAR AÑO DE INSCRIPCIÓN";
        }
        
        console.log("\n==========================================");
        console.log(" TICKET DE INSCRIPCIÓN ");
        console.log("==========================================");
        console.log("Estudiante: " + NombreMayus);
        console.log("Código: " + CodigoMayus);
        console.log("------------------------------------------");
        console.log("Carrera: " + Carrera);
        console.log("Año: " + AnioNum);
        console.log("Registro: " + Registro);
        console.log("------------------------------------------");
        console.log("Estado: " + Estado);
        console.log("==========================================");
        r1.close();
    });
});