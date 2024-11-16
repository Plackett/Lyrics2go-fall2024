import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
  Linking,
  StyleSheet,
} from 'react-native';
import standsConfig from '../stands-config';

const LyricsScreen = () => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchLyrics = async () => {
    if (!artist.trim() || !song.trim()) {
      setError('Please enter both artist and song.');
      return;
    }

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch(
        `https://www.stands4.com/services/v2/lyrics.php?uid=${standsConfig.uid}&tokenid=${standsConfig.key}&term=${encodeURIComponent(
          song
        )}&artist=${encodeURIComponent(artist)}&format=json`
      );

      if (!response.ok) throw new Error('Failed to fetch lyrics');
      const data = await response.json();

      if (data && data.result) {
        const resultsArray = Array.isArray(data.result)
          ? data.result
          : [data.result];
        setResults(resultsArray);
      } else {
        setError('No results found.');
      }
    } catch (err) {
      setError('Could not fetch lyrics. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Song Lyrics</Text>

      <TextInput
        style={styles.input}
        placeholder="Artist name"
        value={artist}
        onChangeText={setArtist}
        placeholderTextColor="#666"
      />

      <TextInput
        style={styles.input}
        placeholder="Song title"
        value={song}
        onChangeText={setSong}
        placeholderTextColor="#666"
      />

      <Button title="Get Lyrics" onPress={fetchLyrics} disabled={loading} />

      {loading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView style={styles.resultsContainer}>
          {results.length > 0 ? (
            results.map((result, index) => (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.songTitle}>{result.song}</Text>
                <Text style={styles.artistName}>Artist: {result.artist}</Text>
                {result.album && (
                  <Text style={styles.albumName}>Album: {result.album}</Text>
                )}

                {result.lyrics && (
                  <Text style={styles.lyricsText}>{result.lyrics}</Text>
                )}

                <View style={styles.buttonContainer}>
                  {result.song_link && (
                    <Button
                      title="View on Web"
                      onPress={() => Linking.openURL(result.song_link)}
                    />
                  )}
                  {result.artist_link && (
                    <Button
                      title="Artist Info"
                      onPress={() => Linking.openURL(result.artist_link)}
                    />
                  )}
                  {result.album_link && (
                    <Button
                      title="Album Info"
                      onPress={() => Linking.openURL(result.album_link)}
                    />
                  )}
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noResults}>No results found</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  loader: {
    marginTop: 16,
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
  resultsContainer: {
    marginTop: 16,
  },
  resultItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  albumName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  lyricsText: {
    marginTop: 8,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  noResults: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});

export default LyricsScreen;