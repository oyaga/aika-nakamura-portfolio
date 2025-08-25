import { V, q } from './Footer-DUc03sUf.mjs';
import { _ as xe, u as O, a as Xr } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { o } from './useDevice-B3gchbyX.mjs';
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

const i = { __name: "contato", __ssrInlineRender: true, setup(c) {
  return o(), O({ title: "Contato - Aika Nakamura", meta: [{ name: "description", content: "Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar d\xFAvidas sobre design e desenvolvimento digital." }, { property: "og:title", content: "Contato - Aika Nakamura" }, { property: "og:description", content: "Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar d\xFAvidas sobre design e desenvolvimento digital." }, { property: "og:image", content: "/Imagem/aika-ophen-graph.webp" }, { property: "og:url", content: "https://www.aikanakamura.com/contato" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Contato - Aika Nakamura" }, { name: "twitter:description", content: "Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar d\xFAvidas sobre design e desenvolvimento digital." }, { name: "twitter:image", content: "/Imagem/aika-ophen-graph.webp" }] }), (n, e, o, s) => {
    const p = V, m = Xr;
    e(`<div${ssrRenderAttrs(s)} data-v-c0f6bc78>`), e(ssrRenderComponent(p, null, null, o)), e(ssrRenderComponent(m, null, { fallback: withCtx(($, d, x, t) => {
      if (d) d(`<div class="contact-placeholder" data-v-c0f6bc78${t}><div class="placeholder-content" data-v-c0f6bc78${t}><div class="placeholder-badge" data-v-c0f6bc78${t}></div><div class="placeholder-title" data-v-c0f6bc78${t}></div><div class="placeholder-subtitle" data-v-c0f6bc78${t}></div><div class="placeholder-form" data-v-c0f6bc78${t}><div class="placeholder-input" data-v-c0f6bc78${t}></div><div class="placeholder-input" data-v-c0f6bc78${t}></div><div class="placeholder-textarea" data-v-c0f6bc78${t}></div><div class="placeholder-button" data-v-c0f6bc78${t}></div></div></div></div>`);
      else return [createVNode("div", { class: "contact-placeholder" }, [createVNode("div", { class: "placeholder-content" }, [createVNode("div", { class: "placeholder-badge" }), createVNode("div", { class: "placeholder-title" }), createVNode("div", { class: "placeholder-subtitle" }), createVNode("div", { class: "placeholder-form" }, [createVNode("div", { class: "placeholder-input" }), createVNode("div", { class: "placeholder-input" }), createVNode("div", { class: "placeholder-textarea" }), createVNode("div", { class: "placeholder-button" })])])])];
    }) }, o)), e(ssrRenderComponent(q, null, null, o)), e("</div>");
  };
} }, l = i.setup;
i.setup = (c, n) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue"), l ? l(c, n) : void 0;
};
const Q = xe(i, [["__scopeId", "data-v-c0f6bc78"]]);

export { Q as default };
//# sourceMappingURL=contato-C4rI9S8p.mjs.map
