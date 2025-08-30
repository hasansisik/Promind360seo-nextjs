'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getUserSearches, getSearchStats, deleteSearch } from '@/redux/actions/searchActions';
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Search, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Trash2,
  Globe,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { searches, stats, loading, totalPages, currentPage, totalSearches } = useSelector((state: RootState) => state.search);
  const [page, setPage] = useState(1);

  // Load search data immediately without authentication
  useEffect(() => {
    dispatch(getUserSearches({ page, limit: 10 }));
    dispatch(getSearchStats());
  }, [dispatch, page]);

  const handleDeleteSearch = async (id: string) => {
    if (confirm('Bu arama kaydını silmek istediğinizden emin misiniz?')) {
      await dispatch(deleteSearch(id));
      // Refresh the list
      dispatch(getUserSearches({ page, limit: 10 }));
      dispatch(getSearchStats());
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Tamamlandı</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Başarısız</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };



  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Arama Geçmişi</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Statistics Cards */}
          {stats && (
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Toplam Arama</CardTitle>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.overall.totalSearches}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tamamlanan</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.overall.completedSearches}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Başarısız</CardTitle>
                  <XCircle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.overall.failedSearches}</div>
                </CardContent>
              </Card>

            </div>
          )}

          {/* Top Sectors */}
          {stats && stats.topSectors.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>En Popüler Sektörler</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stats.topSectors.slice(0, 5).map((sector) => (
                    <div key={sector._id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{sector._id}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={(sector.count / stats.overall.totalSearches) * 100} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">{sector.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Search History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Arama Geçmişi</span>
                <Badge variant="outline">{totalSearches} kayıt</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Yükleniyor...</span>
                </div>
              ) : searches.length === 0 ? (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Henüz Arama Yapılmamış</h3>
                  <p className="text-sm text-muted-foreground">
                    İlk SEO analizinizi yapmak için ana sayfaya gidin.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {searches.map((search) => (
                    <div key={search._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(search.status)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{search.url}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {new Date(search.createdAt).toLocaleString('tr-TR')}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{search.sector}</span>
                            {search.user && typeof search.user === 'object' && 'name' in search.user ? (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">
                                  {(search.user as { name?: string; email?: string }).name || (search.user as { name?: string; email?: string }).email}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">
                                  Misafir Kullanıcı
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(search.status)}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteSearch(search._id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-muted-foreground">
                    Sayfa {currentPage} / {totalPages}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page - 1)}
                      disabled={page <= 1}
                    >
                      Önceki
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page + 1)}
                      disabled={page >= totalPages}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
