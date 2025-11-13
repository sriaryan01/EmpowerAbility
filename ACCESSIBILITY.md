# EmpowerAbility - Accessibility Features

## Overview

EmpowerAbility is designed with comprehensive accessibility features to ensure Persons with Disabilities (PwDs) can easily access and use all application features.

## Accessibility Features

### 1. Text-to-Speech (TTS)
- **Read Page**: Click the accessibility toolbar and select "Read Page" to have all content on the current page read aloud
- **Adjustable Speed**: Control speech speed from 0.5x to 2x
- **Volume Control**: Adjust speech volume from 0% to 100%
- **Pause/Resume**: Pause and resume speech at any time
- **Browser Support**: Uses Web Speech API (supported in Chrome, Edge, Safari)

### 2. Speech-to-Text (STT)
- **Voice Input**: Microphone icon appears next to form fields for voice-based input
- **Real-time Transcription**: Speak naturally and see text appear in form fields
- **Form Fields Supported**: All text inputs including login, registration, and application forms
- **Browser Support**: Uses Web Speech Recognition API (Chrome, Edge recommended)

### 3. High-Contrast Mode
- **Toggle**: Enable/disable high-contrast mode from accessibility toolbar
- **Enhanced Visibility**: Black/white color scheme with 2px borders on all interactive elements
- **Persistent**: Preference saved to browser localStorage
- **Automatic Adjustment**: All UI elements automatically adapt to high-contrast mode

### 4. Font Size Controls
- **Increase**: Increase font size up to 150% (10% increments)
- **Decrease**: Decrease font size down to 80% (10% increments)
- **Reset**: Return to default 100% size
- **Responsive**: All layouts scale proportionally with font size changes
- **Persistent**: Preference saved to browser localStorage

### 5. Keyboard Navigation
- **Tab Navigation**: Navigate through all interactive elements using Tab key
- **Enter to Activate**: Activate buttons, links, and controls with Enter key
- **Escape to Close**: Close dialogs and popups with Escape key
- **Skip to Content**: Press Tab on page load to reveal "Skip to main content" link
- **Focus Indicators**: Visible 2px outline on all focused elements

### 6. ARIA Labels and Semantic HTML
- **Screen Reader Support**: All interactive elements have descriptive ARIA labels
- **Semantic Structure**: Proper use of `<main>`, `<nav>`, `<header>`, `<article>` tags
- **Form Labels**: All form inputs properly associated with labels
- **Button Descriptions**: Clear aria-label attributes on icon-only buttons
- **Live Regions**: Status updates announced to screen readers

### 7. Alt Text for Images
- **Descriptive Text**: All images include meaningful alt text
- **Category Icons**: Each scheme category icon has descriptive alt text
- **Hero Images**: Main hero image includes context description
- **Decorative Images**: Decorative images marked as presentation role

### 8. Large Buttons & Simple Layout
- **Button Sizing**: All primary buttons use large size (min-h-10, px-6, py-3)
- **Touch Targets**: Minimum 44x44px touch targets for all interactive elements
- **Clear Spacing**: Consistent spacing between elements (gap-4, gap-6)
- **Simple Navigation**: Clear visual hierarchy and straightforward navigation
- **Reduced Cognitive Load**: Minimal simultaneous actions per screen

## How to Use Accessibility Features

### For Users

1. **Open Accessibility Toolbar**
   - Click the accessibility icon (♿) in the top-right corner of the navigation bar
   - The toolbar shows all available accessibility controls

2. **Enable Text-to-Speech**
   - Click "Read Page" button to hear page content
   - Adjust speech speed and volume using sliders
   - Use pause/stop buttons to control playback

3. **Use Voice Input**
   - Click the microphone icon (🎤) next to any text field
   - Speak clearly when the icon turns blue and pulses
   - Your speech will be converted to text automatically

4. **Adjust Visual Settings**
   - Use +/- buttons to increase/decrease font size
   - Click "High Contrast: OFF" to enable high-contrast mode
   - Settings are saved automatically

5. **Navigate with Keyboard**
   - Press Tab to move between elements
   - Press Enter to click buttons and links
   - Press Escape to close dialogs
   - Press Tab on page load for skip link

### For Developers

#### AccessibilityContext

The `AccessibilityContext` provides centralized state management for all accessibility features:

```tsx
import { useAccessibility } from "@/contexts/AccessibilityContext";

function MyComponent() {
  const {
    isHighContrast,
    fontScale,
    isSpeaking,
    isListening,
    speak,
    startListening,
    toggleHighContrast,
    increaseFontSize,
  } = useAccessibility();
  
  // Use accessibility features
}
```

#### Adding Speech-to-Text to Form Fields

```tsx
import SpeechToTextButton from "@/components/SpeechToTextButton";

<div className="relative">
  <Input
    value={fieldValue}
    onChange={(e) => setFieldValue(e.target.value)}
  />
  <div className="absolute right-0 top-0">
    <SpeechToTextButton
      onTranscript={(text) => setFieldValue(text)}
      label="Voice input for field name"
    />
  </div>
</div>
```

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| Text-to-Speech | ✅ | ✅ | ✅ | ✅ |
| Speech-to-Text | ✅ | ✅ | ❌ | ❌ |
| High-Contrast | ✅ | ✅ | ✅ | ✅ |
| Font Scaling | ✅ | ✅ | ✅ | ✅ |
| Keyboard Nav | ✅ | ✅ | ✅ | ✅ |
| Screen Readers | ✅ | ✅ | ✅ | ✅ |

**Recommended Browsers**: Chrome or Edge for full feature support

## WCAG 2.1 Compliance

EmpowerAbility meets WCAG 2.1 Level AA standards:

- ✅ **Perceivable**: Alt text, high-contrast, resizable text
- ✅ **Operable**: Keyboard navigation, sufficient time, clear focus
- ✅ **Understandable**: Clear labels, consistent navigation, input assistance
- ✅ **Robust**: Semantic HTML, ARIA labels, cross-browser compatibility

## Screen Reader Testing

Tested with:
- **NVDA** (Windows) - Full compatibility
- **JAWS** (Windows) - Full compatibility
- **VoiceOver** (macOS/iOS) - Full compatibility
- **TalkBack** (Android) - Full compatibility

## Keyboard Shortcuts Reference

| Action | Shortcut |
|--------|----------|
| Skip to main content | Tab (on page load) |
| Navigate forward | Tab |
| Navigate backward | Shift + Tab |
| Activate element | Enter or Space |
| Close dialog | Escape |
| Open accessibility toolbar | Click accessibility icon |

## Support and Feedback

If you encounter any accessibility issues or have suggestions for improvement:
- Contact support via the application
- All feedback helps us improve accessibility for everyone

## Future Enhancements

Planned accessibility improvements:
- Multi-language support (Hindi, regional languages)
- Dyslexia-friendly fonts option
- Color blindness modes
- Gesture controls for mobile
- Enhanced voice commands
