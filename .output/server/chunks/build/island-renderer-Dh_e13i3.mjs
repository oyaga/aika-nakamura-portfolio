import { defineComponent, defineAsyncComponent, createVNode, onErrorCaptured } from 'vue';
import { i as E, c as U } from './server.mjs';
import '../_/nitro.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const d = { BrandedLogo: defineAsyncComponent(() => import('./BrandedLogo-Co9YqFbE.mjs').then((t) => t.default || t)), Frame: defineAsyncComponent(() => import('./Frame-B0jrJoVp.mjs').then((t) => t.default || t)), Nuxt: defineAsyncComponent(() => import('./Nuxt-BN2QFHda.mjs').then((t) => t.default || t)), NuxtSeo: defineAsyncComponent(() => import('./NuxtSeo-_R7GxKoi.mjs').then((t) => t.default || t)), Pergel: defineAsyncComponent(() => import('./Pergel-CdCmNRg-.mjs').then((t) => t.default || t)), SimpleBlog: defineAsyncComponent(() => import('./SimpleBlog-tioU72sN.mjs').then((t) => t.default || t)), UnJs: defineAsyncComponent(() => import('./UnJs-CBeHDC48.mjs').then((t) => t.default || t)), Wave: defineAsyncComponent(() => import('./Wave-CeDALEBU.mjs').then((t) => t.default || t)), WithEmoji: defineAsyncComponent(() => import('./WithEmoji-DkqjMpBY.mjs').then((t) => t.default || t)) }, v = defineComponent({ name: "IslandRenderer", props: { context: { type: Object, required: true } }, setup(t) {
  E().entries.clear();
  const o = d[t.context.name];
  if (!o) throw U({ statusCode: 404, statusMessage: `Island component not found: ${t.context.name}` });
  return onErrorCaptured((r) => {
    console.log(r);
  }), () => createVNode(o || "span", { ...t.context.props, "data-island-uid": "" });
} });

export { v as default };
//# sourceMappingURL=island-renderer-Dh_e13i3.mjs.map
