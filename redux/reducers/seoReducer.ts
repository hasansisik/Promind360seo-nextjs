import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { analyzeSEO, resetSEOData } from "../actions/seoActions";

interface SEOState {
  seoData: any;
  onPageData: any;
  pageSpeedData: any;
  combinedReport: any;
  errors: {
    seo: string | null;
    onPage: string | null;
    pageSpeed: string | null;
  };
  isLoading: boolean;
  isAnalyzing: boolean;
  progress: number;
  currentStep: string;
  analysisSteps: Array<{
    progress: number;
    message: string;
    status: 'pending' | 'active' | 'completed' | 'error';
  }>;
  timestamp: string | null;
  analyzedUrl: string | null;
}

const initialState: SEOState = {
  seoData: null,
  onPageData: null,
  pageSpeedData: null,
  combinedReport: null,
  errors: {
    seo: null,
    onPage: null,
    pageSpeed: null
  },
  isLoading: false,
  isAnalyzing: false,
  progress: 0,
  currentStep: '',
  analysisSteps: [
    { progress: 8, message: 'Web sitesi bağlantısı kontrol ediliyor...', status: 'pending' },
    { progress: 16, message: 'DNS çözümlemesi yapılıyor...', status: 'pending' },
    { progress: 24, message: 'Sunucu yanıt süresi ölçülüyor...', status: 'pending' },
    { progress: 32, message: 'SEO meta etiketleri inceleniyor...', status: 'pending' },
    { progress: 40, message: 'Robots.txt dosyası kontrol ediliyor...', status: 'pending' },
    { progress: 48, message: 'AI bot erişimi analiz ediliyor...', status: 'pending' },
    { progress: 56, message: 'On-page SEO analizi yapılıyor...', status: 'pending' },
    { progress: 64, message: 'Sayfa yükleme hızı analiz ediliyor...', status: 'pending' },
    { progress: 72, message: 'Core Web Vitals hesaplanıyor...', status: 'pending' },
    { progress: 80, message: 'Performans metrikleri ölçülüyor...', status: 'pending' },
    { progress: 88, message: 'Erişilebilirlik kontrol ediliyor...', status: 'pending' },
    { progress: 96, message: 'En İyi Uygulamalar analiz ediliyor...', status: 'pending' },
    { progress: 100, message: 'Rapor hazırlanıyor...', status: 'pending' }
  ],
  timestamp: null,
  analyzedUrl: null
};

const seoSlice = createSlice({
  name: "seo",
  initialState,
  reducers: {
    setAnalyzing: (state, action: PayloadAction<boolean>) => {
      state.isAnalyzing = action.payload;
      if (!action.payload) {
        state.progress = 0;
        state.currentStep = '';
        state.analysisSteps = state.analysisSteps.map(step => ({ ...step, status: 'pending' }));
      }
    },
    updateProgress: (state, action: PayloadAction<{ progress: number; step: string }>) => {
      state.progress = action.payload.progress;
      state.currentStep = action.payload.step;
      
      // Update step status sequentially - only mark current and previous steps
      state.analysisSteps = state.analysisSteps.map(step => {
        if (step.progress <= action.payload.progress) {
          return { ...step, status: 'completed' };
        } else if (step.progress === action.payload.progress + 1) {
          return { ...step, status: 'active' };
        } else {
          return { ...step, status: 'pending' };
        }
      });
    },
    setAnalyzedUrl: (state, action: PayloadAction<string>) => {
      state.analyzedUrl = action.payload;
    },
    clearErrors: (state) => {
      state.errors = { seo: null, onPage: null, pageSpeed: null };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(analyzeSEO.pending, (state) => {
        state.isLoading = true;
        state.isAnalyzing = true;
        state.progress = 0;
        state.currentStep = '';
        state.errors = { seo: null, onPage: null, pageSpeed: null };
        state.analysisSteps = state.analysisSteps.map(step => ({ ...step, status: 'pending' }));
      })
      .addCase(analyzeSEO.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAnalyzing = false;
        state.progress = 100;
        state.currentStep = 'Analiz tamamlandı';
        state.seoData = action.payload.seoData;
        state.onPageData = action.payload.onPageData;
        state.pageSpeedData = action.payload.pageSpeedData;
        state.combinedReport = action.payload.combinedReport;
        state.errors = action.payload.errors;
        state.timestamp = action.payload.timestamp;
        state.analysisSteps = state.analysisSteps.map(step => ({ ...step, status: 'completed' }));
      })
      .addCase(analyzeSEO.rejected, (state, action) => {
        state.isLoading = false;
        state.isAnalyzing = false;
        state.progress = 0;
        state.currentStep = '';
        state.errors = { 
          seo: action.payload as string || 'SEO analizi başarısız',
          onPage: action.payload as string || 'On-page analizi başarısız',
          pageSpeed: action.payload as string || 'PageSpeed analizi başarısız'
        };
        state.analysisSteps = state.analysisSteps.map(step => ({ ...step, status: 'error' }));
      })
      .addCase(resetSEOData.fulfilled, (state) => {
        state.seoData = null;
        state.onPageData = null;
        state.pageSpeedData = null;
        state.errors = { seo: null, onPage: null, pageSpeed: null };
        state.isLoading = false;
        state.isAnalyzing = false;
        state.progress = 0;
        state.currentStep = '';
        state.timestamp = null;
        state.analyzedUrl = null;
        state.analysisSteps = state.analysisSteps.map(step => ({ ...step, status: 'pending' }));
      });
  },
});

export const { setAnalyzing, updateProgress, setAnalyzedUrl, clearErrors } = seoSlice.actions;
export default seoSlice.reducer;
