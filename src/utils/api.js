import {Client, TrackHandler, trackEntity, UserHandler, PlaylistHandler} from 'spotify-sdk'
import axios from 'axios'

let client = Client.instance;
let user = new UserHandler();

client.settings = {
    clientId: '895ae434e10745f8b7aa65f56f6bdfb3',
    secretId: 'c0a6ed500c58451383d5996d0d92b07e',
    scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
};

const getToken = async () => {
    const accessToken = await axios.get('/api/token');
    client.token = accessToken.data
}
getToken()


user.get('22iuxsl6nt7lfld2yhpvovlri').then((userEntity) => {
    console.log(userEntity);
});
