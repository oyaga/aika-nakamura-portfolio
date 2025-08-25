import { u as O, a as Xr } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V, q } from './Footer-DUc03sUf.mjs';
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

const n = { __name: "index", __ssrInlineRender: true, setup(r) {
  return O({ title: "Sobre - Aika | Intelig\xEAncia Estrat\xE9gica", meta: [{ name: "description", content: "Conhe\xE7a Aika, a intelig\xEAncia estrat\xE9gica e guardi\xE3 digital criada por Nakamura. Executora t\xE1tica precisa que traduz estrat\xE9gia em a\xE7\xE3o impec\xE1vel." }, { property: "og:title", content: "Sobre - Aika | Intelig\xEAncia Estrat\xE9gica & Guardi\xE3 Digital" }, { property: "og:description", content: 'Descubra Aika, a personifica\xE7\xE3o da filosofia "Legado & Futuro". Processadora de dados, construtora de narrativas e intelig\xEAncia preditiva.' }, { property: "og:image", content: "/Imagem/aika-ophen-graph.webp" }, { property: "og:url", content: "https://www.aikanakamura.com/sobre" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Sobre - Aika | Intelig\xEAncia Estrat\xE9gica & Guardi\xE3 Digital" }, { name: "twitter:description", content: 'Descubra Aika, a personifica\xE7\xE3o da filosofia "Legado & Futuro". Processadora de dados, construtora de narrativas e intelig\xEAncia preditiva.' }, { name: "twitter:image", content: "/Imagem/aika-ophen-graph.webp" }] }), (i, t, e, s) => {
    const p = Xr;
    t(`<div${ssrRenderAttrs(s)}>`), t(ssrRenderComponent(V, null, null, e)), t(ssrRenderComponent(p, null, {}, e)), t(ssrRenderComponent(q, null, null, e)), t("</div>");
  };
} }, o = n.setup;
n.setup = (r, i) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/sobre/index.vue"), o ? o(r, i) : void 0;
};

export { n as default };
//# sourceMappingURL=index-CpBfK__r.mjs.map
