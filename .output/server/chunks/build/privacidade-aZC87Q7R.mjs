import { u as O, b as To } from './server.mjs';
import { mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const r = { __name: "privacidade", __ssrInlineRender: true, setup(a) {
  return O({ title: "Pol\xEDtica de Privacidade - Aika Nakamura", meta: [{ name: "description", content: "Pol\xEDtica de privacidade do site Aika Nakamura" }, { property: "og:title", content: "Pol\xEDtica de Privacidade - Aika Nakamura" }, { property: "og:description", content: "Pol\xEDtica de privacidade do site Aika Nakamura" }, { property: "og:image", content: "/Imagem/aika-ophen-graph.webp" }, { property: "og:url", content: "https://www.aikanakamura.com/privacidade" }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Pol\xEDtica de Privacidade - Aika Nakamura" }, { name: "twitter:description", content: "Pol\xEDtica de privacidade do site Aika Nakamura" }, { name: "twitter:image", content: "/Imagem/aika-ophen-graph.webp" }] }), (t, e, l, n) => {
    const c = To;
    e(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white" }, n))}><div class="container mx-auto px-4 py-16">`), e(ssrRenderComponent(c, { to: "/", class: "inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors" }, { default: withCtx((P, o, k, i) => {
      if (o) o(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"${i}><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"${i}></path></svg> Voltar para o in\xEDcio `);
      else return [(openBlock(), createBlock("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor" }, [createVNode("path", { "fill-rule": "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule": "evenodd" })])), createTextVNode(" Voltar para o in\xEDcio ")];
    }), _: 1 }, l)), e(`<div class="max-w-3xl mx-auto"><h1 class="text-3xl md:text-4xl font-bold mb-8 text-orange-500">Pol\xEDtica de Privacidade</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700"><p class="text-gray-300 mb-6"> Esta Pol\xEDtica de Privacidade descreve como a Aika Nakamura coleta, usa e protege suas informa\xE7\xF5es pessoais quando voc\xEA visita nosso site. </p><div class="space-y-8"><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Informa\xE7\xF5es que Coletamos</h2><ul class="list-disc pl-6 space-y-2 text-gray-300"><li>Informa\xE7\xF5es fornecidas voluntariamente por voc\xEA (nome, e-mail, telefone)</li><li>Dados de navega\xE7\xE3o (endere\xE7o IP, tipo de navegador, p\xE1ginas visitadas)</li><li>Informa\xE7\xF5es de cookies e tecnologias similares</li></ul></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Como Usamos suas Informa\xE7\xF5es</h2><ul class="list-disc pl-6 space-y-2 text-gray-300"><li>Para fornecer e melhorar nossos servi\xE7os</li><li>Para comunicar sobre projetos e atualiza\xE7\xF5es</li><li>Para responder a suas solicita\xE7\xF5es e perguntas</li><li>Para an\xE1lise e melhorias do site</li></ul></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Compartilhamento de Informa\xE7\xF5es</h2><p class="text-gray-300 mb-4"> N\xE3o vendemos, trocamos ou alugamos suas informa\xE7\xF5es pessoais para terceiros. Podemos compartilhar informa\xE7\xF5es apenas nas seguintes circunst\xE2ncias: </p><ul class="list-disc pl-6 space-y-2 text-gray-300"><li>Com seu consentimento</li><li>Para cumprir obriga\xE7\xF5es legais</li><li>Com prestadores de servi\xE7o que nos auxiliam na opera\xE7\xE3o do site</li></ul></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Seguran\xE7a</h2><p class="text-gray-300"> Implementamos medidas de seguran\xE7a t\xE9cnicas e organizacionais para proteger suas informa\xE7\xF5es contra acesso n\xE3o autorizado, altera\xE7\xE3o, divulga\xE7\xE3o ou destrui\xE7\xE3o. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Seus Direitos</h2><p class="text-gray-300 mb-4"> Voc\xEA tem direito a: </p><ul class="list-disc pl-6 space-y-2 text-gray-300"><li>Acessar suas informa\xE7\xF5es pessoais</li><li>Corrigir dados imprecisos</li><li>Solicitar a exclus\xE3o de seus dados</li><li>Revogar seu consentimento</li></ul></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Altera\xE7\xF5es nesta Pol\xEDtica</h2><p class="text-gray-300"> Podemos atualizar esta Pol\xEDtica de Privacidade periodicamente. Notificaremos sobre altera\xE7\xF5es significativas publicando a nova pol\xEDtica em nosso site. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">Contato</h2><p class="text-gray-300"> Se voc\xEA tiver d\xFAvidas sobre esta Pol\xEDtica de Privacidade, entre em contato conosco atrav\xE9s do e-mail: <a href="mailto:felipe.kenji@hotmail.com" class="text-orange-400 hover:text-orange-300 underline">felipe.kenji@hotmail.com</a></p></section></div><div class="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400"><p>\xDAltima atualiza\xE7\xE3o: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"))}</p></div></div></div></div></div>`);
  };
} }, s = r.setup;
r.setup = (a, t) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/privacidade.vue"), s ? s(a, t) : void 0;
};

export { r as default };
//# sourceMappingURL=privacidade-aZC87Q7R.mjs.map
