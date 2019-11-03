# js-clan


## Start dev on Win
npm run dev-win

## Compile sass to css
npm run sass:compile



## Step 1. 
### Instalatin:

`npm i`


## Step 2. 
### Set .env:

PROD (url),

JWT_SECRET (secret), 
PSWD_SALT (salt)

FB_ID (id), 
FB_KEY (key), 
FB_CLB (url), 

GP_ID (id), 
GP_KEY (key), 
GP_CLB (url)


## Step 3. 
### Set some url in files:

if be need, add other url for cross domain permission `res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000")`



## Step 4. 
### Production Start:

`node app.js`


## Step 5. 
### Dev Start:

`node app.js --dev`






### *
### *
### *

### Not need. But was situation that needed  some fixes

1. In file: node_modules > formidable > lib > multipart_parser

  after: 

  this.boundary.write('\r\n--', 0, 'ascii'); 
  this.boundary.write(str, 4, 'ascii');

  before:
  // this.boundary.write('\r\n--', 'ascii', 0);
  // this.boundary.write(str, 'ascii', 4);

123