<!-- hide -->
# Daily Mood Tracker (React Native + TypeScript)
<!-- endhide -->

<p align="center">
  <!-- Reemplaza la ruta del GIF si subes uno propio -->
  <img height="450" src="https://github.com/4GeeksAcademy/daily-mood-tracker-with-react-native/blob/main/preview.gif?raw=true" />
</p>

Crea una aplicación móvil que permita a los usuarios registrar su estado de ánimo diario (😃 Feliz, 😐 Neutral, 😢 Triste), visualizar su estado actual y un historial reciente.

<onlyfor saas="false" withBanner="false">
  
## 🌱 Cómo comenzar este proyecto

Crea el proyecto con TypeScript usando Expo:

```bash
npx create-expo-app@latest mood-tracker --template blank-typescript
cd mood-tracker
npm run start
```

> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

</onlyfor>

## 📝 Instrucciones:

- La app debe permitir **seleccionar un estado de ánimo** tocando un emoji (😃, 😐, 😢).
- Debe mostrarse **el estado actual de hoy** (por ejemplo: “Hoy te sientes: 😃 Happy”).
- Debe existir un **historial** que liste los últimos estados con **hora legible**.
- Cuando **no haya registros**, mostrar un mensaje: “No hay registros todavía”.
- Incluir un botón para **reiniciar el historial** (limpiar lista y estado actual).
- **No** uses fetch ni APIs externas; trabaja solo con estado local (`useState`) y efectos (`useEffect`).
- Renderiza el historial con **`FlatList`** y claves estables.
- Aplica **renderizado condicional** (sin estado actual vs. con estado, lista vacía vs. con datos).

## 💡 Tips para terminar este proyecto

No te pongas con el código de inmediato; primero diseña una estrategia:

- ¿Qué **estados** vas a necesitar? (p. ej., `currentMood`, `history`).
- ¿Qué **acciones** tendrá el usuario? (seleccionar estado, reiniciar).
- ¿Cómo y **cuándo** usarás `useEffect`?  
  - Uno al **montar** (logs/diagnóstico).  
  - Otro **cuando cambie** `currentMood` para **agregar al historial**.
- Usa **tipos** en TypeScript para los registros (`MoodEntry`) y valores base (`MoodBase`).
- Piensa en **accesibilidad**: botones con `accessibilityLabel`.

