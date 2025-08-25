import { resolveComponent, mergeProps, useSSRContext } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/server-renderer/index.mjs';

const m = { __name: "Frame", __ssrInlineRender: true, props: { title: { type: String, required: false }, description: { type: String, required: false }, bg: { type: String, required: false, default: "linear-gradient(to bottom right, #171717, #131313)" }, icon: { type: String, required: false }, logo: { type: String, required: false }, image: { type: String, required: false }, username: { type: String, required: false }, socials: { type: Array, required: false } }, setup(t) {
  return (r, e, s, c) => {
    const n = resolveComponent("Icon");
    e(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white", style: { backgroundImage: t.bg } }, c))}>`), t.image ? e(`<div class="absolute inset-0 w-full h-full bg-center opacity-10" style="${ssrRenderStyle({ backgroundImage: `url(${t.image})` })}"></div>`) : e("<!---->"), e(`<div class="flex flex-col items-center text-center"><h1 class="flex gap-4 text-7xl font-bold" style="${ssrRenderStyle({ display: "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">`), t.icon ? e(ssrRenderComponent(n, { name: t.icon }, null, s)) : e("<!---->"), e(` ${ssrInterpolate(t.title)}</h1><p class="text-2xl max-w-3xl" style="${ssrRenderStyle({ display: "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(t.description)}</p></div>`), t.logo ? e(`<img${ssrRenderAttr("src", t.logo)} class="absolute bottom-0 left-0 p-5" style="${ssrRenderStyle({ height: "125px", width: "153px" })}">`) : e("<!---->"), e('<div class="absolute bottom-5 right-5 flex gap-4">'), t.username ? e(`<div class="absolute bottom-12 right-8 font-bold">${ssrInterpolate(t.username)}</div>`) : e("<!---->"), e("<!--[-->"), ssrRenderList(t.socials, (o) => {
      e(ssrRenderComponent(n, { key: o.name, name: o.icon, class: "w-7 h-7" }, null, s));
    }), e("<!--]--></div></div>");
  };
} }, d = m.setup;
m.setup = (t, r) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue"), d ? d(t, r) : void 0;
};

export { m as default };
//# sourceMappingURL=Frame-B0jrJoVp.mjs.map
