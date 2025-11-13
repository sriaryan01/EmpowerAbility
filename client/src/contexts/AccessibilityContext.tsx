import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AccessibilitySettings {
  isHighContrast: boolean;
  fontScale: number;
  isSpeaking: boolean;
  isListening: boolean;
  speechRate: number;
  speechVolume: number;
}

interface AccessibilityContextType extends AccessibilitySettings {
  toggleHighContrast: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  pauseSpeaking: () => void;
  resumeSpeaking: () => void;
  startListening: (onResult: (transcript: string) => void) => void;
  stopListening: () => void;
  setSpeechRate: (rate: number) => void;
  setSpeechVolume: (volume: number) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    isHighContrast: false,
    fontScale: 100,
    isSpeaking: false,
    isListening: false,
    speechRate: 1,
    speechVolume: 1,
  });

  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings((prev) => ({ ...prev, ...parsed }));
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }

    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = true;
        recog.lang = "en-US";
        setRecognition(recog);
      }
    }
  }, []);

  useEffect(() => {
    const { isHighContrast, fontScale, speechRate, speechVolume } = settings;
    localStorage.setItem(
      "accessibility-settings",
      JSON.stringify({ isHighContrast, fontScale, speechRate, speechVolume })
    );

    document.documentElement.classList.toggle("high-contrast", isHighContrast);
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [settings]);

  const toggleHighContrast = () => {
    setSettings((prev) => ({ ...prev, isHighContrast: !prev.isHighContrast }));
  };

  const increaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontScale: Math.min(prev.fontScale + 10, 150),
    }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontScale: Math.max(prev.fontScale - 10, 80),
    }));
  };

  const resetFontSize = () => {
    setSettings((prev) => ({ ...prev, fontScale: 100 }));
  };

  const speak = (text: string) => {
    if (!speechSynthesis || !text) return;

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = settings.speechRate;
    utterance.volume = settings.speechVolume;
    utterance.lang = "en-US";

    utterance.onstart = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: true }));
    };

    utterance.onend = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: false }));
    };

    utterance.onerror = () => {
      setSettings((prev) => ({ ...prev, isSpeaking: false }));
    };

    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setSettings((prev) => ({ ...prev, isSpeaking: false }));
    }
  };

  const pauseSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.pause();
    }
  };

  const resumeSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.resume();
    }
  };

  const startListening = (onResult: (transcript: string) => void) => {
    if (!recognition) {
      console.warn("Speech recognition not supported");
      return;
    }

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      onResult(transcript);
    };

    recognition.onstart = () => {
      setSettings((prev) => ({ ...prev, isListening: true }));
    };

    recognition.onend = () => {
      setSettings((prev) => ({ ...prev, isListening: false }));
    };

    recognition.onerror = () => {
      setSettings((prev) => ({ ...prev, isListening: false }));
    };

    try {
      recognition.start();
    } catch (error) {
      console.error("Speech recognition error:", error);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setSettings((prev) => ({ ...prev, isListening: false }));
    }
  };

  const setSpeechRate = (rate: number) => {
    setSettings((prev) => ({ ...prev, speechRate: rate }));
  };

  const setSpeechVolume = (volume: number) => {
    setSettings((prev) => ({ ...prev, speechVolume: volume }));
  };

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        toggleHighContrast,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        speak,
        stopSpeaking,
        pauseSpeaking,
        resumeSpeaking,
        startListening,
        stopListening,
        setSpeechRate,
        setSpeechVolume,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}
