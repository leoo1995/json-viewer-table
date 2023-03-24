import JSONViewer from "./components/JsonViewer";
import data from "./assets/data.json";
const json = {
  name: "John Doe",
  age: 30,
  birthday: "1993-03-17T10:00:00Z",
  married: false,
  address: {
    street: "123 Main St",
    city: "Bogotá",
    country: "Colombia",
  },
  hobbies: ["reading", "writing", "playing video games"],
  adressessRandom: [
    {
      street: "123 Main St",
      city: "Bogotá",
      country: "Colombia",
    },
    {
      street: "123 Main St",
      city: "Bogotá",
      country: "Colombia",
    },
    {
      street: "123 Main St",
      city: "Bogotá",
      country: "Colombia",
    },
    {
      street: "123 Main St",
      city: "Bogotá",
      country: "Colombia",
    },
  ],
  trasladoProteccion: {
    poderacion: [
      {
        pregunta: "",
        respuesta: true,
      },
    ],
    motivoTraslado: {
      id: 1157,
      descripcion: "F. SE ENCUENTRE EN PELIGRO DE SER AGREDIDO",
    },
    lugarTraslado: {
      tipoDestinoTraslado: {
        id: 1093,
        descripcion: "CENTRO DE TRASLADO POR PROTECION - CTP",
      },
      nombre: "",
      direccion: "Cra 12 12 34",
      telefono: "Federico Parra",
    },
    allegado: {
      infoIdentificacion: {
        tipoId: "CEDULA CIUDADANIA",
        numeroId: "80957466",
        nombres: "Hugo Mario",
        apellidos: "Arbelaez Pinto",
      },
      llamada: {
        telefono: "3005672342",
        fecha: "16-11-2022",
        hora: "09:19",
      },
      vinculo: "Madre",
    },
    seInformoTraslado: true,
    seInformoMotivo: true,
    manifestaciones: "",
    consideracionesUniformado: "",
    conductor: {
      grado: "Teniente",
      nombresApellidos: "Hugo Mario Perez Perez",
      placa: "",
      unidadLaboral: "",
      cargo: "Comandante CAI",
      telefono: "3007689593",
    },
    observacionesConductor: "",
    vehiculo: {
      siglaVehiculo: "",
      placaVehiculo: "NHY847",
      tipoVehiculo: "",
    },
  },
};

const App = () => {
  return <JSONViewer data={data} />;
};

export default App;
