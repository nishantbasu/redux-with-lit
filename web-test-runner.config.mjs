import { esbuildPlugin } from '@web/dev-server-esbuild';
import sassRewritePath  from './web-dev-server/middlewares/sassRewritePath.mjs';
import customHTMLPlugin from './web-dev-server/plugins/custom-html-plugin.mjs';
import customCssPlugin from './web-dev-server/plugins/custom-css-plugin.mjs';
import { fromRollup } from '@web/dev-server-rollup';
import rollupReplace from '@rollup/plugin-replace';

const replace = fromRollup(rollupReplace);

export default {
  files: 'src/**/*.spec.ts',
  nodeResolve: true,
  plugins: [
    replace({
      'process.env.NODE_ENV': '"development"'
    }),
    customHTMLPlugin,
    customCssPlugin,
    esbuildPlugin({ ts: true, tsconfig:'./tsconfig.json', target: 'auto' }),
  ],
  middleware: [sassRewritePath],
};
