// app/lyricsSearch.tsx
'use client'

import React, { useState } from 'react';

interface Track {
  id: string;
  name: string;
  artists: string[];
  album: string;
  album_image?: string;
  preview_url?: string;
  external_url?: string;
}

interface SearchProps {
  onTrackSelect: (track: Track) => void;
}

const LyricsSearch: React.FC<SearchProps> = ({ onTrackSelect }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchInput)}`);
      if (!response.ok) {
        throw new Error('Failed to search tracks');
      }
      
      const data = await response.json();
      console.log('Search results:', data);
      setSearchResults(data.tracks || []);
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a song..."
          className="w-full p-4 text-xl bg-white rounded mb-4"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading || !searchInput.trim()}
          className="w-full bg-blue-500 text-white text-2xl p-4 rounded"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-center text-red-500 text-lg">
          {error}
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mt-6 space-y-4">
          {searchResults.map((track) => (
            <button
              key={track.id}
              onClick={() => onTrackSelect(track)}
              className="w-full p-4 text-left bg-white rounded flex items-center gap-4"
            >
              {track.album_image && (
                <img
                  src={track.album_image}
                  alt={track.album}
                  className="w-16 h-16 rounded"
                />
              )}
              <div>
                <div className="text-xl font-medium">{track.name}</div>
                <div className="text-gray-600">
                  {track.artists.join(', ')}
                </div>
                <div className="text-gray-500 text-sm">
                  {track.album}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LyricsSearch;