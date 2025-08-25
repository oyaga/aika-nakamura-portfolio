import { mergeProps, unref, useSSRContext } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/server-renderer/index.mjs';
import { o } from './useDevice-B3gchbyX.mjs';
import { u as O } from './server.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unocss/core/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/devalue/index.js';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unhead/addons/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unhead/schema-org/dist/vue.mjs';

const p = { __name: "device-test", __ssrInlineRender: true, setup(i) {
  const e = o();
  return O({ title: "Device Detection Test" }), (r, o, u, d) => {
    o(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, d))}><h1 class="text-2xl font-bold mb-4">Device Detection Test</h1><div class="space-y-2"><p><strong>isMobile:</strong> ${ssrInterpolate(unref(e).isMobile)}</p><p><strong>isTablet:</strong> ${ssrInterpolate(unref(e).isTablet)}</p><p><strong>isDesktop:</strong> ${ssrInterpolate(unref(e).isDesktop)}</p><p><strong>isMobileOrTablet:</strong> ${ssrInterpolate(unref(e).isMobileOrTablet)}</p><p><strong>isAndroid:</strong> ${ssrInterpolate(unref(e).isAndroid)}</p><p><strong>isIos:</strong> ${ssrInterpolate(unref(e).isIos)}</p><p><strong>userAgent:</strong> ${ssrInterpolate(unref(e).userAgent)}</p></div><div class="mt-8"><h2 class="text-xl font-bold mb-4">Component Test:</h2>`), unref(e).isMobile ? o('<div class="p-4 bg-green-100 border border-green-400 rounded"><h3 class="font-bold text-green-800">Mobile Component Loaded! \u{1F4F1}</h3><p class="text-green-700">This is the mobile version of the component.</p></div>') : o('<div class="p-4 bg-blue-100 border border-blue-400 rounded"><h3 class="font-bold text-blue-800">Desktop Component Loaded! \u{1F5A5}\uFE0F</h3><p class="text-blue-700">This is the desktop version of the component.</p></div>'), o('</div><div class="mt-8"><a href="/" class="text-blue-500 underline">\u2190 Voltar para Home</a></div></div>');
  };
} }, n = p.setup;
p.setup = (i, e) => {
  const r = useSSRContext();
  return (r.modules || (r.modules = /* @__PURE__ */ new Set())).add("pages/device-test.vue"), n ? n(i, e) : void 0;
};

export { p as default };
//# sourceMappingURL=device-test-Dee9dfR4.mjs.map
