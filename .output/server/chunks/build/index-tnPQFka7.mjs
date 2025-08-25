import { V, q } from './Footer-DUc03sUf.mjs';
import { _ as xe, u as O, a as Xr } from './server.mjs';
import { ref, computed, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const m = { __name: "index", __ssrInlineRender: true, setup(s) {
  const a = ref(false);
  return computed(() => a.value), O({ title: "Aika Nakamura - Design & Development", meta: [{ name: "description", content: "Portf\xF3lio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experi\xEAncia do usu\xE1rio." }, { property: "og:title", content: "Aika Nakamura - Design & Development" }, { property: "og:description", content: "Portf\xF3lio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experi\xEAncia do usu\xE1rio." }, { property: "og:image", content: "/Imagem/aika-ophen-graph.webp" }, { property: "og:url", content: "https://www.aikanakamura.com" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Aika Nakamura - Design & Development" }, { name: "twitter:description", content: "Portf\xF3lio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experi\xEAncia do usu\xE1rio." }, { name: "twitter:image", content: "/Imagem/aika-ophen-graph.webp" }] }), (n, e, i, d) => {
    const l = V, u = Xr, v = q;
    e(`<div${ssrRenderAttrs(d)} data-v-60347929>`), e(ssrRenderComponent(l, null, null, i)), e(ssrRenderComponent(u, null, { fallback: withCtx((N, p, D, t) => {
      if (p) p(`<div class="loading-fallback" data-v-60347929${t}><div class="loading-content" data-v-60347929${t}><div class="loading-spinner" data-v-60347929${t}></div><p data-v-60347929${t}>Carregando...</p></div></div>`);
      else return [createVNode("div", { class: "loading-fallback" }, [createVNode("div", { class: "loading-content" }, [createVNode("div", { class: "loading-spinner" }), createVNode("p", null, "Carregando...")])])];
    }) }, i)), e(ssrRenderComponent(v, null, null, i)), e("</div>");
  };
} }, c = m.setup;
m.setup = (s, a) => {
  const n = useSSRContext();
  return (n.modules || (n.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), c ? c(s, a) : void 0;
};
const T = xe(m, [["__scopeId", "data-v-60347929"]]);

export { T as default };
//# sourceMappingURL=index-tnPQFka7.mjs.map
