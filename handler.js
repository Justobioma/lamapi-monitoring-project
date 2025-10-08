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
module.exports.status = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "OK",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }),
  };
};
module.exports.submit = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const { name, message } = body;

  if (!name || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing name or message' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'Success',
      received: { name, message },
      timestamp: new Date().toISOString(),
    }),
  };
};