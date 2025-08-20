# 🚚 ExpressGo - Sistema de Reportes de Entregas

## 📋 Descripción

ExpressGo es un sistema de optimización de rutas para empresas de reparto que procesa listas de entregas, elimina duplicados, suma paquetes por dirección y genera reportes ordenados por prioridad.

## ✨ Características

- 🔄 **Procesamiento inteligente**: Elimina direcciones duplicadas y suma paquetes
- 📊 **Ordenamiento por prioridad**: Las rutas con más paquetes aparecen primero
- 📱 **Interfaz web moderna**: Diseño responsive con Bootstrap
- 🌐 **Compatibilidad universal**: Funciona en navegadores modernos y antiguos
- ⚡ **Transpilación automática**: ES6+ a ES5 con Webpack y Babel

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+** - Código moderno con características avanzadas
- **Webpack 5** - Empaquetador y bundler
- **Babel** - Transpilador de ES6+ a ES5
- **Bootstrap 5** - Framework CSS para el diseño
- **Core-js** - Polyfills para compatibilidad con navegadores antiguos

## 📦 Instalación

### Prerrequisitos

- **Node.js** versión 14 o superior
- **npm** (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

## 🚀 Ejecución

### Desarrollo

Para iniciar el servidor de desarrollo con recarga automática:

```bash
npm start
```

El proyecto estará disponible en: **http://localhost:8080**

### Construcción para producción

Para generar los archivos optimizados:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Desarrollo con watch mode

Para desarrollo con recarga automática al detectar cambios:

```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
project/
├── src/
│   ├── index.js          # Lógica principal de la aplicación
│   └── data.js           # Datos de ejemplo de entregas
├── dist/                 # Archivos compilados (generados automáticamente)
├── index.html            # Página principal
├── webpack.config.js     # Configuración de Webpack
├── babel.config.json     # Configuración de Babel
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye el proyecto para producción |
| `npm run dev` | Desarrollo con watch mode |

## 📊 Funcionalidades del Sistema

### Algoritmo de Procesamiento

1. **Eliminación de duplicados**: Agrupa entregas por dirección
2. **Suma de paquetes**: Combina cantidades de la misma dirección
3. **Ordenamiento por prioridad**: Ordena de mayor a menor cantidad de paquetes
4. **Generación de reportes**: Crea reportes legibles en texto y tabla

### Características ES6+ Implementadas

- ✅ Variables `let` y `const`
- ✅ Funciones flecha con parámetros por defecto
- ✅ Template literals
- ✅ Destructuring de objetos y arrays
- ✅ Spread/Rest operators
- ✅ Map para gestión de datos
- ✅ Async/await para operaciones asíncronas
- ✅ Promesas

## 🌐 Compatibilidad de Navegadores

El proyecto es compatible con:
- ✅ Chrome (versión 60+)
- ✅ Firefox (versión 55+)
- ✅ Safari (versión 12+)
- ✅ Edge (versión 79+)
- ✅ Internet Explorer 11+

## 📝 Datos de Ejemplo

El sistema procesa datos en el siguiente formato:

```javascript
const entregas = [
  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
  { direccion: "Calle Falsa 123", paquetes: 2 },
  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
  { direccion: "Calle Falsa 123", paquetes: 1 }
];
```

## 🔍 Solución de Problemas

### Error: "Cannot find module"
```bash
npm install
```

### Puerto 8080 ocupado
Modifica el puerto en `webpack.config.js`:
```javascript
devServer: {
  port: 3000  // Cambia a otro puerto disponible
}
```

### Error de compilación
Verifica que tienes Node.js 14+ instalado:
```bash
node --version
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte del Bootcamp de Desarrollo Front-end.

---

## 🎯 Objetivos del Proyecto

Este proyecto demuestra:
- Implementación de algoritmos de procesamiento de datos
- Uso de características modernas de JavaScript
- Configuración de herramientas de build modernas
- Compatibilidad con navegadores antiguos
- Generación de reportes legibles y útiles

¡Disfruta optimizando las rutas de ExpressGo! 🚀
