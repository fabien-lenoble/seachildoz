#!/bin/bash

# 🔧 Initialize GitHub repository for SEACHILDOZ

echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo "🔧 SEACHILDOZ - GitHub Repository Setup"
echo "═══════════════════════════════════════════════════════════════════════"
echo ""

# Check if repo name is provided
if [ -z "$1" ]; then
    echo "❌ Usage: ./setup-github.sh YOUR_USERNAME"
    echo ""
    echo "Example:"
    echo "  ./setup-github.sh john-doe"
    echo ""
    echo "This will push to:"
    echo "  https://github.com/john-doe/seachildoz"
    echo ""
    exit 1
fi

USERNAME="$1"
REPO_NAME="seachildoz"
REMOTE_URL="https://github.com/$USERNAME/$REPO_NAME.git"

echo "📋 Setting up repository for: $USERNAME"
echo "🔗 Remote URL: $REMOTE_URL"
echo ""

# Initialize git
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "feat: Initial commit - Seachildoz creative website"
    echo "✅ Repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Add remote
echo "🔗 Adding remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"

echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo "✅ Repository setup complete!"
echo "═══════════════════════════════════════════════════════════════════════"
echo ""
echo "📚 Next steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: seachildoz"
echo "   - Description: Art Director Portfolio - Personal Creative Universe"
echo "   - Public (recommended for GitHub Pages)"
echo "   - DO NOT add README, .gitignore, or license (we already have them)"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Configure GitHub Pages:"
echo "   - Go to https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages / root"
echo "   - Wait 1-2 minutes for build"
echo ""
echo "4. Site will be live at:"
echo "   https://$USERNAME.github.io/$REPO_NAME/"
echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo ""
