import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import nowPlayingStyles from '../../styles/Spotify/NowPlaying.module.scss';
import spotifyLogo from '../../public/assets/landing/spotify.svg';
import {server} from "../../config";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(undefined);
  
  useEffect(() => {
    const getNowPlaying = async () => {
      const res = await fetch(`${server}/api/spotify/now_playing`);
      const nowPlayingData = await res.json();
      setNowPlaying(nowPlayingData);
    }
    const interval = setInterval(getNowPlaying, 5000);
    getNowPlaying().then(() => {});
    return () => {
      clearInterval(interval);
    }
  }, [setNowPlaying]);
  
  return (
    <div className={nowPlayingStyles.nowPlaying}>
      {nowPlaying && nowPlaying.is_playing ?
        <div className={nowPlayingStyles.left}>
          <div className={nowPlayingStyles.album}>
            <Image loader={() => nowPlaying.item.album.images[0].url}
                   src={nowPlaying.item.album.images[0].url}
                   alt={'album cover'}
                   width={nowPlaying.item.album.images[0].width}
                   height={nowPlaying.item.album.images[0].height}
            />
          </div>
          <div className={nowPlayingStyles.details}>
            <p className={nowPlayingStyles.name}>
              {nowPlaying.item.name}
            </p>
            <p className={nowPlayingStyles.artist}>
              {nowPlaying.item.artists.map((artist, index) =>
                <small key={`artist-${index}`} className={nowPlayingStyles.artist}>
                  {artist.name}{index !== nowPlaying.item.artists.length - 1 ? ', ' : ''}
                </small>
              )}
            </p>
          </div>
        </div> :
        <div className={nowPlayingStyles.left}>
          <div className={nowPlayingStyles.details}>
            <p className={nowPlayingStyles.name}>
              It&apos;s too quiet here
            </p>
          </div>
        </div>
      }
      <div className={nowPlayingStyles.right}>
        <div className={nowPlayingStyles.logo}>
          <Image src={spotifyLogo} alt={'Spotify logo'}/>
        </div>
        <span className={nowPlayingStyles.title}>Now Playing</span>
      </div>
    </div>
  );
};

export default NowPlaying;