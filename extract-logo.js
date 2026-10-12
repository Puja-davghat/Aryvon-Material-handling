const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\59f070cf-caad-4f49-93ac-6b32e72093db\\.system_generated\\steps\\7\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

const match = content.match(/src="data:image\/png;base64,([^"]+)"/);
if (match && match[1]) {
  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  
  const logoDir1 = path.join(__dirname, 'client', 'public', 'assets', 'logo');
  const logoDir2 = path.join(__dirname, 'client', 'src', 'assets');
  
  fs.mkdirSync(logoDir1, { recursive: true });
  fs.mkdirSync(logoDir2, { recursive: true });
  
  fs.writeFileSync(path.join(logoDir1, 'aryvon-logo.png'), buffer);
  fs.writeFileSync(path.join(logoDir2, 'aryvon-logo.png'), buffer);
  console.log('Logo extracted successfully! Buffer size:', buffer.length);
} else {
  console.log('Logo base64 match not found');
}
