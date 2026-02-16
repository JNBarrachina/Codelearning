//* Escribe un programa que filtre las direcciones de una lista para obtener únicamente las direcciones válidas (aquellas que tienen datos en país, ciudad y dirección y en alguno de los dos teléfonos, e incluir información de una región o de un código postal)

let direcciones = [
    {
        // Válido
        pais: 'España', region: '', cp: '46014',
        ciudad: 'Valencia', direccion: 'Carrer Misericòrdia, 34',
        complemento: '',
        movil: '', fijo: '961 20 69 90'
    },
    {
        // Inválido: no tiene movil o fijo
        pais: 'España', region: '', cp: '46960',
        ciudad: 'Aldaia', direccion: 'C/ Montcabrer, 22',
        complemento: 'Pol. Ind. La Lloma',
        movil: '', fijo: ''
    },
    {
        // Inválido: no tiene país
        pais: '', region: 'Alicante', cp: '',
        ciudad: 'Petrer', direccion: 'Los Pinos, 7',
        complemento: '',
        movil: '', fijo: '965 37 08 88'
    }
]

console.log(direcciones.filter(direccion => (direccion.pais && direccion.ciudad && direccion.direccion && (direccion.movil || direccion.fijo) && (direccion.region || direccion.cp)))) // Basic solution

console.log(direcciones.filter(({ pais, ciudad, direccion, movil, fijo, region, cp }) =>
    pais && ciudad && direccion && (movil || fijo) && (region || cp)
)); // With destructuring