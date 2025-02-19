export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello Naman Jain How are you from Lambda!'),
  };
  return response;
};
