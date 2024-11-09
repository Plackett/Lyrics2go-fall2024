// lyricsDisplay.tsx
import React, { useState, useEffect } from 'react';

// Define the types for our API response
interface LyricsResponse {
  title: string;
  artist: string;
  content: string;
}

// Define props interface
interface LyricsDisplayProps {
  searchTerm: string;
}

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ searchTerm }) => {
  const [lyrics, setLyrics] = useState<LyricsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      if (!searchTerm) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://lyrics2go-166de07f0474.herokuapp.com/search?q=${encodeURIComponent(searchTerm)}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch lyrics');
        }
        
        const data: LyricsResponse = await response.json();
        setLyrics(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!lyrics) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold">
          {lyrics.title}
        </h2>
        <p className="text-gray-600">Artist: {lyrics.artist}</p>
      </div>
      <div className="p-4 whitespace-pre-wrap border-t">
        {lyrics.content}
      </div>
    </div>
  );
};

export default LyricsDisplay;