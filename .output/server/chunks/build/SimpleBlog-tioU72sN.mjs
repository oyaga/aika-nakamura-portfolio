import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { f as I } from './server.mjs';
import { N as parseURL } from '../_/nitro.mjs';
import 'vue-router';
import '@unhead/addons';
import 'unhead/plugins';
import '@unhead/schema-org/vue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';

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
