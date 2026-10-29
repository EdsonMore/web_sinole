// Datos editables del sitio: cambia aquí enlaces y contacto.
export const SITE = {
  nombre: 'SINOLE',
  nombreLargo: 'Sindicato de Trabajadores de Petróleos del Perú – Operaciones Oleoducto',
  lema: 'Todo nos une, nada nos separa',
  ruc: '20172592458',
  fundacion: '20 de diciembre de 1976',
  direccion: 'Jr. Junín 1130, Piura – Perú',
  email: 'contacto@sinole.pe', // PLACEHOLDER: reemplazar por el correo oficial
  petroperu: 'https://www.petroperu.com.pe/',
};

// Mismos números para SINOLE y FEDUNPE.
export const CONTACTOS = [
  { nombre: 'Cielo Chávez Sánchez', cargo: 'Secretaria', telefono: '+51 947 765 605' },
  { nombre: 'Luis Camino Quinde', cargo: 'Secretario General', telefono: '+51 901 966 461' },
];

export const FEDUNPE = {
  sigla: 'FEDUNPE',
  nombre: 'Federación de Unidad Nacional del Petróleo y Energía',
  sindicatos: [
    { sigla: 'SINUTREAPP', ciudad: 'Talara' },
    { sigla: 'SINAPROPP', ciudad: 'Lima' },
    { sigla: 'SUTOS', ciudad: 'Iquitos' },
    { sigla: 'SINOLE', ciudad: 'Piura' },
  ],
};

export const whatsapp = (telefono: string) => `https://wa.me/${telefono.replace(/\D/g, '')}`;

export const SOCIAL = [
  { nombre: 'Facebook', url: 'https://www.facebook.com/sindicato.oleoducto', usuario: 'Sindicato Oleoducto' },
  { nombre: 'TikTok', url: 'https://www.tiktok.com/@sinole2025', usuario: '@sinole2025' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/sin_ole2025/', usuario: '@sin_ole2025' },
] as const;
