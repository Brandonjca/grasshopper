import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.109:8080',
});

// export const createTweet = async (user: string, text: string, replyCounter: number, retweetCounter: number, likeCounter: number) => {
//   try {
//     const response = await api.post('/create', {user, text, replyCounter, retweetCounter, likeCounter});
//     return response.data;
//   } catch (error) {
//     console.log(error)
//   }
// }