if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://brad123:brad123@devconnector.wgpcu.mongodb.net/vidjot?retryWrites=true&w=majority',
  };
} else {
  module.exports = {
    mongoURI:
      'mongodb+srv://brad123:brad123@devconnector.wgpcu.mongodb.net/vidjot?retryWrites=true&w=majority',
  };
}
