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

const i = { __name: "termos", __ssrInlineRender: true, setup(o) {
  return O({ title: "Termos de Uso - Aika Nakamura", meta: [{ name: "description", content: "Termos de uso do site Aika Nakamura" }] }), (s, e, n, l) => {
    const d = To;
    e(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white" }, l))}><div class="container mx-auto px-4 py-16">`), e(ssrRenderComponent(d, { to: "/", class: "inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors" }, { default: withCtx((k, t, _, a) => {
      if (t) t(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"${a}><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"${a}></path></svg> Voltar para o in\xEDcio `);
      else return [(openBlock(), createBlock("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor" }, [createVNode("path", { "fill-rule": "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule": "evenodd" })])), createTextVNode(" Voltar para o in\xEDcio ")];
    }), _: 1 }, n)), e(`<div class="max-w-3xl mx-auto"><h1 class="text-3xl md:text-4xl font-bold mb-8 text-orange-500">Termos de Uso</h1><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700"><p class="text-gray-300 mb-6"> Estes Termos de Uso regem o uso do website da Aika Nakamura. Ao acessar ou usar nosso site, voc\xEA concorda em cumprir estes termos. </p><div class="space-y-8"><section><h2 class="text-xl font-semibold mb-4 text-orange-400">1. Aceita\xE7\xE3o dos Termos</h2><p class="text-gray-300 mb-4"> Ao acessar e utilizar este website, voc\xEA aceita e concorda com os Termos de Uso aqui estabelecidos e com todas as leis e regulamentos aplic\xE1veis. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">2. Uso do Website</h2><p class="text-gray-300 mb-4"> O conte\xFAdo deste website \xE9 fornecido apenas para fins informativos. Voc\xEA pode visualizar, imprimir e baixar o conte\xFAdo para uso pessoal, sujeito a estas condi\xE7\xF5es: </p><ul class="list-disc pl-6 space-y-2 text-gray-300"><li>Voc\xEA n\xE3o deve modificar nenhuma parte do material</li><li>Voc\xEA n\xE3o deve usar o material para fins comerciais</li><li>Voc\xEA n\xE3o deve reproduzir, duplicar ou copiar o conte\xFAdo sem permiss\xE3o expressa</li></ul></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">3. Propriedade Intelectual</h2><p class="text-gray-300"> Todo o conte\xFAdo, logotipos, textos, gr\xE1ficos, \xEDcones, software e design do website s\xE3o de propriedade da Aika Nakamura ou de seus licenciadores e s\xE3o protegidos por leis de direitos autorais e marcas registradas. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">4. Limita\xE7\xF5es de Responsabilidade</h2><p class="text-gray-300"> O website \xE9 fornecido &quot;como est\xE1&quot;. A Aika Nakamura n\xE3o oferece garantias expressas ou impl\xEDcitas sobre a opera\xE7\xE3o do site ou a informa\xE7\xE3o, conte\xFAdo, materiais ou produtos inclu\xEDdos neste site. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">5. Links para Sites de Terceiros</h2><p class="text-gray-300"> Nosso website pode conter links para sites de terceiros. N\xE3o temos controle sobre o conte\xFAdo desses sites e n\xE3o somos respons\xE1veis por eles ou por quaisquer perdas que possam resultar do uso desses sites. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">6. Altera\xE7\xF5es nos Termos</h2><p class="text-gray-300"> Reservamo-nos o direito de modificar estes termos a qualquer momento. As altera\xE7\xF5es entrar\xE3o em vigor imediatamente ap\xF3s serem publicadas no website. Seu uso continuado do website ap\xF3s a publica\xE7\xE3o das altera\xE7\xF5es constitui aceita\xE7\xE3o dessas mudan\xE7as. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">7. Lei Aplic\xE1vel</h2><p class="text-gray-300"> Estes termos s\xE3o regidos pelas leis do Brasil. Qualquer disputa decorrente destes termos ser\xE1 resolvida exclusivamente pelos tribunais brasileiros. </p></section><section><h2 class="text-xl font-semibold mb-4 text-orange-400">8. Contato</h2><p class="text-gray-300"> Se voc\xEA tiver d\xFAvidas sobre estes Termos de Uso, entre em contato conosco atrav\xE9s do e-mail: <a href="mailto:felipe.kenji@hotmail.com" class="text-orange-400 hover:text-orange-300 underline">felipe.kenji@hotmail.com</a></p></section></div><div class="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400"><p>\xDAltima atualiza\xE7\xE3o: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"))}</p></div></div></div></div></div>`);
  };
} }, r = i.setup;
i.setup = (o, s) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("pages/termos.vue"), r ? r(o, s) : void 0;
};

export { i as default };
//# sourceMappingURL=termos-Dgmirxoj.mjs.map
