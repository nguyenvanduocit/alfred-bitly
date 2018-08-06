const alfy = require('alfy');
const { BitlyClient } = require('bitly');
const isUrl = require('is-url');

const accessToken = process.env.access_token
if (!accessToken) {
  alfy.output([
    {
      title: 'You need to set access_token first.',
      subtitle: 'Click here to get access token, then open workflow\'s settings.',
      arg: 'set_access_token'
    }
  ]);
} else {
  const bitly = new BitlyClient(accessToken, {});

  if ((alfy.input.length > 0) && isUrl(alfy.input)) {
    bitly.shorten(alfy.input).then(function(result) {
      console.log(result.url)
    })
  }
}


