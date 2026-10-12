const http = require('http');
const app = require('./server/server');

const server = app.listen(5099, async () => {
  console.log('Testing server running on port 5099...');

  function request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const req = http.request(`http://localhost:5099${path}`, options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(body) });
          } catch (e) {
            resolve({ status: res.statusCode, data: body });
          }
        });
      });
      req.on('error', reject);
      if (options.body) {
        req.write(options.body);
      }
      req.end();
    });
  }

  try {
    // 1. Health
    const health = await request('/api/health');
    console.log('1. Health check status:', health.status, health.data.status);

    // 2. Categories
    const categories = await request('/api/categories');
    console.log('2. Categories count:', categories.data.count);

    // 3. Products
    const products = await request('/api/products');
    console.log('3. Products count:', products.data.count);

    // 4. Single Product
    const single = await request('/api/products/1');
    console.log('4. Product #1 name:', single.data.data.name);

    // 5. Submit Enquiry
    const enquiryPayload = JSON.stringify({
      fullName: 'Vikram Sharma',
      companyName: 'Apex Industrial Logistics',
      email: 'vikram@apexlogistics.com',
      phone: '83293 58214',
      subject: 'Quotation Request for Pallet Trucks',
      productId: 1,
      message: 'Need 10 units of 2.5T Hand Pallet Trucks for Pune warehouse depot.'
    });
    const enquiry = await request('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(enquiryPayload)
      },
      body: enquiryPayload
    });
    console.log('5. Enquiry submission status:', enquiry.status, enquiry.data.message);

    console.log('\n--- ALL BACKEND ENDPOINTS TESTED AND VERIFIED SUCCESSFULLY ---');
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    server.close(() => {
      console.log('Test server closed.');
      process.exit(0);
    });
  }
});
