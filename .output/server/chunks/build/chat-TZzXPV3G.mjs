import { u as O, a as Xr } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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

const d = { __name: "chat", __ssrInlineRender: true, setup(o) {
  return O({ title: "Chat - Aika | Conversa Inteligente", meta: [{ name: "description", content: "Converse diretamente com Aika, a intelig\xEAncia estrat\xE9gica. Chat inteligente para tirar d\xFAvidas e explorar ideias sobre projetos digitais." }, { property: "og:title", content: "Chat com Aika | Conversa Inteligente" }, { property: "og:description", content: "Interaja diretamente com Aika atrav\xE9s do chat inteligente. An\xE1lise estrat\xE9gica e respostas instant\xE2neas para seus projetos." }, { property: "og:image", content: "/Imagem/aika-ophen-graph.webp" }, { property: "og:url", content: "https://www.aikanakamura.com/sobre/chat" }, { property: "og:type", content: "website" }] }), ref(null), (i, e, a, c) => {
    const m = Xr;
    e(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500" }, c))}>`), e(ssrRenderComponent(V, null, null, a)), e('<section class="py-12 px-4"><div class="container mx-auto"><div class="max-w-5xl mx-auto"><div class="text-center mb-8"><h1 class="text-4xl md:text-5xl font-bold text-white mb-4"> Chat com Aika </h1><p class="text-xl text-orange-100 max-w-2xl mx-auto"> Converse diretamente com a intelig\xEAncia estrat\xE9gica </p></div><div class="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">'), e(ssrRenderComponent(m, null, { fallback: withCtx((k, n, C, t) => {
      if (n) n(`<div class="w-full h-[70vh] flex items-center justify-center"${t}><div class="text-center"${t}><div class="animate-spin rounded-full h-12 w-12 border-b-3 border-orange-500 mx-auto mb-4"${t}></div><p class="text-gray-600 text-lg"${t}>Preparando chat...</p></div></div>`);
      else return [createVNode("div", { class: "w-full h-[70vh] flex items-center justify-center" }, [createVNode("div", { class: "text-center" }, [createVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-3 border-orange-500 mx-auto mb-4" }), createVNode("p", { class: "text-gray-600 text-lg" }, "Preparando chat...")])])];
    }) }, a)), e('</div><div class="grid md:grid-cols-2 gap-6 mt-8"><div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"><div class="flex items-center mb-3"><div class="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3"><svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="text-lg font-semibold text-white">Respostas R\xE1pidas</h3></div><p class="text-orange-100">Obtenha respostas instant\xE2neas e precisas para suas perguntas</p></div><div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"><div class="flex items-center mb-3"><div class="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3"><svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="text-lg font-semibold text-white">An\xE1lise Inteligente</h3></div><p class="text-orange-100">Receba insights estrat\xE9gicos baseados em an\xE1lise avan\xE7ada</p></div></div></div></div></section>'), e(ssrRenderComponent(q, null, null, a)), e("</div>");
  };
} }, l = d.setup;
d.setup = (o, i) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/sobre/chat.vue"), l ? l(o, i) : void 0;
};

export { d as default };
//# sourceMappingURL=chat-TZzXPV3G.mjs.map
