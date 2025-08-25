import { computed, resolveComponent, defineComponent, h, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { e as it, f as I } from './server.mjs';
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

const f = { __name: "NuxtSeo", __ssrInlineRender: true, props: { colorMode: { type: String, required: false }, title: { type: String, required: false, default: "title" }, description: { type: String, required: false }, icon: { type: [String, Boolean], required: false }, siteName: { type: String, required: false }, siteLogo: { type: String, required: false }, theme: { type: String, required: false, default: "#00dc82" } }, setup(r) {
  const t = r, i = /^#(?:[0-9a-f]{3}){1,2}$/i, a = it(), m = computed(() => t.colorMode || a.colorPreference || "light"), h$1 = computed(() => i.test(t.theme) ? t.theme : i.test(`#${t.theme}`) ? `#${t.theme}` : t.theme.startsWith("rgb") ? `#${t.theme.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",").map((o) => Number.parseInt(o.trim(), 10)).map((o) => {
    const s = o.toString(16);
    return s.length === 1 ? `0${s}` : s;
  }).join("")}` : "#FFFFFF"), y = computed(() => {
    var _a;
    return (_a = h$1.value.replace("#", "").match(/.{1,2}/g)) == null ? void 0 : _a.map((c) => Number.parseInt(c, 16)).join(", ");
  }), g = I(), u = computed(() => t.siteName || g.name), p = computed(() => t.siteLogo || g.logo), b = a.hasNuxtIcon ? resolveComponent("Icon") : defineComponent({ render() {
    return h("div", "missing @nuxt/icon");
  } });
  return typeof t.icon == "string" && a.hasNuxtIcon, (c, e, o, s) => {
    e(`<div${ssrRenderAttrs(mergeProps({ class: ["w-full h-full flex justify-between relative p-[60px]", [m.value === "light" ? ["bg-white", "text-gray-900"] : ["bg-gray-900", "text-white"]]] }, s))}><div class="flex absolute top-0 right-[-100%]" style="${ssrRenderStyle({ width: "200%", height: "200%", backgroundImage: `radial-gradient(circle, rgba(${y.value}, 0.5) 0%,  ${m.value === "dark" ? "rgba(5, 5, 5,0.3)" : "rgba(255, 255, 255, 0.7)"} 50%, ${t.colorMode === "dark" ? "rgba(5, 5, 5,0)" : "rgba(255, 255, 255, 0)"} 70%)` })}"></div><div class="h-full w-full justify-between relative"><div class="flex flex-row justify-between items-start"><div class="flex flex-col w-full max-w-[65%]"><h1 class="m-0 font-bold mb-[30px] text-[75px]" style="${ssrRenderStyle([{ display: "block", "text-overflow": "ellipsis" }, { lineClamp: r.description ? 2 : 3 }])}">${ssrInterpolate(r.title)}</h1>`), r.description ? e(`<p class="${ssrRenderClass([[m.value === "light" ? ["text-gray-700"] : ["text-gray-300"]], "text-[35px] leading-12"])}" style="${ssrRenderStyle({ display: "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(r.description)}</p>`) : e("<!---->"), e("</div>"), r.icon ? (e(`<div style="${ssrRenderStyle({ width: "30%" })}" class="flex justify-end">`), e(ssrRenderComponent(unref(b), { name: r.icon, size: "250px", style: { margin: "0 auto", opacity: "0.7" } }, null, o)), e("</div>")) : e("<!---->"), e('</div><div class="flex flex-row justify-center items-center text-left w-full">'), p.value ? e(`<img${ssrRenderAttr("src", p.value)} height="30">`) : (e(`<!--[--><svg height="50" width="50" class="mr-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path${ssrRenderAttr("fill", r.theme.includes("#") ? r.theme : `#${r.theme}`)} d="M62.3,-53.9C74.4,-34.5,73.5,-9,67.1,13.8C60.6,36.5,48.7,56.5,30.7,66.1C12.7,75.7,-11.4,74.8,-31.6,65.2C-51.8,55.7,-67.9,37.4,-73.8,15.7C-79.6,-6,-75.1,-31.2,-61.1,-51C-47.1,-70.9,-23.6,-85.4,0.8,-86C25.1,-86.7,50.2,-73.4,62.3,-53.9Z" transform="translate(100 100)"></path></svg>`), u.value ? e(`<p style="${ssrRenderStyle({ "font-size": "25px" })}" class="font-bold">${ssrInterpolate(u.value)}</p>`) : e("<!---->"), e("<!--]-->")), e("</div></div></div>");
  };
} }, v = f.setup;
f.setup = (r, t) => {
  const i = useSSRContext();
  return (i.modules || (i.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue"), v ? v(r, t) : void 0;
};
const X = Object.assign(f, { __name: "NuxtSeo" });

export { X as default };
//# sourceMappingURL=NuxtSeo-_R7GxKoi.mjs.map
