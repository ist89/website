import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			surface: {
  				DEFAULT: 'rgba(255, 255, 255, 0.03)',
  				light: 'rgba(255, 255, 255, 0.08)',
  				glass: 'rgba(17, 24, 39, 0.7)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				glow: '#60a5fa',
  				dark: '#1d4ed8',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			space: {
  				void: '#0a0a0a',
  				starlight: '#f8fafc',
  				nebula: 'rgba(59, 130, 246, 0.1)'
  			},
  			text: {
  				primary: '#f8fafc',
  				secondary: '#94a3b8',
  				muted: '#64748b'
  			},
  			divider: 'rgba(255, 255, 255, 0.05)',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-sora)',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  			'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #3b82f6 0deg, #475569 180deg, #1e293b 360deg)'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
