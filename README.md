# Text to Speech

A modern and responsive Text-to-Speech web application that converts written text into spoken audio using the browser's built-in Web Speech API.

The application allows users to enter text, select from available system voices, and listen to the text being spoken directly in the browser.

## Features

* Convert text into speech
* Select from available browser voices
* Automatically load available voices
* English voice selection by default when available
* Listen and stop speech using the same button
* Character counter with a 1000-character limit
* Speech status indicator
* Empty text validation
* Responsive design for desktop, tablet, and mobile devices
* Keyboard shortcut using Ctrl + Enter
* Modern glassmorphism-inspired user interface
* Smooth animations and transitions
* No external libraries required

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Web Speech API

## Project Structure

```text
text-to-speech/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    └── play.png
```

## How It Works

The application uses the JavaScript `SpeechSynthesis` API provided by modern web browsers.

When the user enters text and clicks the Listen button:

1. The application checks whether text has been entered.
2. The selected voice is assigned to the speech object.
3. The entered text is passed to `SpeechSynthesisUtterance`.
4. The browser's speech synthesis engine converts the text into speech.
5. The status changes to indicate that speech is playing.
6. The user can click the button again to stop the speech.

## Voice Selection

The application retrieves the voices available on the user's device or browser using:

```javascript
window.speechSynthesis.getVoices();
```

Each available voice is displayed in the voice selection dropdown.

The application attempts to select an English voice automatically when one is available.

## Character Counter

The text area has a maximum limit of 1000 characters.

The character counter updates automatically whenever the user enters or removes text.

Example:

```text
245/1000
```

## Keyboard Shortcut

Users can press:

```text
Ctrl + Enter
```

to start the text-to-speech function without clicking the Listen button.

## Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries adjust the layout, spacing, controls, and text area for smaller screens.

## Browser Compatibility

The project depends on the browser's Web Speech API.

Modern versions of browsers such as:

* Google Chrome
* Microsoft Edge
* Safari
* Firefox

generally provide support for speech synthesis, although the available voices may vary depending on the browser and operating system.

## How to Run

No installation or build process is required.

1. Clone or download the project.
2. Open the project folder.
3. Open `index.html` in a supported web browser.
4. Enter text into the text area.
5. Select a voice.
6. Click Listen.

For the best experience, run the project using a local development server such as VS Code Live Server.

## Future Improvements

Possible improvements for future versions include:

* Speech speed control
* Pitch control
* Volume control
* Pause and resume functionality
* Download generated speech as an audio file
* Multiple language support
* Voice search and filtering
* Text history
* Dark and light themes
* Word and sentence counters

## License

This project is created for learning and development purposes. You are free to modify and improve the source code for your own projects.
