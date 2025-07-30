# 📊 ADmyBRAND Insights - Analytics Dashboard

A modern, responsive analytics dashboard for digital marketing agencies with stunning visualizations and real-time data insights.

## ✨ Features

- **Interactive Charts**: Line charts, bar charts, and pie charts
- **Real-time Data**: Auto-refresh functionality with live data updates
- **50+ Campaign Entries**: Comprehensive dataset with pagination (15 per page)
- **Dark/Light Theme**: Complete theme switching with system preference support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Data Table**: Sortable, filterable campaign performance table with search
- **Modern UI**: Smooth animations, loading states, and gradient designs

## � Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bharatsirvi/AnalyticDashboard.git
   cd AnalyticDashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

- **Next.js 15.4.5** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Recharts** - Data visualization library
- **next-themes** - Theme switching

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── charts.tsx        # Chart components
│   ├── data-table.tsx    # Data table component
│   ├── header.tsx        # Navigation header
│   └── metric-card.tsx   # Metric display cards
└── lib/                  # Utilities and data
    ├── data.ts           # Mock data generation
    └── utils.ts          # Helper functions
```
