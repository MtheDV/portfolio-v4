import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import nowPlayingStyles from '../../styles/Spotify/NowPlaying.module.scss';
import spotifyLogo from '../../public/assets/landing/spotify.svg';
import {server} from '../../config';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(undefined);
  const [compact, setCompact] = useState(false);
  
  useEffect(() => {
    const getNowPlaying = async () => {
      const res = await fetch(`${server}/api/spotify/now_playing`);
      const nowPlayingData = await res.json();
      setNowPlaying(nowPlayingData);
    }
    const interval = setInterval(getNowPlaying, 10000);
    getNowPlaying().then(() => {
    });
    return () => {
      clearInterval(interval);
    }
  }, [setNowPlaying]);
  
  const toggleNowPlayingCompact = () => {
    setCompact((prevCompact) => !prevCompact);
  };
  
  return (
    <div className={nowPlayingStyles.now_playing}>
      <div className={nowPlayingStyles.now_playing__header}>
        <div className={nowPlayingStyles.now_playing__header_logo}>
          <Image src={spotifyLogo} alt={'Spotify logo'}/>
        </div>
        {!compact &&
          <span className={nowPlayingStyles.now_playing__header_title}>
            Spotify Now Playing
          </span>
        }
        <button
          className={nowPlayingStyles.now_playing__header_compact}
          onClick={toggleNowPlayingCompact}
          aria-label={`Set ${compact ? 'Visible' : 'Compact'}`}
        >
          {compact ? '↑' : '↓'}
        </button>
      </div>
      {!compact &&
        <div className={nowPlayingStyles.now_playing__song}>
          {nowPlaying && nowPlaying.is_playing ?
            <>
              <div className={nowPlayingStyles.now_playing__song_album}>
                <Image
                  loader={() => nowPlaying.item.album.images[1].url}
                  src={nowPlaying.item.album.images[1].url}
                  alt={'album cover'}
                  width={nowPlaying.item.album.images[1].width}
                  height={nowPlaying.item.album.images[1].height}
                />
              </div>
              <div className={nowPlayingStyles.now_playing__song_details}>
                <p className={nowPlayingStyles.now_playing__song_details__name}>
                  {nowPlaying.item.name}
                </p>
                <p className={nowPlayingStyles.now_playing__song_details__artist}>
                  {nowPlaying.item.artists.map((artist, index) =>
                    <small key={`artist-${index}`} className={nowPlayingStyles.artist}>
                      {artist.name}{index !== nowPlaying.item.artists.length - 1 ? ', ' : ''}
                    </small>
                  )}
                </p>
              </div>
            </>
            :
            <div className={nowPlayingStyles.now_playing__song_details}>
              <p className={nowPlayingStyles.now_playing__song_details__name}>
                Nothing At The Moment!
              </p>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default NowPlaying;