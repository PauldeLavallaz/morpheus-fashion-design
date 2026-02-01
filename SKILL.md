# Morpheus Fashion Design

Generate professional fashion/product advertising images using ComfyDeploy's Morpheus Fashion Design workflow.

## Overview

Morpheus Fashion Design is a comprehensive AI workflow for creating high-quality commercial photography with:
- Product integration
- Model face consistency
- Professional lighting and camera settings
- Brand-aligned creative direction

## API Details

**Endpoint:** `https://api.comfydeploy.com/api/run/deployment/queue`
**Deployment ID:** `79324c61-6bd4-4218-a438-73f1b28c24a7`

## Required Inputs

### Images (must be URLs)
1. **product** - Product image URL (the item being advertised)
2. **model** - Model face reference (frontal face photo)
3. **logo** - Brand logo (optional, use placeholder if not needed)

### Creative Brief
1. **brief** - Detailed campaign description including:
   - Scene/location description
   - Model pose and action
   - Product placement and interaction
   - Lighting and mood
   - Camera technique
   - Visual style

2. **target** - Target audience description including:
   - Demographics
   - Psychographics
   - Interests and lifestyle

### Configuration Packs

| Pack | Options |
|------|---------|
| `style_pack` | auto, premium_restraint, editorial_precision, cinematic_realism, cinematic_memory, campaign_hero, product_truth, clean_commercial, street_authentic, archive_fashion, experimental_authorial |
| `shot_pack` | auto, full_body_wide, medium_shot, close_up, low_angle_hero, three_quarter, waist_up, etc. |
| `camera_pack` | auto, arri_alexa35, canon_r5, hasselblad_x2d, leica_m6, sony_a1, etc. |
| `lens_pack` | auto, cooke_anamorphic_i_50, leica_noctilux_50, zeiss_otus_55, etc. |
| `lighting_pack` | auto, golden_hour_backlit, natural_window, studio_three_point, etc. |
| `pose_discipline_pack` | auto, commercial_front_facing, street_style_candid_walk, sport_in_motion, etc. |
| `film_texture_pack` | auto, kodak_portra_400, fujifilm_velvia_50, digital_clean_no_emulation, etc. |
| `color_science_pack` | auto, neutral_premium_clean, warm_golden_editorial, cinematic_low_contrast, etc. |
| `environment_pack` | AUTO, beach_minimal, urban_glass_steel, street_crosswalk, etc. |
| `time_weather_pack` | auto, golden_hour_clear, bright_midday_sun, overcast_winter_daylight, etc. |
| `branding_pack` | logo_none, logo_discreet_lower, logo_top_corner, logo_center_watermark, logo_integrated |
| `intent` | auto, awareness, consideration, conversion, retention |
| `aspect_ratio` | 9:16, 16:9, 1:1, 4:5, 5:4, 3:4, 4:3 |

## Workflow Process

1. **Receive request** with brand/product info
2. **Design brief** aligned with brand identity and campaign goals
3. **Define target audience** with demographics and psychographics
4. **Prepare images**:
   - Download product image(s)
   - Download/find model reference (frontal face)
   - Upload to ComfyDeploy storage to get URLs
5. **Select packs** based on creative direction
6. **Submit job** and poll for completion
7. **Deliver results**

## Usage

```bash
uv run ~/.clawdbot/skills/morpheus-fashion-design/scripts/generate.py \
  --product "path/to/product.jpg" \
  --model "path/to/model-face.jpg" \
  --brief "Campaign brief text..." \
  --target "Target audience description..." \
  --aspect-ratio "4:5" \
  --style-pack "street_authentic" \
  --output "output-filename.png"
```

## Example Brief (Franuí Carnaval)

```
La campaña Franuí Carnaval captura el espíritu festivo y la alegría del carnaval brasileño 
en Copacabana. Una mujer afrobrasileña baila en medio de la multitud, sosteniendo el 
producto Franuí Milk hacia la cámara en un gesto espontáneo y celebratorio. La escena 
está llena de confeti, movimiento y energía. La fotografía adopta un estilo documental 
con motion blur intencional, ángulo bajo que empodera al sujeto, y el producto como 
elemento hero en primer plano. La luz es natural de día tropical, cálida y vibrante.
```

## Example Target (Franuí Carnaval)

```
Jóvenes adultos 18-35, principalmente mujeres pero inclusivo, que celebran la vida, 
la música y los momentos compartidos. Consumidores de experiencias premium que buscan 
productos que se integren naturalmente a sus momentos de disfrute. Activos en redes 
sociales, valoran la autenticidad y la conexión cultural. Mercado: Brasil y LATAM.
```

## Important Notes

### Studio Override
The workflow has an automatic `studio_override` that activates when no location reference is provided. This will use a white cyclorama background regardless of the brief description.

**To get environmental backgrounds:**
1. Provide a `location_ref` image, OR
2. Set `environment_pack` to a specific environment (e.g., `beach_minimal`, `street_crosswalk`)

### Priority Hierarchy
The system follows this priority:
1. Talent (identity preservation) > 
2. Garments (product fidelity) > 
3. Fit > Pose > Style > Location > Branding

## API Key

Set `COMFY_DEPLOY_API_KEY` environment variable or pass via `--api-key`.

The Gemini API key is already configured: `AIzaSyALsNu1lZ6F9NFvRe1Hgb59QGZWpVRttcs`
