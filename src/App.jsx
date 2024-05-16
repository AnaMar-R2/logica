import './App.css'
function App() {

  return (
    <div className='container'>
      <div className='block bloque0'>
        <h1 className='Title'>Introducción A La Lógica</h1>
        <h3 className='Profesor'>Profesor: Ali Guerra</h3>
        <span className='Valor'>Valor: 10 puntos</span>
      </div>
      <div className='block bloque1'>
        <div className='bloque1__box1 bx'>
          <h3 className='bloque1__box1-title'>Historia de la lógica</h3>
          <p className='bloque1__box1-text'>La historia de la lógica se remonta a civilizaciones antiguas como China, India y Grecia. Aunque el pensamiento lógico estaba implícito en Babilonia, la lógica como análisis explícito de los métodos de razonamiento se desarrolló en estas tres tradiciones. La lógica aristotélica, los aportes de los megáricos y estoicos, y la lógica matemática moderna han influido en su evolución. La lógica sigue siendo una herramienta invaluable para el razonamiento y la toma de decisiones</p>
        </div>
        <div className='bloque1__box2 bx'>
          <h3 className='bloque1__box2-title'>Definición de lógica</h3>
          <p className='bloque1__box2-text'>La lógica es una ciencia formal que estudia la estructura del pensamiento humano, incluyendo proposiciones, conceptos y razonamientos. Su objetivo es establecer leyes y principios válidos para determinar criterios de verdad. Como adjetivo, “lógico” o “lógica” indica que algo sigue las reglas de la lógica y la razón. La lógica se aplica en diversas áreas, desde la filosofía hasta las matemáticas y la computación</p>
        </div>
      </div>
      <div className='block bloque2'>
        <h3 className='bloque2__title'>Tipos de Lógica</h3>
        <p className='bloque2__text'>Existen varios tipos de lógica, cada uno con sus propias reglas y enfoques. A continuación, se presentan algunos de los más importantes:</p>
        <div className='bloque2__container'>
          <div className='bloque2__box1 bx1'>
            <h4 className='bloque2__box1-title'>Lógica Formal</h4>
            <p className='bloque2__box1-text'>También conocida como lógica tradicional o lógica filosófica, se centra en el estudio de las inferencias con contenido puramente formal y explícito. Es la base de la lógica matemática y se utiliza para analizar argumentos válidos.</p>
          </div>
          <div className='bloque2__box2 bx1'>
            <h4 className='bloque2__box2-title'>Lógica Informal</h4>
            <p className='bloque2__box2-text'>Esta disciplina más reciente se enfoca en estudiar, evaluar y analizar los argumentos desplegados en el lenguaje natural o cotidiano. Aquí se consideran aspectos como la claridad, coherencia y validez de los razonamientos.</p>
          </div>
          <div className='bloque2__box3 bx1'>
            <h4 className='bloque2__box3-title'>Lógica Simbólica</h4>
            <p className='bloque2__box3-text'>Utiliza símbolos y notaciones para representar proposiciones y relaciones. Es fundamental en matemáticas y ciencias de la computación.</p>
          </div>
          <div className='bloque2__box4 bx1'>
            <h4 className='bloque2__box4-title'>Lógica Modal</h4>
            <p className='bloque2__box4-text'>Explora conceptos como la posibilidad, necesidad y contingencia. Se utiliza para analizar proposiciones que involucran modalidades como “puede ser”, “debe ser” o “es necesario”.</p>
          </div>
          <div className='bloque2__box5 bx1'>
            <h4 className='bloque2__box5-title'>Lógica Deóntica</h4>
            <p className='bloque2__box5-text'>Se ocupa de las normas, permisos y prohibiciones. Es relevante en ética y derecho.</p>
          </div>
          <div className='bloque2__box6 bx1'>
            <h4 className='bloque2__box6-title'>Lógica Difusa</h4>
            <p className='bloque2__box6-text'>Trabaja con grados de verdad y permite expresar matices y ambigüedades. Se aplica en sistemas de control y toma de decisiones.</p>
          </div>
        </div>
      </div>
      <div className='block bloque3'>
        <div className='bloque3__box1 bx'>
          <h3 className='bloque3__box1-title'>Lógica de proposiciones</h3>
          <p className='bloque3__box1-text'>También conocida como lógica proposicional o lógica sentencial. Se centra en el estudio de proposiciones atómicas y compuestas. Las proposiciones atómicas pueden ser interpretadas como verdaderas o falsas. Utiliza conectivos lógicos como conjunción (Y), disyunción (O), implicación (si… entonces) y bicondicional (si y solo si). Su semántica es más simple y se aplica en matemáticas y ciencias de la computación.</p>
        </div>
        <div className='bloque3__box2 bx'>
          <h3 className='bloque3__box2-title'>Lógica de predicado</h3>
          <p className='bloque3__box2-text'>También llamada lógica de primer orden. Va más allá de las proposiciones y considera predicados (propiedades o relaciones) aplicados a objetos o individuos. Permite expresar relaciones más complejas y cuantificar sobre variables. Utiliza cuantificadores como “para todo” (∀) y “existe” (∃). Es fundamental en matemáticas, filosofía y lingüística.</p>
        </div>
      </div>
      <div className='block bloque4'>
        <h3 className='bloque4-title'>Teorías básicas de otras lógicas</h3>
        <div className='bloque4__container'>
          <p className='bloque4-box1 bx2'>Lógica Temporal. Estudia proposiciones relacionadas con el tiempo y la secuencia temporal. Utilizada en informática y sistemas concurrentes.</p>
          <p className='bloque4-box2 bx2'>Lógica Epistémica. Analiza proposiciones sobre conocimiento y creencias. Explora cómo los agentes razonan sobre lo que saben o creen.</p>
          <p className='bloque4-box3 bx2'>Lógica No Clásica. Incluye diversas variantes que desafían los principios de la lógica clásica. Ejemplos: lógica intuicionista, lógica paraconsistente, lógica relevante.</p>
        </div>
      </div>
      <h2>Mapa Mixto sobre la Lógica</h2>
      <div>
        <img src="./../public/Mapa.png" alt="mapa" />
      </div>
      <footer className='footer'>
        <p>Elaborado por <strong>Ana Maria Ruiz ❤️</strong> </p>
      </footer>
    </div>
  )
}

export default App
