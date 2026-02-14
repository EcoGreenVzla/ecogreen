---

# 📑 Guía de Mantenimiento y Uso de Knip

Este documento describe cómo utilizar **Knip** para identificar y eliminar código muerto, archivos huérfanos y dependencias no utilizadas en el proyecto **ecogreen-tumuro**.

## 🚀 Comandos Rápidos

| Comando | Acción |
| --- | --- |
| `npx knip` | Análisis completo (Archivos, exportaciones y dependencias). |
| `npx knip --files` | Lista solo archivos que no están siendo importados por nadie. |
| `npx knip --dependencies` | Lista librerías en `package.json` que no se usan en el código. |
| `npx knip --fix` | Intenta eliminar automáticamente exportaciones no usadas. |

---

## 🔍 Guía de Lectura de Reportes (Debugging)

Cuando ejecutas un análisis, Knip organiza los resultados en categorías. Aquí explicamos cómo interpretarlos para evitar errores:

### 1. Unused files (Archivos no usados)

* **Diagnóstico:** El archivo no tiene conexiones. No existe ningún `import` hacia él desde `main.tsx`.
* **Solución:** Si el archivo es una página o componente que debería estar activo, verifica que esté declarado en las rutas de la aplicación o importado en su componente padre.

### 2. Unused exports / types (Exportaciones y Tipos)

* **Diagnóstico:** El archivo se usa, pero una función, variable o interfaz `exportada` dentro de él no se usa en ningún otro lugar.
* **Solución:** Elimina la palabra clave `export` si solo se usa internamente en ese archivo, o borra la definición si es código obsoleto.

### 3. Unused dependencies (Dependencias)

* **Diagnóstico:** Librerías instaladas que no aparecen en el código fuente.
* **Alerta:** Algunas librerías de configuración (como los plugins de Vite) pueden aparecer aquí. Verifica antes de desinstalar.

---

## 🛠️ Casos de Uso Avanzado

### Parámetros Útiles para Debugging:

* `--include files,dependencies`: Filtra el reporte para enfocarse solo en lo más crítico.
* `--reporter compact`: Ideal para una vista rápida si el reporte es muy largo.
* `--no-progress`: Útil en entornos de Integración Continua (CI) para limpiar los logs.

### Cómo ignorar falsos positivos:

Si un archivo es necesario pero se carga de forma dinámica (y Knip no lo detecta), añade este comentario al inicio del archivo o sobre la línea específica:

```typescript
// @knip-ignore
export const MiComponenteDinamico = ...

```

---

## ⚠️ Checklist antes de limpiar

1. **Commit de seguridad:** Nunca borres archivos masivamente sin tener un commit limpio en Git.
2. **Revisar Casos de Obras:** Durante el desarrollo, muchos componentes de "Casos de Obras" aparecerán como no usados hasta que se termine la lógica de datos. **No los borres si están en desarrollo.**

---
