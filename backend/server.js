import app from './index.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PortfolioSim Backend is running on port ${PORT}`);
  console.log('Time Machine API ready. No futures allowed.');
});
