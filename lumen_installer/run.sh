#!/bin/sh

echo "🔧 Lumen Installer: Starte vollständige Einrichtung..."

copy_if_exists() {
  if [ -d "/lumen_assets/$1" ]; then
    echo "📁 Kopiere $1 nach /config/"
    cp -r "/lumen_assets/$1" "/config/"
  else
    echo "⚠️ Ordner /lumen_assets/$1 nicht gefunden – wird übersprungen"
  fi
}

# Kopiere alle Komponenten, wenn vorhanden
for item in blueprints automation scripts packages; do
  copy_if_exists "$item"
done

# Konfiguration schreiben
mkdir -p /config/lumen_installer_done
echo "language: deutsch\nmicrophone: M5Stack Echo\ntts_voice: Vicki" > /config/lumen_installer_done/lumen_config.yaml

echo "✅ Lumen Setup abgeschlossen!"
touch /config/lumen_installer_done/ok
