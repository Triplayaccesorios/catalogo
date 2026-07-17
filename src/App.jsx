import "./App.css";
import productos from "./productos";

export default function App() {
  return (
    <header className="hero">
      <div className="overlay">

        <h1>TRIPLAY & ACCESORIOS</h1>

        <p>Calidad que construye tus ideas</p>

        <input
          className="busqueda"
          placeholder="🔍 Buscar productos..."
        />

        <div className="botones">
          <button>Maderas</button>
          <button>Acabados</button>
          <button>Cerrajería</button>
          <button>Herrajes</button>
        </div>

        <a
          className="whatsapp"
          href="https://wa.me/526873132754"
          target="_blank"
          rel="noreferrer"
        >
          📲 Pedir por WhatsApp
        </a>

        <section className="catalogo">
          {productos.map((producto) => (
            <div className="tarjeta" key={producto.id}>

              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <h3>{producto.nombre}</h3>

              <p className="precio">
                ${producto.precio}
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/526873132754?text=Hola,%20me%20interesa%20el%20producto:%20" +
                      producto.nombre,
                    "_blank"
                  )
                }
              >
                Cotizar
              </button>

            </div>
          ))}   
        </section>

      </div>
    </header>
  );
}