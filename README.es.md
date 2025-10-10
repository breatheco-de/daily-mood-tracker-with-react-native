<!-- hide -->
# Daily Mood Tracker with React Native
<!-- endhide -->

<p align="center">
  <img height="450" src="https://github.com/breatheco-de/daily-mood-tracker-with-react-native/blob/main/assets/img-mood-tracker.png?raw=true" />
</p>

Crea una aplicación móvil que permita a los usuarios registrar su estado de ánimo diario (😃 Feliz, 😐 Neutral, 😢 Triste), visualizar su estado actual y un historial reciente.

<onlyfor saas="false" withBanner="false">
  
## 🌱 Cómo comenzar este proyecto

1. Clona la siguiente plantilla en tu computadora

```bash
https://github.com/4GeeksAcademy/react-native-hello
```

2. Instala dependencias

```bash
npm install
```

3. Inicia el proyecto con Expo

```bash
npm run start
```

- **iOS Simulator (macOS):** presiona i o usa npm run ios
- **Android Emulator:** presiona a o usa npm run android
- **Web:** presiona w o usa npm run web
- **Si tu teléfono no conecta por LAN:** `npx expo start --tunnel`

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

