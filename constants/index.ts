import { FaLocationDot, FaNewspaper } from "react-icons/fa6";
import { IoMdMegaphone } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


export const Novedades = [
    {
      title: "Robo de quesos cremosos en Valentina Sur",
      description:
        'Un individuo conocido como Ignacio Fozalinda fue visto por última vez en el barrio de Valentina Sur, con un queso cremoso en su vehículo. El individuo se encuentra escondido en un bosque cercano, se lo considera peligroso y violentamente cremoso.',
      image: "",
    },
    {
      title: "Robo en Confluencia",
      description:
        'asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 asalto 2 ',
      image: "",
    },
    {
      title: "Robo en San Lorenzo",
      description:
        'asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 asalto 3 ',
      image: "",
    },
  ] as const;

  export const numbers = [
    { number: "107", description: "Emergencias médicas." },
    { number: "100", description: "Bomberos." },
    { number: "103", description: "Defensa civil." },
    { number: "105", description: "Emergencia ambiental." },
    { number: "106", description: "Emergencia náutica." },
    { number: "135", description: "Asistencia al suicida." },
    { number: "142", description: "Chicos y chicas extraviados." },
  ] as const;

  export const HELPS = [
    {
      icon: FaNewspaper,
      description: "En el menú de novedades se podrán los casos más recientes de la ciudad.",
    },
    {
      icon: IoMdMegaphone,
      description: "En el menú de Realizar denuncia podrás anunciar a los administradores de la app o a las autoridades tu caso mediante un formulario.",
    },
    {
      icon: FaPhoneAlt,
      description: "En el menú de Líneas de ayuda se te mostrarán los números telefónicos de las líneas de emergencia de la ciudad.",
    },
    {
      icon: FaLocationDot,
      description: "Estos puntos de interes son las comisarias que estan por toda la ciudad de Neuquén.",
    },
  ] as const;


