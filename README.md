# MARGINS

```text
=============================================================
|                                                           |
|                       M A R G I N S                       |
|                                                           |
=============================================================
```

> **CORE PRINCIPLE:** Stop calculating in your head. Stop lying to yourself. Face the math.

---

### [ 01 ] OVERVIEW

MARGINS is a minimalist attendance tracking utility built for high-stakes academic environments. It provides precise calculations on class attendance requirements, removing the guesswork from schedule management.

The interface follows a Neo-Brutalist design language, prioritizing high contrast, raw structural elements, and immediate data clarity.

---

### [ 02 ] SYSTEM LOGIC

The application calculates the exact effort required to maintain or reach a target percentage. 

| Feature | Description |
| :--- | :--- |
| **Precision Analysis** | Accounts for the net gain of future attendance. |
| **Dynamic Feedback** | Visual states (Neutral, Good, Borderline, Critical) based on data. |
| **Edge-Case Safety** | Robust handling for 100% requirements and zero-conducted scenarios. |
| **One-Tap Simulation** | Simulate "Attend" or "Bunk" actions to see immediate impact. |

---

### [ 03 ] THE MATHEMATICS

To reach a target percentage (Req) from current stats (Conducted, Attended):

```text
Classes to Attend = Ceil( (Req * Conducted - Attended * 100) / (100 - Req) )
```

> **Note:** Every future class attended only closes the deficit by (100 - Req)%. The deeper the debt, the steeper the climb.

---

### [ 04 ] TECHNICAL SPECIFICATION

- **Stack**: React / Tailwind CSS / Vanilla JS
- **UI Architecture**: Custom Brutalist component library (Containers, Inputs, Buttons)
- **Visuals**: Dynamic SVG rendering system with fallback logic
- **Design Tokens**:
  - Border: `6px Solid Black`
  - Shadow: `10px 10px 0 0 rgba(0,0,0,1)`
  - Palette: Indigo (Primary), Yellow (Warning), Red (Critical)

---

### [ 05 ] DEPLOYMENT

```bash
# Clone the repository
git clone https://github.com/keykyrios/margins.git

# Execution
# Open index.html in any modern browser. 
# Portable React build, no build steps required for preview.
```

---

```text
+-----------------------------------------------------------+
|  Built by Mitrajit Ghorui.                                |
|                                                           |
+-----------------------------------------------------------+
```

[Portfolio](https://keykyrios.github.io/) 
