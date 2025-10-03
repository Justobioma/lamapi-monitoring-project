module.exports.hello = async (event) => {
  const name = event.queryStringParameters?.name || "Obioma";

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}! Your serverless function is live 🚀`,
      timestamp: new Date().toISOString(),
    }),
  };
};