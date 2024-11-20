import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, ScrollView, Linking } from 'react-native';
import standsConfig from '../stands-config';

const LyricsScreen = () => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchLyrics = async () => {
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch(
        `https://www.stands4.com/services/v2/lyrics.php?uid=${standsConfig.uid}&tokenid=${standsConfig.key}&term=${encodeURIComponent(
          song
        )}&artist=${encodeURIComponent(artist)}&format=xml`
      );

      if (!response.ok) throw new Error('Failed to fetch lyrics');
      const text = await response.text();

      // Simple regex to parse the XML result
      const resultRegex = /<result>[\s\S]*?<\/result>/g;
      const songData = [...text.matchAll(resultRegex)];

      const parsedResults = songData.map((item) => {
        const songName = item[0].match(/<song>(.*?)<\/song>/)?.[1];
        const artistName = item[0].match(/<artist>(.*?)<\/artist>/)?.[1];
        const albumName = item[0].match(/<album>(.*?)<\/album>/)?.[1];
        const songLink = item[0].match(/<song-link>(.*?)<\/song-link>/)?.[1];
        const albumLink = item[0].match(/<album-link>(.*?)<\/album-link>/)?.[1];
        const artistLink = item[0].match(/<artist-link>(.*?)<\/artist-link>/)?.[1];

        return {
          songName,
          artistName,
          albumName,
          songLink,
          albumLink,
          artistLink,
        };
      });

      setResults(parsedResults);
    } catch (err) {
      setError('Could not fetch lyrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-bold text-center mb-4">Find Song Lyrics</Text>
      
      <TextInput
        className="border border-gray-400 text-black placeholder-current p-2 mb-4 rounded"
        placeholder="Artist"
        value={artist}
        onChangeText={setArtist}
      />
      
      <TextInput
        className="border border-gray-400 text-black placeholder-current p-2 mb-4 rounded"
        placeholder="Song Name"
        value={song}
        onChangeText={setSong}
      />
      
      <Button title="Get Lyrics" onPress={fetchLyrics} disabled={loading} />

      {loading && <ActivityIndicator className="mt-4" size="large" color="#0000ff" />}
      
      {error ? (
        <Text className="text-red-500 mt-4">{error}</Text>
      ) : (
        <ScrollView className="mt-4 bg-gray-100 p-4 rounded-md">
          {results.length > 0 ? (
            results.map((result, index) => (
              <View key={index} className="mb-4">
                <Text className="text-lg font-semibold">{result.songName}</Text>
                <Text className="text-sm text-gray-700">Artist: {result.artistName}</Text>
                <Text className="text-sm text-gray-700">Album: {result.albumName}</Text>

                <View className="flex-row space-x-2 mt-2 gap-x-2 rounded-lg">
                  <Button
                    title="Open Lyrics"
                    onPress={() => Linking.openURL(result.songLink)}
                  />
                  <Button
                    title="Link to Album"
                    onPress={() => Linking.openURL(result.albumLink)}
                  />
                </View>
              </View>
            ))
          ) : (
            <Text>No results found</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default LyricsScreen;
