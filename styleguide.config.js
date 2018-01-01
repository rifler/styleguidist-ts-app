const path = require('path');

module.exports = {
    components: 'src/components/**/*.{ts,tsx}',
    skipComponentsWithoutExample: true,
    ignore: ['**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
};

