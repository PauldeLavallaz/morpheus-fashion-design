# Morpheus Fashion Design

AI skill for generating professional fashion and product advertising images using ComfyDeploy's Morpheus Fashion Design workflow.

## Installation

### For Clawdbot users

```bash
clawdhub install morpheus-fashion-design
```

### For Claude Code / other AI agents

```bash
# Install globally
npm install -g @morfeo/morpheus-fashion-design

# Or run directly with npx
npx @morfeo/morpheus-fashion-design --help
```

### Manual installation

Copy the `SKILL.md` and `scripts/` folder to your agent's skills directory.

## Requirements

- Python 3.10+ with `uv` package manager
- ComfyDeploy API key (`COMFY_DEPLOY_API_KEY`)
- Gemini API key (`GEMINI_API_KEY`)

## Usage

### As a CLI

```bash
morpheus-fashion-design \
  --product "path/to/product.jpg" \
  --model "path/to/model-face.jpg" \
  --brief "Campaign description..." \
  --target "Target audience..." \
  --aspect-ratio "4:5" \
  --output "output.png"
```

### As an AI Skill

The skill is automatically loaded by compatible AI agents. Just describe what you want:

> "Generate a fashion ad for this jacket with a model in an urban setting"

The agent will use the skill's workflow to create professional advertising images.

## Features

- Professional fashion/product photography generation
- Model face consistency across images
- Product integration and placement
- Multiple style packs (editorial, street, premium, etc.)
- Configurable camera, lighting, and environment settings
- Brand logo integration

## API Keys Setup

Set these environment variables:

```bash
export COMFY_DEPLOY_API_KEY="your-key"
export GEMINI_API_KEY="your-key"
```

Or pass them via the CLI:

```bash
morpheus-fashion-design --api-key "your-key" ...
```

## License

MIT
