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
  pageSpeedData: PageSpeedData | null;
  errors: {
    seo: string | null;
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
        pageSpeedData: null,
        errors: {
          seo: null,
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
        
        // If both APIs fail, throw error to show to user
        if (!result.seoData && !result.pageSpeedData) {
          throw new Error(`SEO API Hatası: ${errorMessage}`);
        }
      }

      // Then, make PageSpeed analysis call (slower, but we wait for it)
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
        
        // If both APIs fail, throw error to show to user
        if (!result.seoData && !result.pageSpeedData) {
          throw new Error(`PageSpeed API Hatası: ${errorMessage}`);
        }
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

      // Combine SEO and PageSpeed reports
      if (result.seoData?.report) {
        combinedReport.strengths.push(...result.seoData.report.strengths);
        combinedReport.weaknesses.push(...result.seoData.report.weaknesses);
        combinedReport.recommendations.push(...result.seoData.report.recommendations);
      }

      if (result.pageSpeedData?.report) {
        combinedReport.strengths.push(...result.pageSpeedData.report.strengths);
        combinedReport.weaknesses.push(...result.pageSpeedData.report.weaknesses);
        combinedReport.recommendations.push(...result.pageSpeedData.report.recommendations);
      }

      // Calculate overall score
      const seoScore = result.seoData?.report?.overallScore || 0;
      const pageSpeedScore = result.pageSpeedData?.report?.overallScore || 0;
      
      if (seoScore > 0 && pageSpeedScore > 0) {
        combinedReport.overallScore = Math.round((seoScore + pageSpeedScore) / 2);
      } else if (seoScore > 0) {
        combinedReport.overallScore = seoScore;
      } else if (pageSpeedScore > 0) {
        combinedReport.overallScore = pageSpeedScore;
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
