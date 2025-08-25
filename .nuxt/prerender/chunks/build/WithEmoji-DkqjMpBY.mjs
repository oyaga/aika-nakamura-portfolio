import { mergeProps, useSSRContext } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/server-renderer/index.mjs';

const i = { __name: "WithEmoji", __ssrInlineRender: true, props: { emoji: { type: String, required: false, default: "\u{1F44B}" }, title: { type: String, required: false, default: "title" } }, setup(e) {
  return (s, t, m, n) => {
    t(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start bg-sky-50" }, n))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-center items-center px-20 w-full h-full text-center"><p class="text-[120px] mx-auto text-center font-bold mb-0">${ssrInterpolate(e.emoji)}</p><h1 class="text-[60px] font-bold" style="${ssrRenderStyle({ display: "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${ssrInterpolate(e.title)}</h1></div></div></div>`);
  };
} }, r = i.setup;
i.setup = (e, s) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue"), r ? r(e, s) : void 0;
};

export { i as default };
//# sourceMappingURL=WithEmoji-DkqjMpBY.mjs.map
