import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (near-black / charcoal)
        ink: {
          950: "#06070A", // page base
          900: "#0A0C12", // deep surface
          850: "#0E1018", // surface
          800: "#141722", // raised surface
          700: "#1B1F2E", // border-strong
          600: "#272C3D", // border
        },
        // Typography
        chalk: {
          DEFAULT: "#F4F2EC", // warm white primary text
          muted: "#A7A6A0", // soft neutral secondary
          faint: "#6B6A66", // tertiary / captions
        },
        // Accent — singular sophisticated accent
        accent: {
          DEFAULT: "#C8A24B", // refined gold
          soft: "#E2C77E",
          deep: "#9A7A2E",
          glow: "rgba(200,162,75,0.16)",
        },
        // Secondary accent — cool desaturated steel (used sparingly)
        steel: {
          DEFAULT: "#7E8AA2",
          soft: "#A6B0C2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.32em",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      boxShadow: {
        surface: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -28px rgba(0,0,0,0.8)",
        glow: "0 0 0 1px rgba(200,162,75,0.25), 0 18px 50px -20px rgba(200,162,75,0.25)",
        lift: "0 30px 70px -30px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(60% 50% at 50% 0%, rgba(200,162,75,0.12) 0%, rgba(200,162,75,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
