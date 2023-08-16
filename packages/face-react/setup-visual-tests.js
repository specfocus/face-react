const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const matchOptions = {
  blur: 1,
  failureThresholdType: 'percent',
  // 5% allowed difference
  failureThreshold: 0.06
};

const toMatchImageSnapshot = configureToMatchImageSnapshot(matchOptions);

expect.extend({ toMatchImageSnapshot });
