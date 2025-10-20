<!-- hide -->
# Daily Mood Tracker with React Native
<!-- endhide -->

<p align="center">
    <img height="450" src="https://github.com/breatheco-de/daily-mood-tracker-with-react-native/blob/main/assets/img-mood-tracker.png?raw=true" />
</p>

Create a mobile app that allows users to record their daily mood (😃 Happy, 😐 Neutral, 😢 Sad), view their current mood, and see a recent history.

<onlyfor saas="false" withBanner="false">
    
## 🌱 How to start this project

1. Clone the following template to your computer

```bash
https://github.com/4GeeksAcademy/react-native-hello
```

2. Install dependencies

```bash
npm install
```

3. If this is the first time running the project, install Cocoapods dependencies

```sh
bundle install
```

Then, whenever these dependencies are updated, run:

```sh
bundle exec pod install
```

4. Start the local development server (Metro server)

```sh
npx react-native start --reset-cache
```

### Run the project on Android

```sh
npm run android
```

### Run the project on iOS

Install Cocoapods

```sh
cd ios
pod install
```

</onlyfor>

## 📝 Instructions:

- The app should allow users to **select a mood** by tapping an emoji (😃, 😐, 😢).
- It should display **today's current mood** (e.g.: “Today you feel: 😃 Happy”).
- There should be a **history** listing the latest moods with a **readable time**.
- When **there are no records**, show a message: “No records yet”.
- Include a button to **reset the history** (clear the list and current mood).
- **Do not** use fetch or external APIs; work only with local state (`useState`) and effects (`useEffect`).
- Render the history with **`FlatList`** and stable keys.
- Apply **conditional rendering** (no current mood vs. with mood, empty list vs. with data).

## 💡 Tips to finish this project

Don't jump into coding right away; first design a strategy:

- What **states** will you need? (e.g., `currentMood`, `history`).
- What **actions** will the user have? (select mood, reset).
- How and **when** will you use `useEffect`?  
    - One on **mount** (logs/diagnostics).  
    - Another **when** `currentMood` changes to **add to history**.
- Use **types** in TypeScript for entries (`MoodEntry`) and base values (`MoodBase`).
- Think about **accessibility**: buttons with `accessibilityLabel`.

