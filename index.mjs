export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello Naman Jain from Lambda!'),
  };
  return response;
};
