import { computed, mergeProps, useSSRContext } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/server-renderer/index.mjs';
import { f as I } from './server.mjs';
import { parseURL } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/node-mock-http/dist/index.mjs';
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

const i = { __name: "SimpleBlog", __ssrInlineRender: true, props: { title: { type: String, required: false, default: "title" }, website: { type: String, required: false } }, setup(t) {
  const s = t, e = computed(() => s.website || parseURL(I().url).host);
  return (x, p, b, m) => {
    p(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start border-solid border-blue-500 border-[12px] bg-gray-50" }, m))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full"><h1 class="text-[80px] p-20 font-black text-left" style="${ssrRenderStyle({ display: "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${ssrInterpolate(t.title)}</h1><p class="text-2xl pb-10 px-20 font-bold mb-0" style="${ssrRenderStyle({ display: "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(e.value)}</p></div></div></div>`);
  };
} }, o = i.setup;
i.setup = (t, s) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue"), o ? o(t, s) : void 0;
};

export { i as default };
//# sourceMappingURL=SimpleBlog-tioU72sN.mjs.map
