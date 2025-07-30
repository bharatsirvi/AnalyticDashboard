# 📊 ADmyBRAND Insights - Analytics Dashboard

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Recharts](https://img.shields.io/badge/Recharts-2-8884d8?style=for-the-badge)

A modern, responsive analytics dashboard for digital marketing agencies with stunning visualizations and real-time data insights.

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)

</div>

## 🎯 Overview

ADmyBRAND Insights is a comprehensive analytics dashboard designed specifically for digital marketing agencies. It provides beautiful, interactive visualizations of campaign performance, revenue trends, and key marketing metrics with a focus on user experience and modern design.

## ✨ Key Features

### 📈 **Analytics & Visualizations**
- **Interactive Charts**: Line charts, bar charts, and pie charts using Recharts
- **Real-time Data**: Auto-refresh functionality with live data updates
- **50+ Campaign Entries**: Comprehensive dataset with pagination (15 per page)
- **Performance Metrics**: Revenue, conversions, CTR, CPA tracking
- **Channel Analysis**: Traffic source breakdown and performance comparison

### 🎨 **Modern UI/UX**
- **Dark/Light Theme**: Complete theme switching with system preference support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Micro-interactions, hover effects, and loading states
- **Loading Skeletons**: Beautiful shimmer effects during data loading
- **Gradient Design**: Modern color schemes and visual effects

### 🔧 **Advanced Features**
- **Data Table**: Sortable, filterable campaign performance table
- **Search & Filter**: Advanced filtering by campaign status and search
- **Export Functionality**: CSV export capability
- **Pagination**: Clean navigation through large datasets
- **Auto-refresh**: Configurable real-time data updates

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand-insights.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14+ App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main dashboard page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── skeleton.tsx
│   │   └── table.tsx
│   ├── charts.tsx        # Chart components (Line, Bar, Pie)
│   ├── data-table.tsx    # Advanced data table with pagination
│   ├── header.tsx        # Navigation header
│   ├── metric-card.tsx   # KPI metric cards
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Theme switcher component
└── lib/                  # Utilities and data
    ├── data.ts           # Mock data generation
    └── utils.ts          # Utility functions
```

## 🛠️ Built With

- **[Next.js 15.4.5](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern UI components
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[ESLint](https://eslint.org/)** - Code linting and formatting

## 📊 Features Overview

### Dashboard Components

#### 🎯 **Metric Cards**
- Revenue tracking with trend indicators
- User growth and conversion metrics
- Performance indicators with color coding
- Hover animations and gradient backgrounds

#### 📈 **Interactive Charts**
- **Line Chart**: Revenue trend over time
- **Bar Chart**: Monthly conversion rates
- **Pie Chart**: Channel performance distribution
- Responsive design with tooltips and animations

#### 📋 **Data Table**
- **50 campaign entries** with comprehensive metrics
- **Advanced filtering** by status (Active, Paused, Completed)
- **Search functionality** across campaign names
- **Sorting** by all columns (clicks, conversions, spend, etc.)
- **Pagination** with 15 rows per page
- **Export to CSV** functionality
- **Modern design** with gradient hover effects

#### 🎨 **Theme System**
- **Dark mode by default** with light mode option
- **System preference** detection
- **Smooth transitions** between themes
- **Consistent styling** across all components

## 🔄 Data Management

The dashboard uses a sophisticated mock data generation system:

- **Deterministic data** to prevent hydration mismatches
- **Real-time updates** every 30 seconds
- **50 diverse campaigns** with realistic metrics
- **Status management** (Active, Paused, Completed)
- **Performance indicators** (CTR, CPA, conversions)

## 🎨 Styling & Design

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Success**: Emerald (#10B981)
- **Warning**: Amber (#F59E0B)
- **Error**: Red (#EF4444)

### Animations
- **Fade-in effects** for page loading
- **Shimmer animations** for loading states
- **Hover transitions** on interactive elements
- **Smooth theme switching**

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/admybrand-insights)

### Other Deployment Options

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Configure build settings
- **Docker**: Use the included Dockerfile (if added)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** for the beautiful component library
- **[Recharts](https://recharts.org/)** for the powerful charting components  
- **[Lucide](https://lucide.dev/)** for the icon library
- **[Tailwind CSS](https://tailwindcss.com/)** for the styling system

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact: your-email@example.com

---

<div align="center">
Made with ❤️ for digital marketing agencies
</div>

### ⚡ Technical Features
- **Next.js 14+**: Built with App Router and server-side rendering
- **TypeScript**: Full type safety throughout the application
- **shadcn/ui**: Modern, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Component Architecture**: Reusable, modular components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand-insights.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🛠️ Built With

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Recharts](https://recharts.org/)** - Data visualization library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

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
│   ├── metric-card.tsx   # Metric display cards
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx  # Dark/light mode toggle
└── lib/                  # Utilities and data
    ├── data.ts           # Mock data and types
    └── utils.ts          # Helper functions
```

## 🎯 Key Components

### MetricCardComponent
Displays key performance indicators with trend indicators and smooth animations.

### Charts (LineChart, BarChart, PieChart)
Interactive data visualizations built with Recharts, featuring responsive design and theme support.

### DataTable
Advanced table component with sorting, filtering, pagination, and export functionality.

### ThemeToggle
Seamless dark/light mode switching with system preference detection.

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard with all components
- **Tablet**: Adapted layout with collapsible navigation
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🌙 Theme Support

- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Easy on the eyes for extended use
- **System Mode**: Automatically adapts to user's system preference

## 🔄 Real-time Features

- Auto-refresh data every 30 seconds
- Loading states with skeleton placeholders
- Smooth transitions between data updates
- Manual refresh capability

## 📊 Mock Data

The application includes realistic mock data for:
- Revenue trends over 6 months
- Conversion metrics
- Traffic source distribution
- Campaign performance data

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Static Export
```bash
npm run build
# Static files generated in `out/` directory
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built with ❤️ by the ADmyBRAND development team.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Vercel](https://vercel.com/) for the excellent Next.js framework
- [Tailwind Labs](https://tailwindlabs.com/) for Tailwind CSS

---

**ADmyBRAND Insights** - Transforming marketing data into actionable insights.
