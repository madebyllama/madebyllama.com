# madebyllama.com
Made by llama promotional website.

## Intallation and setup
This application has one main dependency:

* Node [Node](https://nodejs.org/en/) `brew install node`

```bash
git clone git@github.com:madebyllama/madebyllama.com.git
cd madebyllama.com
npm install
grunt build
open bin/index.html
```

## Deployment
This repository is set up with Continuous Deployment. Any code merged into live will automatically be uploaded to the web server.

## Grunt commands

There are a number of available grunt commands, the most commonly used are:

```bash
grunt         - Build the project, and then watch for changes.
grunt build   - Just build the project (compile assets).
grunt watch   - Just watch for file changes and take appropriate action.
grunt release - Build the application and then FTP the files onto our live server.
```

## Contributing

1. Pull it

2. Create your feature branch (`git checkout -b my-new-feature`)

3. Commit your changes (`git commit -am 'Add some feature'`)

4. Push to the branch (`git push origin my-new-feature`)

5. Create a new Pull Request