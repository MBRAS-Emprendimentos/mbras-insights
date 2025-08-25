// Base Types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: UserRole
  subscription: SubscriptionPlan
  createdAt: string
  updatedAt: string
  lastLogin?: string
  preferences: UserPreferences
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: 'pt' | 'en' | 'es'
  notifications: NotificationSettings
  newsletter: NewsletterPreferences
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
  marketUpdates: boolean
  reportReleases: boolean
  webinarReminders: boolean
}

export interface NewsletterPreferences {
  marketAnalysis: boolean
  weeklyReports: boolean
  eventUpdates: boolean
  premiumInsights: boolean
}

export type UserRole = 'visitor' | 'subscriber' | 'member' | 'premium' | 'admin'
export type SubscriptionPlan = 'free' | 'premium' | 'enterprise'

// Content Types
export interface Report {
  id: string
  title: string
  description: string
  content: string
  summary: string
  category: ContentCategory
  tags: string[]
  author: Author
  publishDate: string
  lastUpdated: string
  readTime: number
  downloadUrl?: string
  previewImage?: string
  isPremium: boolean
  views: number
  downloads: number
  rating: number
  status: ContentStatus
}

export interface Insight {
  id: string
  title: string
  description: string
  content: string
  category: ContentCategory
  region?: string
  propertyType?: PropertyType
  publishDate: string
  author: Author
  isPremium: boolean
  metrics: InsightMetrics
  relatedReports: string[]
}

export interface InsightMetrics {
  accuracy: number
  confidence: number
  dataPoints: number
  lastUpdated: string
}

export interface Author {
  id: string
  name: string
  title: string
  bio: string
  avatar?: string
  social?: SocialLinks
}

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  website?: string
}

export type ContentCategory =
  | 'market-analysis'
  | 'regional-insights'
  | 'investment-guide'
  | 'trend-reports'
  | 'economic-indicators'
  | 'policy-updates'

export type ContentStatus = 'draft' | 'review' | 'published' | 'archived'

export type PropertyType = 'residential' | 'commercial' | 'industrial' | 'rural' | 'mixed'

// Market Data Types
export interface MarketData {
  id: string
  region: string
  propertyType: PropertyType
  metrics: MarketMetrics
  trends: MarketTrend[]
  lastUpdated: string
  dataSource: string
}

export interface MarketMetrics {
  averagePrice: number
  pricePerSqm: number
  priceChange: PriceChange
  inventory: number
  timeOnMarket: number
  absorption: number
  roi: number
  vacancy: number
}

export interface PriceChange {
  monthly: number
  quarterly: number
  yearly: number
  percentage: number
}

export interface MarketTrend {
  period: string
  metric: string
  value: number
  change: number
  forecast?: number
}

// Event Types
export interface Event {
  id: string
  title: string
  description: string
  type: EventType
  date: string
  duration: number
  location?: EventLocation
  isOnline: boolean
  maxAttendees?: number
  currentAttendees: number
  speakers: Speaker[]
  agenda: AgendaItem[]
  isPremium: boolean
  registrationUrl: string
  status: EventStatus
  tags: string[]
}

export interface EventLocation {
  name: string
  address: string
  city: string
  state: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  avatar?: string
  social?: SocialLinks
}

export interface AgendaItem {
  id: string
  time: string
  title: string
  description: string
  speaker?: string
  duration: number
  type: 'presentation' | 'panel' | 'qa' | 'break' | 'networking'
}

export type EventType = 'webinar' | 'workshop' | 'conference' | 'networking' | 'launch'
export type EventStatus = 'upcoming' | 'live' | 'ended' | 'cancelled'

// Form Types
export interface RegistrationForm {
  name: string
  email: string
  company?: string
  phone?: string
  interests: string[]
  source?: string
  marketingConsent: boolean
  termsAccepted: boolean
}

export interface NewsletterForm {
  email: string
  name?: string
  preferences: NewsletterPreferences
  source?: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'support' | 'partnership' | 'press'
}

// API Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: ApiError[]
  metadata?: ApiMetadata
}

export interface ApiError {
  field?: string
  message: string
  code?: string
}

export interface ApiMetadata {
  total?: number
  page?: number
  limit?: number
  hasNext?: boolean
  hasPrev?: boolean
  timestamp: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  offset?: number
}

export interface FilterParams {
  category?: ContentCategory
  region?: string
  propertyType?: PropertyType
  dateFrom?: string
  dateTo?: string
  isPremium?: boolean
  search?: string
}

export interface SortParams {
  field: string
  direction: 'asc' | 'desc'
}

// Analytics Types
export interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  userId?: string
  sessionId?: string
  timestamp?: string
  page: PageInfo
  user?: UserInfo
}

export interface PageInfo {
  url: string
  title?: string
  referrer?: string
}

export interface UserInfo {
  userAgent?: string
  ip?: string
  country?: string
  city?: string
  device?: DeviceInfo
}

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop'
  os: string
  browser: string
}

export interface AnalyticsData {
  events: AnalyticsEvent[]
  metadata: {
    total: number
    filtered: number
    page: number
    limit: number
    hasNext: boolean
  }
  summary: AnalyticsSummary
}

export interface AnalyticsSummary {
  totalEvents: number
  uniqueUsers: number
  sessionsToday: number
  avgSessionDuration: string
  topEvents: EventCount[]
  topPages: PageCount[]
}

export interface EventCount {
  event: string
  count: number
}

export interface PageCount {
  page: string
  views: number
}

// Component Types
export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface ButtonProps extends ComponentProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'navy' | 'teal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export interface CardProps extends ComponentProps {
  title?: string
  description?: string
  image?: string
  href?: string
  isPremium?: boolean
}

// Animation Types
export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
  stagger?: number
}

export interface ScrollRevealConfig extends AnimationConfig {
  threshold?: number
  triggerOnce?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
}

// Chart/Visualization Types
export interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

export interface ChartDataset {
  label: string
  data: number[]
  backgroundColor?: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
  fill?: boolean
}

export interface ChartOptions {
  responsive?: boolean
  maintainAspectRatio?: boolean
  plugins?: {
    legend?: {
      display?: boolean
      position?: 'top' | 'bottom' | 'left' | 'right'
    }
    tooltip?: {
      enabled?: boolean
    }
  }
  scales?: {
    x?: ChartScale
    y?: ChartScale
  }
}

export interface ChartScale {
  display?: boolean
  grid?: {
    display?: boolean
  }
  ticks?: {
    display?: boolean
  }
}

// File Upload Types
export interface FileUpload {
  file: File
  id: string
  name: string
  size: number
  type: string
  url?: string
  progress: number
  status: 'pending' | 'uploading' | 'success' | 'error'
  error?: string
}

// Search Types
export interface SearchResult {
  id: string
  type: 'report' | 'insight' | 'event' | 'author'
  title: string
  description: string
  url: string
  image?: string
  relevance: number
  highlights?: string[]
}

export interface SearchFilters {
  type?: ('report' | 'insight' | 'event' | 'author')[]
  category?: ContentCategory[]
  dateRange?: {
    from: string
    to: string
  }
  isPremium?: boolean
}

// Notification Types
export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  timestamp: string
  read: boolean
  actionUrl?: string
  actionLabel?: string
  priority: 'low' | 'normal' | 'high'
  category: 'system' | 'marketing' | 'content' | 'account'
}

export type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'new-content'
  | 'event-reminder'
  | 'system-update'

// Theme Types
export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    border: string
  }
  fonts: {
    sans: string[]
    display: string[]
    luxury: string[]
  }
  spacing: Record<string, string>
  breakpoints: Record<string, string>
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Hook Types
export interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export interface UsePaginationResult {
  currentPage: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
}

export interface UseLocalStorageResult<T> {
  value: T
  setValue: (value: T) => void
  removeValue: () => void
}

// Global Window Extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}
