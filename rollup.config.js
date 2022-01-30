import ts from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        name: 'logo',
        file: 'dist/index.js',
        format: 'umd',
        sourcemap: true
      }
    ],
    plugins: [ts({ declaration: false, module: 'ES6' }), resolve()]
  },
  {
    input: './bin/logo.ts',
    output: [
      {
        banner: '#!/usr/bin/env node',
        name: 'logo',
        file: 'bin/logo.js',
        format: 'umd'
      }
    ],
    plugins: [ts()]
  }
]