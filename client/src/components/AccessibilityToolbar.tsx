import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import {
  Accessibility,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  Play,
  Pause,
  Square,
} from "lucide-react";

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isHighContrast,
    fontScale,
    isSpeaking,
    isListening,
    speechRate,
    speechVolume,
    toggleHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    speak,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
    setSpeechRate,
    setSpeechVolume,
  } = useAccessibility();

  const readCurrentPage = () => {
    const mainContent = document.querySelector("main") || document.body;
    const textContent = mainContent.innerText || "";
    const cleanText = textContent.replace(/\s+/g, " ").trim();
    speak(cleanText);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          data-testid="button-accessibility-toolbar"
          aria-label="Open accessibility toolbar"
        >
          <Accessibility className="h-5 w-5" />
          {(isHighContrast || fontScale !== 100 || isSpeaking || isListening) && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Accessibility className="h-4 w-4" />
              Accessibility Controls
            </h3>
            <p className="text-sm text-muted-foreground">
              Customize your experience for better accessibility
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Text-to-Speech</Label>
              {isSpeaking && <Badge variant="secondary" className="text-xs">Speaking</Badge>}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={readCurrentPage}
                disabled={isSpeaking}
                data-testid="button-tts-play"
                aria-label="Read current page"
              >
                <Play className="h-4 w-4 mr-1" />
                Read Page
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={isSpeaking ? pauseSpeaking : resumeSpeaking}
                disabled={!isSpeaking}
                data-testid="button-tts-pause"
                aria-label="Pause speech"
              >
                <Pause className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={stopSpeaking}
                disabled={!isSpeaking}
                data-testid="button-tts-stop"
                aria-label="Stop speech"
              >
                <Square className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Speech Speed</Label>
              <Slider
                value={[speechRate]}
                onValueChange={(values) => setSpeechRate(values[0])}
                min={0.5}
                max={2}
                step={0.1}
                className="w-full"
                data-testid="slider-speech-rate"
                aria-label="Adjust speech speed"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Slow</span>
                <span>{speechRate.toFixed(1)}x</span>
                <span>Fast</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs">Speech Volume</Label>
              <Slider
                value={[speechVolume]}
                onValueChange={(values) => setSpeechVolume(values[0])}
                min={0}
                max={1}
                step={0.1}
                className="w-full"
                data-testid="slider-speech-volume"
                aria-label="Adjust speech volume"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Quiet</span>
                <span>{Math.round(speechVolume * 100)}%</span>
                <span>Loud</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-3 space-y-3">
            <Label className="text-sm font-medium">Visual Adjustments</Label>

            <div className="space-y-2">
              <Label className="text-xs">Font Size</Label>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decreaseFontSize}
                  disabled={fontScale <= 80}
                  data-testid="button-font-decrease"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <div className="flex-1 text-center">
                  <Badge variant="secondary">{fontScale}%</Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={increaseFontSize}
                  disabled={fontScale >= 150}
                  data-testid="button-font-increase"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetFontSize}
                  data-testid="button-font-reset"
                  aria-label="Reset font size"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              variant={isHighContrast ? "default" : "outline"}
              size="sm"
              className="w-full"
              onClick={toggleHighContrast}
              data-testid="button-high-contrast"
              aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
              aria-pressed={isHighContrast}
            >
              <Eye className="h-4 w-4 mr-2" />
              {isHighContrast ? "High Contrast: ON" : "High Contrast: OFF"}
            </Button>
          </div>

          <div className="border-t pt-3">
            <p className="text-xs text-muted-foreground">
              Use Tab key to navigate, Enter to activate, and Esc to close dialogs.
              All form fields support speech-to-text when microphone button is clicked.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
