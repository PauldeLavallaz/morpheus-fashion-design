# Morpheus Fashion Design

AI skill for generating professional fashion and product advertising images using ComfyDeploy's Morpheus Fashion Design workflow.

## Installation

### Using skills.sh (recommended for AI agents)

```bash
npx skills add PauldeLavallaz/morpheus-fashion-design
```

### Using npm

```bash
npm install -g morpheus-fashion-design
```

### Manual

Copy the `morpheus-fashion-design/` folder to your agent's skills directory.

## Requirements

- Python 3.10+ with `uv` package manager
- ComfyDeploy API key (`COMFY_DEPLOY_API_KEY`)
- Gemini API key (`GEMINI_API_KEY`)

## Usage

### As an AI Skill

The skill is automatically loaded by compatible AI agents. Just describe what you want:

> "Generate a fashion ad for this jacket with a model in an urban setting"

The agent will use the skill's workflow to create professional advertising images.

### As a CLI

```bash
npx morpheus-fashion-design \
  --product "path/to/product.jpg" \
  --model "path/to/model-face.jpg" \
  --brief "Campaign description..." \
  --target "Target audience..." \
  --aspect-ratio "4:5" \
  --output "output.png"
```

## Features

- Professional fashion/product photography generation
- Model face consistency across images
- Product integration and placement
- Multiple style packs (editorial, street, premium, etc.)
- Configurable camera, lighting, and environment settings
- Brand logo integration

## Skill Structure

```
morpheus-fashion-design/
├── SKILL.md          # Instructions for AI agents
└── scripts/
    └── generate.py   # Generation script
```

## License

MIT
