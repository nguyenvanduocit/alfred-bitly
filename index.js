const alfy = require('alfy');
const { BitlyClient } = require('bitly');
const clipboardy = require('clipboardy');
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
  const clipboardUrl = clipboardy.readSync();
  let output = [];

  if ((clipboardUrl.length > 0) && isUrl(clipboardUrl)) {
    output.push({
      title: `Shorten: ${clipboardUrl}`,
      arg: clipboardUrl
    });
  }

  if ((alfy.input.length > 0) && (alfy.input !== clipboardUrl) && isUrl(alfy.input)) {
    output.push({
      title: `Shorten: ${alfy.input}`,
      arg: alfy.input
    });
  }

  if (output.length === 0) {
    output.push({
      title: 'Type your long URL'
    })
  }
  alfy.output(output);
}


