import imgTequeño from "../assets/tequeños.jpg"
import imgPabellon from "../assets/pabellon.jpg"
import imgPie from "../assets/pie.jpg"
import FoodCard from "./FoodCard";

function Menu() {

  // Vamos a escribir muuuuucho JS :)

  return (
    <section id="menu">
      <h3>Este es el menu de hoy</h3>

      {/* <div className="card">
        <p>Tequeños</p>
        <img src={imgTequeño} alt="tequeños" />
      </div>

      <div className="card">
        <p>Pabellon Criollo</p>
        <img src={imgPabellon} alt="pabellon" />
      </div>

      <div className="card">
        <p>Pie de Limon </p>
        <img src={imgPie} alt="pie" />
      </div> */}

      <FoodCard foodName="Tequeños" foodImg={imgTequeño} cardColor="yellow"/>
      <FoodCard foodName="Pabellon Criollo" foodImg={imgPabellon} cardColor="blue"/>
      <FoodCard foodName="Pie de Limon" foodImg={imgPie} cardColor="red"/>

      {/* props es la forma de traer data desde la ejecucion del componente hasta su renderizacion */}
      {/* props es lo equivalente a argumentos/parametros de componentes */}

    </section>
  );
}

export default Menu;
