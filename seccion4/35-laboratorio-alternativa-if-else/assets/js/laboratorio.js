const fecha = new Date();

const diaLetras = {
    0: () => "Domingo - 0",
    1: () => "Lunes - 1",
    2: () => "Martes - 2",
    3: () => "Miércoles - 3",
    4: () => "Jueves - 4",
    5: () => "Viernes - 5",
    6: () => "Sábado - 6"
};

console.log(diaLetras[fecha.getDay()]());

const diaLetras2 = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(diaLetras2[fecha.getDay()]);