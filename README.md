<!-- hide -->
# Daily Mood Tracker (React Native + TypeScript)
<!-- endhide -->

<p align="center">
    <!-- Replace the GIF path if you upload your own -->
    <img height="450" src="https://github.com/4GeeksAcademy/daily-mood-tracker-with-react-native/blob/main/preview.gif?raw=true" />
</p>

Create a mobile app that allows users to record their daily mood (😃 Happy, 😐 Neutral, 😢 Sad), view their current mood, and see a recent history.

<onlyfor saas="false" withBanner="false">
    
## 🌱 How to start this project

Create the project with TypeScript using Expo:

```bash
npx create-expo-app@latest mood-tracker --template blank-typescript
cd mood-tracker
npm run start
```

> 💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and pushing your code to your new repository using the `add`, `commit`, and `push` commands from the git terminal.

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

