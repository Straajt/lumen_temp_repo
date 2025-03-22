#!/bin/sh
echo "🔧 Lumen Installer: Starte vollständige Einrichtung..."
mkdir -p /config/lumen_installer_done
cp -r /lumen_assets/blueprints /config/
cp -r /lumen_assets/automation /config/
cp -r /lumen_assets/scripts /config/
cp -r /lumen_assets/packages /config/
echo "language: deutsch\ntts_voice: Vicki\nmicrophone: M5Stack Echo" > /config/lumen_installer_done/lumen_config.yaml
echo "✅ Lumen Setup abgeschlossen!"
touch /config/lumen_installer_done/ok
