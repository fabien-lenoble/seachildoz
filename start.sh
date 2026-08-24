#!/bin/bash

# 🚀 SEACHILDOZ - Quick Start Script

echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo "🎨 SEACHILDOZ - Manon Le Bihan Creative Website"
echo "═══════════════════════════════════════════════════════════════════════"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

echo "🚀 Starting development server..."
echo ""
echo "   Local:   http://localhost:5173/"
echo "   Network: use --host to expose"
echo ""
echo "   📝 Press Ctrl+C to stop"
echo "   💾 Changes are automatically hot-reloaded"
echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo ""

npm run dev
