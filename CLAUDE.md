# Workfulness

Consultoría boutique chilena en liderazgo consciente, coaching organizacional y mindfulness aplicado a empresas. Posicionamiento: **Arquitectura Interna del Liderazgo (AIL™)**.

## Stack
- HTML5 + CSS3 + JS vanilla (sin frameworks)
- Single-page con navegación por anclas (#ail, #programas, #clientes, #alianza, #equipo, #contacto)
- Deploy: Vercel auto-deploy desde rama `main`

## Estructura
```
.
├── index.html           ← landing completa, todo inline (CSS y JS)
├── assets/
│   ├── workfulness-logo-full.png
│   ├── workfulness-mark.png
│   └── workfulness-wordmark.png
├── vercel.json          ← security headers (no tocar sin revisar)
├── .gitignore
└── CLAUDE.md            ← este archivo
```

## Sistema visual (forest-graphite-paper)
- **Tipografías**: Fraunces (serif display) + Inter Tight (sans body) — pareja, no se mezclan
- **Forest** `#506058` — brand primary (sage muted del logo, nunca lime ni emerald)
- **Graphite** `#484848` — texto principal
- **Paper** `#f7f5f0` y **Bone** `#fbfaf6` — fondos cálidos (NUNCA `#fff` puro)
- **Forest-900** `#2a3530` — fondo deep (sección AIL inverse, contacto)
- **Líneas** `#e0ddd5` hairline
- Radio: 8-10px en cards, 6px botones, sharp en inputs
- Sombras casi inexistentes — solo bordes 1px y elevación sutil en hover
- Sin emoji nunca · sin signos de exclamación marketing

## Voz
- **Español Chile**, plural ("acompañamos", "diseñamos", "trabajamos")
- Sentence case en titulares · Title Case solo en nombres propios (Modelo AIL™, Plum Village, Cristina Cama García)
- Verbos de acción y discernimiento: acompañamos, sostenemos, observamos, diseñamos, fortalecemos
- **Modelo AIL™** siempre con la marca registrada (™)
- ✗ NO wellness-speak ("armonía", "energía", "florecer", "vibra alto")
- ✗ NO espiritual / místico / hippie
- ✗ NO emoji, NO unicode glyphs como iconos (excepto ™)
- ✗ NO colores naranjo / coral / terracota / clay / pastel mint

## Convenciones
- Eyebrow: 12px uppercase + barra horizontal 24×1px en `--forest-600`
- Sección padding: 140px (compacta 104px) — **mucho aire** es requisito
- Container: 1240px max
- Grid: 60/40 o 50/50 splits — no centrar todo
- Animaciones: `cubic-bezier(.22,.61,.36,1)` — no bounces
- Reveal on scroll con IntersectionObserver — clase `.reveal` y `.reveal-stagger`

## Contenido pendiente (antes de publicar)
- Reemplazar placeholders de fotos: Christian @ Plum Village, entorno Plum Village, práctica contemplativa, Christian + Cristina Cama García, retratos Christian y Paula
- Logos reales de Sodimac, Menzies Aviation y Agunsa (actualmente en serif tipográfico)
- Verificar email/teléfono finales en sección Contacto y Footer
