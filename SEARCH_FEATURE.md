# Search Feature Documentation

## Overview
The search feature allows users to track their SEO analysis history. When a user performs an SEO analysis, a search record is automatically created with the URL, sector, and timestamp information.

## Features

### 1. Automatic Search Recording
- When a user performs SEO analysis, a search record is automatically created
- Records include: URL, sector (or "Sektör girilmemiş" if not selected), user ID, and timestamp
- Only works for authenticated users

### 2. Search History Dashboard
- View all previous searches with pagination
- See search statistics (total, completed, failed, pending)
- View top sectors by usage
- Delete individual search records

### 3. Search Status Tracking
- **Pending**: Initial state when search is created
- **Completed**: When SEO analysis finishes successfully
- **Failed**: When SEO analysis encounters errors

## Backend Components

### Model: `models/Search.js`
```javascript
{
  url: String (required),
  sector: String (default: "Sektör girilmemiş"),
  user: ObjectId (required, ref: 'User'),
  status: String (enum: ['completed', 'failed', 'pending']),
  createdAt: Date,
  updatedAt: Date
}
```

### Controller: `controllers/search.js`
- `createSearch`: Create new search record
- `getUserSearches`: Get paginated search history
- `getSearchStats`: Get search statistics
- `getSearchById`: Get specific search details
- `updateSearchStatus`: Update search status
- `deleteSearch`: Delete search record

### Router: `routers/search.js`
- `POST /search`: Create search
- `GET /search`: Get user searches
- `GET /search/stats`: Get statistics
- `GET /search/:id`: Get specific search
- `PATCH /search/:id/status`: Update status
- `DELETE /search/:id`: Delete search

## Frontend Components

### Actions: `redux/actions/searchActions.ts`
- `createSearch`: Create search record
- `getUserSearches`: Fetch search history
- `getSearchStats`: Fetch statistics
- `getSearchById`: Fetch specific search
- `updateSearchStatus`: Update status
- `deleteSearch`: Delete search

### Reducer: `redux/reducers/searchReducer.ts`
Manages search state including:
- Search records list
- Statistics
- Loading states
- Error handling
- Pagination

### Dashboard: `app/dashboard/page.tsx`
- Displays search history with pagination
- Shows search statistics
- Allows deletion of search records
- Shows top sectors chart

## Integration

### Hero Component Integration
The `Hero.tsx` component automatically creates search records when:
1. User is authenticated
2. SEO analysis is performed
3. URL is provided

```typescript
// In handleAnalyze function
if (isAuthenticated && user) {
  try {
    await dispatch(createSearch({ url: websiteUrl, sector: selectedSector }));
    setSearchCreated(true);
  } catch (error) {
    console.warn('Failed to create search record:', error);
  }
}
```

## API Endpoints

### Authentication Required
All search endpoints require authentication via JWT token in Authorization header:
```
Authorization: Bearer <token>
```

### Endpoints
- `POST /v1/search` - Create search record
- `GET /v1/search?page=1&limit=10&status=completed` - Get searches
- `GET /v1/search/stats` - Get statistics
- `GET /v1/search/:id` - Get specific search
- `PATCH /v1/search/:id/status` - Update status
- `DELETE /v1/search/:id` - Delete search

## Usage Examples

### Creating a Search Record
```javascript
// Frontend
await dispatch(createSearch({ 
  url: "https://example.com", 
  sector: "technology" 
}));

// Backend API
POST /v1/search
{
  "url": "https://example.com",
  "sector": "technology"
}
```

### Getting Search History
```javascript
// Frontend
await dispatch(getUserSearches({ page: 1, limit: 10 }));

// Backend API
GET /v1/search?page=1&limit=10
```

### Getting Statistics
```javascript
// Frontend
await dispatch(getSearchStats());

// Backend API
GET /v1/search/stats
```

## Error Handling

### Common Errors
- **401 Unauthorized**: User not authenticated
- **400 Bad Request**: Missing required fields (URL)
- **404 Not Found**: Search record not found
- **403 Forbidden**: User trying to access another user's search

### Error Response Format
```json
{
  "success": false,
  "message": "Error description"
}
```

## Database Indexes

The Search model includes indexes for better performance:
- `{ user: 1, createdAt: -1 }`: For user's search history queries
- `{ url: 1 }`: For URL-based queries

## Future Enhancements

1. **Search Analytics**: More detailed analytics and insights
2. **Export Functionality**: Export search history to CSV/PDF
3. **Search Sharing**: Share search results with other users
4. **Search Templates**: Save and reuse search configurations
5. **Bulk Operations**: Bulk delete or update search records
6. **Advanced Filtering**: Filter by date range, status, sector, etc.
