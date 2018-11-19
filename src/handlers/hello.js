import handly from '@harijoe/handly';
import * as mdd from 'middy/middlewares';

const handler = async (event, context, callback) => {
  // Get path parameters
  console.log(event.pathParameters);
  // Get string parameters
  console.log(event.queryStringParameters);
  // Get body as a JS object (useful for post request)
  console.log(event.body);

  return {
    statusCode: 200,
    body: {
      message: {
        hello: 'world',
      },
      another: 22,
      test: 'teeeeest',
    },
  };
};

export default handly(handler).use(mdd.cors());
