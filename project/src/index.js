import "core-js/stable";
import "regenerator-runtime/runtime";
import { entregas } from './data.js';

// 🔹 Función flecha con parámetro por defecto
const procesarEntregas = (lista = []) => {
  // Usamos Map para agrupar direcciones y sumar paquetes
  const mapa = new Map();

  // 🔹 Destructuring en el bucle for...of
  for (const { direccion, paquetes } of lista) {
    mapa.set(direccion, (mapa.get(direccion) || 0) + paquetes);
  }

  // 🔹 Spread operator para convertir Map a array
  const ordenadas = [...mapa.entries()]
    // 🔹 Arrow function con destructuring
    .map(([direccion, paquetes]) => ({ direccion, paquetes }))
    // 🔹 Arrow function con destructuring en sort
    .sort((a, b) => b.paquetes - a.paquetes);

  return ordenadas;
};

// 🔹 Función async para simular carga de datos
async function cargarDatos() {
  // Simulamos una promesa que resuelve con los datos
  return new Promise((resolve) => {
    setTimeout(() => resolve(entregas), 100);
  });
}

// 🔹 Función principal usando async/await
async function main() {
  try {
    // 🔹 Await para simular carga async (como si viniera de un JSON)
    const datos = await cargarDatos();
    const resultado = procesarEntregas(datos);

    // 🔹 Generamos reporte con template literals
    const reporte = resultado.map(
      ({ direccion, paquetes }) => `📦 ${direccion}: ${paquetes} paquetes`
    ).join('\n');

    console.log("=== Reporte de Entregas ===");
    console.log(reporte);

    // 🔹 Mostrar en la página web
    mostrarReporteEnPagina(resultado);
    
  } catch (error) {
    console.error("Error al procesar entregas:", error);
  }
}

// 🔹 Función para mostrar el reporte en la página web
const mostrarReporteEnPagina = (resultado) => {
  const contenidoDiv = document.getElementById('contenido-reporte');
  
  if (!contenidoDiv) {
    console.error('No se encontró el elemento para mostrar el reporte');
    return;
  }
  
  // 🔹 Generamos el reporte de texto
  const reporteTexto = resultado.map(
    ({ direccion, paquetes }) => `📦 ${direccion}: ${paquetes} paquetes`
  ).join('\n');
  
  // 🔹 Template literals para generar HTML completo
  const contenidoHTML = `
    <div class="mb-4">
      <h6 class="text-muted mb-3">📋 Reporte de Entregas:</h6>
      <pre class="bg-light p-3 rounded border" style="white-space: pre-wrap; font-family: inherit;">${reporteTexto}</pre>
    </div>
    
    <div>
      <h6 class="text-muted mb-3">📊 Tabla Detallada:</h6>
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Posición</th>
            <th>Dirección</th>
            <th>Total Paquetes</th>
          </tr>
        </thead>
        <tbody>
          ${resultado.map((entrega, index) => {
            const posicion = index + 1;
            const emoji = posicion === 1 ? '🥇' : posicion === 2 ? '🥈' : posicion === 3 ? '🥉' : '📦';
            
            return `
              <tr>
                <td>${emoji} ${posicion}º</td>
                <td>${entrega.direccion}</td>
                <td><span class="badge bg-primary">${entrega.paquetes}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  contenidoDiv.innerHTML = contenidoHTML;
};

// 🔹 Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
