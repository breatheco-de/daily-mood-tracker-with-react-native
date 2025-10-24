<!-- hide -->
# Daily Mood Tracker with React Native
<!-- endhide -->

<p align="center">
  <img height="450" src="https://github.com/breatheco-de/daily-mood-tracker-with-react-native/blob/main/assets/img-mood-tracker.png?raw=true" />
</p>

Crea una aplicación móvil que permita a los usuarios registrar su estado de ánimo diario (😃 Feliz, 😐 Neutral, 😢 Triste), visualizar su estado actual y un historial reciente.

<onlyfor>
  
## 🌱 Cómo comenzar este proyecto

1. Clona la siguiente plantilla en tu computadora

```bash
https://github.com/breatheco-de/react-native-cli-hello
```

2. Instala dependencias

```bash
npm install
```

3. Si es la primera vez que se ejecuta el proyecto, instalar dependencias de cocoapods

```sh
bundle install
```

Luego, cada vez que se actualicen estas dependencias, ejecutar:

```sh
bundle exec pod install
```

4. Iniciar servidor de prueba local (Metro server)
```sh
npx react-native start --reset-cache
```

### Correr el proyecto en Android
```sh
npm run android
```
### Correr el proyecto en iOS

Ejecutar cocoapods
```sh
cd ios
pod install
```

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

