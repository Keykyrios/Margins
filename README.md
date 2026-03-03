# MARGINS: FACE REALITY.

> [!IMPORTANT]
> **Stop calculating in your head.** 
> **Stop lying to yourself.**
> **Face the math.**

---

## WHAT IS THIS?

MARGINS is a brutalist attendance calculator designed for the academic trenches. It doesn't sugarcoat your situation. It doesn't offer "gentle reminders." It tells you exactly how many classes you can bunk (or how many you need to attend) before your grade gets cooked.

Built with a Neo-Brutalist aesthetic, it's fast, high-contrast, and emotionally honest.

---

## KEY FEATURES

- **Precision Calculation**: Handles the "Net Gain" math of future attendance. We account for the fact that every class you attend only closes the gap by (100 - Required)%.
- **CAT-MOSPHERE**: Dynamic visual feedback via our "Cat States":
  - **Good**: W. Go touch grass.
  - **Borderline**: Living on the edge.
  - **Cooked**: RIP. Mathematical impossibility or critical debt.
- **Division-by-Zero Guardrails**: Robust logic that prevents the app from breaking when you enter a 100% requirement (which normally leads to infinite series).
- **Quick Actions**: One-click updates for "What if I Attend/Bunk today?" scenarios.

---

## TECH STACK

- **React**: Core logic and state management.
- **Tailwind CSS**: Custom "Brutal" utility classes for that high-contrast look.
- **Dynamic SVGs**: Hand-crafted SVG fallbacks for when the internet is struggling.
- **Neo-Brutalist Design System**: 
  - `Shadows`: 10px 10px 0 0 rgba(0,0,0,1)
  - `Borders`: 6px Solid Black
  - `Typography`: Heavy-weighted, black-letter uppercase headers.

---

## GETTING STARTED

1. **Clone the energy:**
   ```bash
   git clone https://github.com/keykyrios/margins.git
   ```
2. **Open index.html** in any modern browser. (Yes, it's a standalone React implementation for maximum portability).
3. **Face the Stats.** Enter your conducted, attended, and required percentages.

---

## THE MATH BEHIND THE MADNESS

Most people think if they miss 5 classes, they just need to attend 5 classes. **WRONG.**
To reach target %:
$$\text{Classes to Attend} = \left\lceil \frac{\text{Req} \times \text{Conducted} - \text{Attended} \times 100}{100 - \text{Req}} \right\rceil$$

Our engine handles the ceiling functions and edge cases (like requiring 100%) so you don't have to suffer.

---

## BUILT BY

Developed with caffeine and cynical realism by **Mitrajit Ghorui**.

[Portfolio](https://keykyrios.github.io/) | [Face Reality](file:///d:/Projects/MARGINS/index.html)
