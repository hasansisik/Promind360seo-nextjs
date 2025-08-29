import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SEOAnalysisPayload {
  url: string;
  sector?: string;
}

interface SEOReport {
  overallScore: number;
  scoreLevel: string;
  scoreColor: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

interface SEOData {
  url: string;
  robots_found: boolean;
  ai_access: Record<string, boolean>;
  ai_bots_allowed: boolean;
  suggestions: string[];
  timestamp: string;
  isMockData: boolean;
  report?: SEOReport;
}

interface OnPageSEOData {
  basic: {
    websiteurl: string;
    title: string;
    favicon: string;
  };
  webtitle: {
    title: string;
    length: number;
    suggestion: string;
  };
  metadescription: {
    description: string;
    length: number;
    suggestion: string;
  };
  metakeywords: {
    keywords: string | null;
    counts: number;
    suggestion: string;
  };
  headings: {
    h1: { headings: string[]; count: number };
    h2: { headings: string[]; count: number };
    h3: { headings: string[]; count: number };
    h4: { headings: string[]; count: number };
    h5: { headings: string[]; count: number };
    h6: { headings: string[]; count: number };
    suggestion: string[];
  };
  sitemap_robots: string[];
  iframe: {
    count: number;
    suggestion: string;
  };
  images: {
    data: string[];
    count: number;
    suggestion: string;
  };
  links: {
    data: Array<{ link: string; title: string }>;
    count: number;
    suggestion: string;
  };
  timestamp: string;
  isMockData: boolean;
  report?: SEOReport;
}

interface PageSpeedReport {
  overallScore: number;
  scoreLevel: string;
  scoreColor: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

interface PageSpeedData {
  url: string;
  performanceMetrics: {
    firstContentfulPaint: string;
    largestContentfulPaint: string;
    speedIndex: string;
    totalBlockingTime: string;
    cumulativeLayoutShift: string;
    performanceScore: number;
  };
  timestamp: string;
  isMockData: boolean;
  report?: PageSpeedReport;
}

interface SEOAnalysisResult {
  seoData: SEOData | null;
  onPageData: OnPageSEOData | null;
  pageSpeedData: PageSpeedData | null;
  errors: {
    seo: string | null;
    onPage: string | null;
    pageSpeed: string | null;
  };
  timestamp: string;
}

// SEO Analysis Action
export const analyzeSEO = createAsyncThunk(
  "seo/analyze",
  async ({ url, sector }: SEOAnalysisPayload, thunkAPI) => {
    try {
      console.log('Starting SEO analysis for:', url);
      
      const result: SEOAnalysisResult = {
        seoData: null,
        onPageData: null,
        pageSpeedData: null,
        errors: {
          seo: null,
          onPage: null,
          pageSpeed: null
        },
        timestamp: new Date().toISOString()
      };

      // First, make SEO analysis call (faster)
      try {
        console.log('Making SEO API call...');
        const seoResponse = await axios.get(`http://localhost:3040/v1/seo/analyze?url=${encodeURIComponent(url)}`);
        const seoResult = seoResponse.data;
        if (seoResult.success) {
          result.seoData = seoResult.data;
          console.log('SEO analysis completed successfully');
        } else {
          result.errors.seo = seoResult.message;
          console.error('SEO API returned error:', seoResult.message);
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'SEO analysis failed';
        result.errors.seo = errorMessage;
        console.error('SEO analysis error:', errorMessage);
      }

      // Then, make On-Page SEO analysis call
      try {
        console.log('Making On-Page SEO API call...');
        const onPageResponse = await axios.get(`http://localhost:3040/v1/seo/onpage?url=${encodeURIComponent(url)}`);
        const onPageResult = onPageResponse.data;
        if (onPageResult.success) {
          result.onPageData = onPageResult.data;
          console.log('On-Page SEO analysis completed successfully');
        } else {
          result.errors.onPage = onPageResult.message;
          console.error('On-Page SEO API returned error:', onPageResult.message);
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'On-Page SEO analysis failed';
        result.errors.onPage = errorMessage;
        console.error('On-Page SEO analysis error:', errorMessage);
      }

      // Finally, make PageSpeed analysis call (slower, but we wait for it)
      try {
        console.log('Making PageSpeed API call...');
        const pageSpeedResponse = await axios.get(`http://localhost:3040/v1/seo/pagespeed?url=${encodeURIComponent(url)}`);
        const pageSpeedResult = pageSpeedResponse.data;
        if (pageSpeedResult.success) {
          result.pageSpeedData = pageSpeedResult.data;
          console.log('PageSpeed analysis completed successfully');
        } else {
          result.errors.pageSpeed = pageSpeedResult.message;
          console.error('PageSpeed API returned error:', pageSpeedResult.message);
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'PageSpeed analysis failed';
        result.errors.pageSpeed = errorMessage;
        console.error('PageSpeed analysis error:', errorMessage);
      }

      // If all APIs fail, throw error to show to user
      if (!result.seoData && !result.onPageData && !result.pageSpeedData) {
        throw new Error('Tüm API\'ler başarısız oldu. Lütfen API anahtarınızı kontrol edin.');
      }

      // Create combined report
      const combinedReport = {
        overallScore: 0,
        scoreLevel: 'kötü',
        scoreColor: 'red',
        strengths: [] as string[],
        weaknesses: [] as string[],
        recommendations: [] as string[]
      };

      // Combine all reports
      if (result.seoData?.report) {
        combinedReport.strengths.push(...result.seoData.report.strengths);
        combinedReport.weaknesses.push(...result.seoData.report.weaknesses);
        combinedReport.recommendations.push(...result.seoData.report.recommendations);
      }

      if (result.onPageData?.report) {
        combinedReport.strengths.push(...result.onPageData.report.strengths);
        combinedReport.weaknesses.push(...result.onPageData.report.weaknesses);
        combinedReport.recommendations.push(...result.onPageData.report.recommendations);
      }

      if (result.pageSpeedData?.report) {
        combinedReport.strengths.push(...result.pageSpeedData.report.strengths);
        combinedReport.weaknesses.push(...result.pageSpeedData.report.weaknesses);
        combinedReport.recommendations.push(...result.pageSpeedData.report.recommendations);
      }

      // Calculate overall score
      const seoScore = result.seoData?.report?.overallScore || 0;
      const onPageScore = result.onPageData?.report?.overallScore || 0;
      const pageSpeedScore = result.pageSpeedData?.report?.overallScore || 0;
      
      const scores = [seoScore, onPageScore, pageSpeedScore].filter(score => score > 0);
      if (scores.length > 0) {
        combinedReport.overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      }

      // Determine overall level and color
      if (combinedReport.overallScore >= 80) {
        combinedReport.scoreLevel = 'mükemmel';
        combinedReport.scoreColor = 'green';
      } else if (combinedReport.overallScore >= 60) {
        combinedReport.scoreLevel = 'iyi';
        combinedReport.scoreColor = 'blue';
      } else if (combinedReport.overallScore >= 40) {
        combinedReport.scoreLevel = 'orta';
        combinedReport.scoreColor = 'yellow';
      } else {
        combinedReport.scoreLevel = 'kötü';
        combinedReport.scoreColor = 'red';
      }

      return {
        ...result,
        combinedReport
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "SEO analysis failed"
      );
    }
  }
);

// Reset SEO Data Action
export const resetSEOData = createAsyncThunk(
  "seo/reset",
  async (_, thunkAPI) => {
    return null;
  }
);
