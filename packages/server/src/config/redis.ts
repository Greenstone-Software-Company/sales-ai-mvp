import { createClient } from 'redis';

const redisClient = createClient({
  password: 'gtq9MFh2w0ZS4Dh5ddg6Em9ygqjKNtsj',
  socket: {
    host: 'redis-11098.c296.ap-southeast-2-1.ec2.redns.redis-cloud.com',
    port: 11098
  }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectToRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Could not connect to Redis:', error);
  }
};

export default redisClient;
