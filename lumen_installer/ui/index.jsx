
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Loader2 } from "lucide-react";

export default function LumenInstaller() {
  const [step, setStep] = useState(0);
  const [installing, setInstalling] = useState(false);

  const steps = [
    "Willkommen bei Lumen 🧠",
    "Benötigte Add-ons",
    "YAML & Sprach-Setup",
    "Fertigstellung 🎉"
  ];

  const handleNext = () => {
    if (step === steps.length - 1) return;
    setInstalling(true);
    setTimeout(() => {
      setStep(step + 1);
      setInstalling(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Lumen Installer</h1>

      <Card className="w-full max-w-xl bg-gray-900 border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="text-lg font-medium">{steps[step]}</div>

          {step === 0 && (
            <div className="space-y-2">
              <p>Schön, dass du da bist! 🧠 Ich bin <strong>Lumen</strong> und helfe dir dabei, deinen persönlichen Sprachassistenten in Home Assistant zu installieren.</p>
              <p>Nach diesem Setup kannst du mich mit einem Wake-Word aktivieren, Geräte steuern, Sprachrückmeldungen erhalten und vieles mehr.</p>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-2">
              <p><strong>📦 SCHRITT 1: Add-ons & Basisinstallation</strong></p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li><strong>Installiere HACS</strong> (falls noch nicht geschehen)</li>
                <li><strong>Installiere folgende Add-ons</strong> über Supervisor oder HACS:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Studio Code Server</li>
                    <li>File Editor</li>
                    <li>ESPHome (z. B. für M5Stack Echo)</li>
                    <li>WebRTC Camera (für Kamera-TTS)</li>
                    <li>Advanced SSH & Terminal</li>
                    <li><strong>Piper</strong> oder <strong>Amazon Polly</strong> (für TTS)</li>
                    <li><strong>Wyoming OpenWakeWord</strong></li>
                    <li><strong>Wyoming Whisper</strong></li>
                    <li><strong>Voice Assistant</strong> (lokales Wake Word & Intents)</li>
                  </ul>
                </li>
              </ol>
              <p>Alle findest du im <strong>Add-on Store</strong>. Installiere sie vor dem nächsten Schritt.</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <div className="space-y-4 bg-gray-800 p-4 rounded-xl">
                <p className="font-semibold">🗣️ Sprachoptionen</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Bevorzugte Sprache</label>
                    <select className="w-full p-2 bg-gray-700 rounded">
                      <option>Deutsch</option>
                      <option>Englisch</option>
                      <option>Slowakisch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">TTS-Stimme</label>
                    <select className="w-full p-2 bg-gray-700 rounded">
                      <option>Joey (EN)</option>
                      <option>Vicki (DE)</option>
                      <option>Laura (SK)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Mikrofonquelle</label>
                    <select className="w-full p-2 bg-gray-700 rounded">
                      <option>Standard (USB)</option>
                      <option>M5Stack Echo</option>
                      <option>Remote ESP via ESPHome</option>
                    </select>
                  </div>
                </div>
              </div>
              <p>Jetzt richten wir die YAML-Dateien ein: Skripte, Automationen, Intents und Sprachlogik.</p>
              <p>Spracheinstellungen: Englisch, Slowakisch und Deutsch sind vorbereitet.</p>
              <p>Nach dem Abschluss kannst du z. B. sagen: <em>"Hey Lumen, was steht auf meiner Einkaufsliste?"</em></p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Setup abgeschlossen!
              </p>
              <p>Alle Dateien findest du unter <code>/config/</code>. Du kannst die Sprachassistent-Funktionen nun sofort verwenden. 🧠🎙️</p>
              <p>Viel Spaß mit Lumen – deinem intelligenten Begleiter ✨</p>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <Button
              onClick={handleNext}
              disabled={installing || step === steps.length - 1}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {installing ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Weiter...
                </span>
              ) : (
                step === steps.length - 1 ? "Fertig" : (
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Weiter
                  </span>
                )
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
