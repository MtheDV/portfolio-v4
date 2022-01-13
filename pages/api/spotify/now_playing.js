const {promises: fs} = require('fs');

const getAccessToken = async () => {
  const url = process.env.SPOTIFY_ACCOUNTS_BASE_URL + 'api/token';
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')}`,
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`
    }).then((res) => res.json()).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject({'error': `There was an error fetching spotify account token: ${err}`});
    });
  });
}

const getAndUpdateToken = async () => {
  let tokenData;
  try {
    tokenData = await fs.readFile('data/spotify_token_data.json', "utf-8");
    tokenData = JSON.parse(tokenData.toString());
  } catch (err) {
    tokenData = {
      auth_token: null,
      time_since_last_token: null
    }
  }
  const currentTime = Date.now();
  if (!tokenData.time_since_last_token || currentTime - tokenData.time_since_last_token >= (1000 * 60 * 50)) {
    let tokenValues = await getAccessToken();
    if (tokenValues.access_token) {
      tokenData.auth_token = tokenValues.access_token;
      tokenData.time_since_last_token = currentTime;
      try {
        await fs.writeFile('data/spotify_token_data.json', JSON.stringify(tokenData, null, 2));
      } catch (err) {
        console.log(`Error while saving spotify token data: ${err}`);
      }
    }
  }
  return tokenData.auth_token;
}

const handler = async (nowReq, nowRes) => {
  const url = process.env.SPOTIFY_API_BASE_URL + 'me/player/currently-playing';
  const auth_token = await getAndUpdateToken();
  try {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        }
      }).then((res) => {
        if (res.status !== 200) {
          console.log(`Error status ${res.status} has occurred!`);
          nowRes.status(res.status).json({'error': `There was an error fetching spotify now playing`})
          reject();
        } else {
          res.json().then((data) => {
            nowRes.status(200).json(data);
            resolve();
          });
        }
      }).catch((err) => {
        nowRes.status(400).json({'error': `There was an error fetching spotify now playing: ${err}`});
        reject();
      });
    });
  } catch (err) {
    nowRes.status(400).json({'error': `There was an error fetching spotify now playing: ${err}`});
  }
}

export default handler;
