export interface MetricCard {
  title: string
  value: string
  change: number
  icon: string
  trend: 'up' | 'down'
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string
    borderWidth?: number
    fill?: boolean
    tension?: number
    borderRadius?: number
  }[]
}

export interface TableData {
  id: string
  campaign: string
  impressions: number
  clicks: number
  conversions: number
  spend: number
  ctr: number
  cpa: number
  status: 'active' | 'paused' | 'completed'
}

export interface Analytics {
  overview: MetricCard[]
  revenueChart: ChartData
  conversionChart: ChartData
  channelChart: ChartData
  campaignData: TableData[]
}

// Mock data generator with deterministic values for SSR consistency
export const generateMockData = (): Analytics => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  // Use deterministic values instead of Math.random() to avoid hydration mismatches
  const deterministicValues = [0.3, 0.7, 0.2, 0.8, 0.5, 0.9, 0.1, 0.6, 0.4, 0.75, 0.25, 0.85]
  
  // Generate more realistic fluctuating data with deterministic randomness
  const baseRevenue = 65000
  const revenueData = months.map((_, index) => {
    const trend = Math.sin(index * 0.5) * 15000 + deterministicValues[index] * 10000
    return Math.max(baseRevenue + trend, 40000)
  })

  const baseConversions = 1200
  const conversionData = months.map((_, index) => {
    const trend = Math.sin(index * 0.7) * 300 + deterministicValues[index] * 200
    return Math.max(baseConversions + trend, 800)
  })

  return {
    overview: [
      {
        title: 'Total Revenue',
        value: '$2,847,532',
        change: 15.7,
        icon: 'DollarSign',
        trend: 'up'
      },
      {
        title: 'Active Users',
        value: '156,789',
        change: 12.3,
        icon: 'Users',
        trend: 'up'
      },
      {
        title: 'Conversions',
        value: '8,456',
        change: 8.9,
        icon: 'Target',
        trend: 'up'
      },
      {
        title: 'Growth Rate',
        value: '23.4%',
        change: 4.2,
        icon: 'TrendingUp',
        trend: 'up'
      },
      {
        title: 'Click Rate',
        value: '3.2%',
        change: 1.8,
        icon: 'MousePointer',
        trend: 'up'
      },
      {
        title: 'Cost per Click',
        value: '$2.45',
        change: -6.3,
        icon: 'CreditCard',
        trend: 'down'
      }
    ],
    revenueChart: {
      labels: months,
      datasets: [{
        label: 'Revenue',
        data: revenueData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    conversionChart: {
      labels: months,
      datasets: [{
        label: 'Conversions',
        data: conversionData,
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
        borderRadius: 8
      }]
    },
    channelChart: {
      labels: ['Organic Search', 'Paid Search', 'Social Media', 'Email', 'Direct', 'Referral', 'Display'],
      datasets: [{
        label: 'Traffic Sources',
        data: [32, 24, 18, 12, 8, 4, 2],
        backgroundColor: [
          '#3B82F6',
          '#8B5CF6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#06B6D4',
          '#EC4899'
        ]
      }]
    },
    campaignData: [
      {
        id: '1',
        campaign: 'Summer Sale 2024',
        impressions: 125000,
        clicks: 3500,
        conversions: 280,
        spend: 8500,
        ctr: 2.8,
        cpa: 30.36,
        status: 'active'
      },
      {
        id: '2',
        campaign: 'Brand Awareness Q3',
        impressions: 98000,
        clicks: 2100,
        conversions: 145,
        spend: 6200,
        ctr: 2.1,
        cpa: 42.76,
        status: 'active'
      },
      {
        id: '3',
        campaign: 'Holiday Promotion',
        impressions: 156000,
        clicks: 4200,
        conversions: 380,
        spend: 12000,
        ctr: 2.7,
        cpa: 31.58,
        status: 'paused'
      },
      {
        id: '4',
        campaign: 'Product Launch',
        impressions: 87000,
        clicks: 1800,
        conversions: 95,
        spend: 4500,
        ctr: 2.1,
        cpa: 47.37,
        status: 'completed'
      },
      {
        id: '5',
        campaign: 'Retargeting Campaign',
        impressions: 45000,
        clicks: 1200,
        conversions: 150,
        spend: 3200,
        ctr: 2.7,
        cpa: 21.33,
        status: 'active'
      },
      {
        id: '6',
        campaign: 'Mobile App Install',
        impressions: 234000,
        clicks: 6800,
        conversions: 520,
        spend: 15600,
        ctr: 2.9,
        cpa: 30.00,
        status: 'active'
      },
      {
        id: '7',
        campaign: 'Video Marketing Q3',
        impressions: 189000,
        clicks: 5200,
        conversions: 415,
        spend: 11800,
        ctr: 2.8,
        cpa: 28.43,
        status: 'active'
      },
      {
        id: '8',
        campaign: 'Black Friday 2024',
        impressions: 512000,
        clicks: 18900,
        conversions: 1250,
        spend: 28500,
        ctr: 3.7,
        cpa: 22.80,
        status: 'completed'
      },
      {
        id: '9',
        campaign: 'Newsletter Signup',
        impressions: 67000,
        clicks: 1850,
        conversions: 285,
        spend: 4200,
        ctr: 2.8,
        cpa: 14.74,
        status: 'active'
      },
      {
        id: '10',
        campaign: 'Influencer Partnership',
        impressions: 145000,
        clicks: 4100,
        conversions: 320,
        spend: 9200,
        ctr: 2.8,
        cpa: 28.75,
        status: 'paused'
      },
      {
        id: '11',
        campaign: 'Google Ads Campaign',
        impressions: 298000,
        clicks: 8900,
        conversions: 670,
        spend: 18700,
        ctr: 3.0,
        cpa: 27.91,
        status: 'active'
      },
      {
        id: '12',
        campaign: 'Facebook Ads Q4',
        impressions: 178000,
        clicks: 4950,
        conversions: 385,
        spend: 12100,
        ctr: 2.8,
        cpa: 31.43,
        status: 'active'
      },
      {
        id: '13',
        campaign: 'Instagram Stories Ads',
        impressions: 203000,
        clicks: 5800,
        conversions: 420,
        spend: 13200,
        ctr: 2.9,
        cpa: 31.43,
        status: 'active'
      },
      {
        id: '14',
        campaign: 'LinkedIn B2B Campaign',
        impressions: 89000,
        clicks: 2100,
        conversions: 180,
        spend: 7800,
        ctr: 2.4,
        cpa: 43.33,
        status: 'active'
      },
      {
        id: '15',
        campaign: 'YouTube Video Ads',
        impressions: 456000,
        clicks: 12400,
        conversions: 890,
        spend: 22100,
        ctr: 2.7,
        cpa: 24.83,
        status: 'active'
      },
      {
        id: '16',
        campaign: 'Twitter Promoted Tweets',
        impressions: 134000,
        clicks: 3200,
        conversions: 240,
        spend: 8600,
        ctr: 2.4,
        cpa: 35.83,
        status: 'paused'
      },
      {
        id: '17',
        campaign: 'TikTok Brand Takeover',
        impressions: 678000,
        clicks: 15600,
        conversions: 1120,
        spend: 31200,
        ctr: 2.3,
        cpa: 27.86,
        status: 'active'
      },
      {
        id: '18',
        campaign: 'Pinterest Shopping Ads',
        impressions: 167000,
        clicks: 4100,
        conversions: 310,
        spend: 9800,
        ctr: 2.5,
        cpa: 31.61,
        status: 'active'
      },
      {
        id: '19',
        campaign: 'Snapchat Discover',
        impressions: 289000,
        clicks: 7200,
        conversions: 520,
        spend: 16400,
        ctr: 2.5,
        cpa: 31.54,
        status: 'active'
      },
      {
        id: '20',
        campaign: 'Amazon DSP Campaign',
        impressions: 345000,
        clicks: 8900,
        conversions: 650,
        spend: 19800,
        ctr: 2.6,
        cpa: 30.46,
        status: 'active'
      },
      {
        id: '21',
        campaign: 'Email Marketing Blast',
        impressions: 78000,
        clicks: 2800,
        conversions: 420,
        spend: 5600,
        ctr: 3.6,
        cpa: 13.33,
        status: 'completed'
      },
      {
        id: '22',
        campaign: 'SEO Content Campaign',
        impressions: 234000,
        clicks: 8900,
        conversions: 780,
        spend: 12300,
        ctr: 3.8,
        cpa: 15.77,
        status: 'active'
      },
      {
        id: '23',
        campaign: 'Affiliate Marketing',
        impressions: 156000,
        clicks: 4200,
        conversions: 340,
        spend: 11200,
        ctr: 2.7,
        cpa: 32.94,
        status: 'active'
      },
      {
        id: '24',
        campaign: 'Podcast Sponsorship',
        impressions: 89000,
        clicks: 1900,
        conversions: 145,
        spend: 6800,
        ctr: 2.1,
        cpa: 46.90,
        status: 'paused'
      },
      {
        id: '25',
        campaign: 'Webinar Promotion',
        impressions: 123000,
        clicks: 3100,
        conversions: 280,
        spend: 8900,
        ctr: 2.5,
        cpa: 31.79,
        status: 'active'
      },
      {
        id: '26',
        campaign: 'Display Network Q4',
        impressions: 445000,
        clicks: 11200,
        conversions: 820,
        spend: 24600,
        ctr: 2.5,
        cpa: 30.00,
        status: 'active'
      },
      {
        id: '27',
        campaign: 'Native Advertising',
        impressions: 267000,
        clicks: 6400,
        conversions: 480,
        spend: 15800,
        ctr: 2.4,
        cpa: 32.92,
        status: 'active'
      },
      {
        id: '28',
        campaign: 'Programmatic Buying',
        impressions: 378000,
        clicks: 9800,
        conversions: 720,
        spend: 22100,
        ctr: 2.6,
        cpa: 30.69,
        status: 'active'
      },
      {
        id: '29',
        campaign: 'Local Search Ads',
        impressions: 134000,
        clicks: 4200,
        conversions: 380,
        spend: 11600,
        ctr: 3.1,
        cpa: 30.53,
        status: 'active'
      },
      {
        id: '30',
        campaign: 'Connected TV Ads',
        impressions: 556000,
        clicks: 12800,
        conversions: 920,
        spend: 28400,
        ctr: 2.3,
        cpa: 30.87,
        status: 'active'
      },
      {
        id: '31',
        campaign: 'Audio Streaming Ads',
        impressions: 234000,
        clicks: 5600,
        conversions: 410,
        spend: 14200,
        ctr: 2.4,
        cpa: 34.63,
        status: 'active'
      },
      {
        id: '32',
        campaign: 'Remarketing Display',
        impressions: 89000,
        clicks: 2800,
        conversions: 320,
        spend: 7800,
        ctr: 3.1,
        cpa: 24.38,
        status: 'active'
      },
      {
        id: '33',
        campaign: 'Social Commerce Ads',
        impressions: 178000,
        clicks: 4900,
        conversions: 380,
        spend: 12800,
        ctr: 2.8,
        cpa: 33.68,
        status: 'paused'
      },
      {
        id: '34',
        campaign: 'Influencer Micro Campaign',
        impressions: 156000,
        clicks: 3800,
        conversions: 290,
        spend: 9600,
        ctr: 2.4,
        cpa: 33.10,
        status: 'active'
      },
      {
        id: '35',
        campaign: 'AR Filter Marketing',
        impressions: 345000,
        clicks: 8200,
        conversions: 580,
        spend: 18600,
        ctr: 2.4,
        cpa: 32.07,
        status: 'active'
      },
      {
        id: '36',
        campaign: 'Gaming Platform Ads',
        impressions: 467000,
        clicks: 11400,
        conversions: 820,
        spend: 25200,
        ctr: 2.4,
        cpa: 30.73,
        status: 'active'
      },
      {
        id: '37',
        campaign: 'Voice Search Optimization',
        impressions: 123000,
        clicks: 3600,
        conversions: 310,
        spend: 9200,
        ctr: 2.9,
        cpa: 29.68,
        status: 'active'
      },
      {
        id: '38',
        campaign: 'Chatbot Engagement',
        impressions: 89000,
        clicks: 2400,
        conversions: 220,
        spend: 6800,
        ctr: 2.7,
        cpa: 30.91,
        status: 'active'
      },
      {
        id: '39',
        campaign: 'QR Code Campaign',
        impressions: 67000,
        clicks: 1800,
        conversions: 160,
        spend: 4900,
        ctr: 2.7,
        cpa: 30.63,
        status: 'completed'
      },
      {
        id: '40',
        campaign: 'Virtual Event Promotion',
        impressions: 178000,
        clicks: 4200,
        conversions: 320,
        spend: 11600,
        ctr: 2.4,
        cpa: 36.25,
        status: 'active'
      },
      {
        id: '41',
        campaign: 'Community Building',
        impressions: 234000,
        clicks: 6800,
        conversions: 520,
        spend: 15800,
        ctr: 2.9,
        cpa: 30.38,
        status: 'active'
      },
      {
        id: '42',
        campaign: 'User Generated Content',
        impressions: 145000,
        clicks: 4100,
        conversions: 340,
        spend: 10200,
        ctr: 2.8,
        cpa: 30.00,
        status: 'active'
      },
      {
        id: '43',
        campaign: 'Geofencing Campaign',
        impressions: 267000,
        clicks: 6200,
        conversions: 460,
        spend: 16400,
        ctr: 2.3,
        cpa: 35.65,
        status: 'active'
      },
      {
        id: '44',
        campaign: 'Cross-Platform Retargeting',
        impressions: 189000,
        clicks: 5400,
        conversions: 420,
        spend: 13800,
        ctr: 2.9,
        cpa: 32.86,
        status: 'active'
      },
      {
        id: '45',
        campaign: 'Seasonal Flash Sale',
        impressions: 345000,
        clicks: 9800,
        conversions: 780,
        spend: 22600,
        ctr: 2.8,
        cpa: 28.97,
        status: 'completed'
      },
      {
        id: '46',
        campaign: 'Brand Partnership Collab',
        impressions: 156000,
        clicks: 3900,
        conversions: 290,
        spend: 11200,
        ctr: 2.5,
        cpa: 38.62,
        status: 'paused'
      },
      {
        id: '47',
        campaign: 'AI-Powered Personalization',
        impressions: 278000,
        clicks: 7800,
        conversions: 620,
        spend: 18900,
        ctr: 2.8,
        cpa: 30.48,
        status: 'active'
      },
      {
        id: '48',
        campaign: 'Interactive Content Hub',
        impressions: 123000,
        clicks: 3400,
        conversions: 280,
        spend: 8600,
        ctr: 2.8,
        cpa: 30.71,
        status: 'active'
      },
      {
        id: '49',
        campaign: 'Omnichannel Integration',
        impressions: 445000,
        clicks: 12600,
        conversions: 950,
        spend: 28800,
        ctr: 2.8,
        cpa: 30.32,
        status: 'active'
      },
      {
        id: '50',
        campaign: 'Performance Max Campaign',
        impressions: 567000,
        clicks: 15800,
        conversions: 1180,
        spend: 34200,
        ctr: 2.8,
        cpa: 29.00,
        status: 'active'
      }
    ]
  }
}
