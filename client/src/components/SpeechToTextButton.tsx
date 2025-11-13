import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useToast } from "@/hooks/use-toast";

interface SpeechToTextButtonProps {
  onTranscript: (text: string) => void;
  label?: string;
}

export default function SpeechToTextButton({ onTranscript, label = "Voice input" }: SpeechToTextButtonProps) {
  const { isListening, startListening, stopListening } = useAccessibility();
  const { toast } = useToast();
  const [localListening, setLocalListening] = useState(false);

  const handleToggle = () => {
    if (localListening) {
      stopListening();
      setLocalListening(false);
    } else {
      if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
        toast({
          title: "Not Supported",
          description: "Speech recognition is not supported in this browser. Try Chrome or Edge.",
          variant: "destructive",
        });
        return;
      }

      setLocalListening(true);
      startListening((transcript) => {
        onTranscript(transcript);
        setLocalListening(false);
      });
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className={localListening ? "text-primary" : ""}
      data-testid="button-speech-to-text"
      aria-label={label}
      aria-pressed={localListening}
    >
      {localListening ? <Mic className="h-4 w-4 animate-pulse" /> : <MicOff className="h-4 w-4" />}
    </Button>
  );
}
