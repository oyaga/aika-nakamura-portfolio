
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AboutSection': typeof import("../app/components/AboutSection.vue")['default']
    'ContactSection': typeof import("../app/components/ContactSection.vue")['default']
    'Footer': typeof import("../app/components/Footer.vue")['default']
    'Header': typeof import("../app/components/Header.vue")['default']
    'HeroSection': typeof import("../app/components/HeroSection.vue")['default']
    'ServicesSection': typeof import("../app/components/ServicesSection.vue")['default']
    'WhatsAppButton': typeof import("../app/components/WhatsAppButton.vue")['default']
    'ContatoContactFormSection': typeof import("../app/components/contato/ContactFormSection.vue")['default']
    'ContatoHeaderSection': typeof import("../app/components/contato/HeaderSection.vue")['default']
    'MobileContatoMContactFormSection': typeof import("../app/components/mobile/contato-m/ContactFormSection.vue")['default']
    'MobileContatoMHeaderSection': typeof import("../app/components/mobile/contato-m/HeaderSection.vue")['default']
    'MobileIndexMAboutSection': typeof import("../app/components/mobile/index-m/AboutSection.vue")['default']
    'MobileIndexMContactSection': typeof import("../app/components/mobile/index-m/ContactSection.vue")['default']
    'MobileIndexMHeroSection': typeof import("../app/components/mobile/index-m/HeroSection.vue")['default']
    'MobileIndexMServicesSection': typeof import("../app/components/mobile/index-m/ServicesSection.vue")['default']
    'MobileProjetosMHeroSection': typeof import("../app/components/mobile/projetos-m/HeroSection.vue")['default']
    'MobileProjetosMProjectsSection': typeof import("../app/components/mobile/projetos-m/ProjectsSection.vue")['default']
    'MobileSobreMAboutSection': typeof import("../app/components/mobile/sobre-m/AboutSection.vue")['default']
    'MobileSobreMHeroSection': typeof import("../app/components/mobile/sobre-m/HeroSection.vue")['default']
    'MobileSobreMSkillsSection': typeof import("../app/components/mobile/sobre-m/SkillsSection.vue")['default']
    'ProjetosCTASection': typeof import("../app/components/projetos/CTASection.vue")['default']
    'ProjetosHeroSection': typeof import("../app/components/projetos/HeroSection.vue")['default']
    'ProjetosProjectsSection': typeof import("../app/components/projetos/ProjectsSection.vue")['default']
    'SobreAboutSection': typeof import("../app/components/sobre/AboutSection.vue")['default']
    'SobreHeroSection': typeof import("../app/components/sobre/HeroSection.vue")['default']
    'SobreSkillsSection': typeof import("../app/components/sobre/SkillsSection.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'OgImage': typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']
    'OgImageScreenshot': typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']
    'SchemaOrgDebug': typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
    'SchemaOrgArticle': typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
    'SchemaOrgBreadcrumb': typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
    'SchemaOrgComment': typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
    'SchemaOrgEvent': typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
    'SchemaOrgFoodEstablishment': typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
    'SchemaOrgHowTo': typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
    'SchemaOrgImage': typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
    'SchemaOrgJobPosting': typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
    'SchemaOrgLocalBusiness': typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
    'SchemaOrgOrganization': typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
    'SchemaOrgPerson': typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
    'SchemaOrgProduct': typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
    'SchemaOrgQuestion': typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
    'SchemaOrgRecipe': typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
    'SchemaOrgReview': typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
    'SchemaOrgVideo': typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
    'SchemaOrgWebPage': typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
    'SchemaOrgWebSite': typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
    'SchemaOrgMovie': typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
    'SchemaOrgCourse': typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
    'SchemaOrgItemList': typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
    'SchemaOrgBook': typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
    'SchemaOrgSoftwareApp': typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAboutSection': LazyComponent<typeof import("../app/components/AboutSection.vue")['default']>
    'LazyContactSection': LazyComponent<typeof import("../app/components/ContactSection.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../app/components/Footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../app/components/Header.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../app/components/HeroSection.vue")['default']>
    'LazyServicesSection': LazyComponent<typeof import("../app/components/ServicesSection.vue")['default']>
    'LazyWhatsAppButton': LazyComponent<typeof import("../app/components/WhatsAppButton.vue")['default']>
    'LazyContatoContactFormSection': LazyComponent<typeof import("../app/components/contato/ContactFormSection.vue")['default']>
    'LazyContatoHeaderSection': LazyComponent<typeof import("../app/components/contato/HeaderSection.vue")['default']>
    'LazyMobileContatoMContactFormSection': LazyComponent<typeof import("../app/components/mobile/contato-m/ContactFormSection.vue")['default']>
    'LazyMobileContatoMHeaderSection': LazyComponent<typeof import("../app/components/mobile/contato-m/HeaderSection.vue")['default']>
    'LazyMobileIndexMAboutSection': LazyComponent<typeof import("../app/components/mobile/index-m/AboutSection.vue")['default']>
    'LazyMobileIndexMContactSection': LazyComponent<typeof import("../app/components/mobile/index-m/ContactSection.vue")['default']>
    'LazyMobileIndexMHeroSection': LazyComponent<typeof import("../app/components/mobile/index-m/HeroSection.vue")['default']>
    'LazyMobileIndexMServicesSection': LazyComponent<typeof import("../app/components/mobile/index-m/ServicesSection.vue")['default']>
    'LazyMobileProjetosMHeroSection': LazyComponent<typeof import("../app/components/mobile/projetos-m/HeroSection.vue")['default']>
    'LazyMobileProjetosMProjectsSection': LazyComponent<typeof import("../app/components/mobile/projetos-m/ProjectsSection.vue")['default']>
    'LazyMobileSobreMAboutSection': LazyComponent<typeof import("../app/components/mobile/sobre-m/AboutSection.vue")['default']>
    'LazyMobileSobreMHeroSection': LazyComponent<typeof import("../app/components/mobile/sobre-m/HeroSection.vue")['default']>
    'LazyMobileSobreMSkillsSection': LazyComponent<typeof import("../app/components/mobile/sobre-m/SkillsSection.vue")['default']>
    'LazyProjetosCTASection': LazyComponent<typeof import("../app/components/projetos/CTASection.vue")['default']>
    'LazyProjetosHeroSection': LazyComponent<typeof import("../app/components/projetos/HeroSection.vue")['default']>
    'LazyProjetosProjectsSection': LazyComponent<typeof import("../app/components/projetos/ProjectsSection.vue")['default']>
    'LazySobreAboutSection': LazyComponent<typeof import("../app/components/sobre/AboutSection.vue")['default']>
    'LazySobreHeroSection': LazyComponent<typeof import("../app/components/sobre/HeroSection.vue")['default']>
    'LazySobreSkillsSection': LazyComponent<typeof import("../app/components/sobre/SkillsSection.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyOgImage': LazyComponent<typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']>
    'LazyOgImageScreenshot': LazyComponent<typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']>
    'LazySchemaOrgDebug': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
    'LazySchemaOrgArticle': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
    'LazySchemaOrgBreadcrumb': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
    'LazySchemaOrgComment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
    'LazySchemaOrgEvent': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
    'LazySchemaOrgFoodEstablishment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
    'LazySchemaOrgHowTo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
    'LazySchemaOrgImage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
    'LazySchemaOrgJobPosting': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
    'LazySchemaOrgLocalBusiness': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
    'LazySchemaOrgOrganization': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
    'LazySchemaOrgPerson': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
    'LazySchemaOrgProduct': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
    'LazySchemaOrgQuestion': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
    'LazySchemaOrgRecipe': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
    'LazySchemaOrgReview': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
    'LazySchemaOrgVideo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
    'LazySchemaOrgWebPage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
    'LazySchemaOrgWebSite': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
    'LazySchemaOrgMovie': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
    'LazySchemaOrgCourse': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
    'LazySchemaOrgItemList': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
    'LazySchemaOrgBook': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
    'LazySchemaOrgSoftwareApp': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutSection: typeof import("../app/components/AboutSection.vue")['default']
export const ContactSection: typeof import("../app/components/ContactSection.vue")['default']
export const Footer: typeof import("../app/components/Footer.vue")['default']
export const Header: typeof import("../app/components/Header.vue")['default']
export const HeroSection: typeof import("../app/components/HeroSection.vue")['default']
export const ServicesSection: typeof import("../app/components/ServicesSection.vue")['default']
export const WhatsAppButton: typeof import("../app/components/WhatsAppButton.vue")['default']
export const ContatoContactFormSection: typeof import("../app/components/contato/ContactFormSection.vue")['default']
export const ContatoHeaderSection: typeof import("../app/components/contato/HeaderSection.vue")['default']
export const MobileContatoMContactFormSection: typeof import("../app/components/mobile/contato-m/ContactFormSection.vue")['default']
export const MobileContatoMHeaderSection: typeof import("../app/components/mobile/contato-m/HeaderSection.vue")['default']
export const MobileIndexMAboutSection: typeof import("../app/components/mobile/index-m/AboutSection.vue")['default']
export const MobileIndexMContactSection: typeof import("../app/components/mobile/index-m/ContactSection.vue")['default']
export const MobileIndexMHeroSection: typeof import("../app/components/mobile/index-m/HeroSection.vue")['default']
export const MobileIndexMServicesSection: typeof import("../app/components/mobile/index-m/ServicesSection.vue")['default']
export const MobileProjetosMHeroSection: typeof import("../app/components/mobile/projetos-m/HeroSection.vue")['default']
export const MobileProjetosMProjectsSection: typeof import("../app/components/mobile/projetos-m/ProjectsSection.vue")['default']
export const MobileSobreMAboutSection: typeof import("../app/components/mobile/sobre-m/AboutSection.vue")['default']
export const MobileSobreMHeroSection: typeof import("../app/components/mobile/sobre-m/HeroSection.vue")['default']
export const MobileSobreMSkillsSection: typeof import("../app/components/mobile/sobre-m/SkillsSection.vue")['default']
export const ProjetosCTASection: typeof import("../app/components/projetos/CTASection.vue")['default']
export const ProjetosHeroSection: typeof import("../app/components/projetos/HeroSection.vue")['default']
export const ProjetosProjectsSection: typeof import("../app/components/projetos/ProjectsSection.vue")['default']
export const SobreAboutSection: typeof import("../app/components/sobre/AboutSection.vue")['default']
export const SobreHeroSection: typeof import("../app/components/sobre/HeroSection.vue")['default']
export const SobreSkillsSection: typeof import("../app/components/sobre/SkillsSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const OgImage: typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']
export const OgImageScreenshot: typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']
export const SchemaOrgDebug: typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
export const SchemaOrgArticle: typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
export const SchemaOrgBreadcrumb: typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
export const SchemaOrgComment: typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
export const SchemaOrgEvent: typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
export const SchemaOrgFoodEstablishment: typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
export const SchemaOrgHowTo: typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
export const SchemaOrgImage: typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
export const SchemaOrgJobPosting: typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
export const SchemaOrgLocalBusiness: typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
export const SchemaOrgOrganization: typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
export const SchemaOrgPerson: typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
export const SchemaOrgProduct: typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
export const SchemaOrgQuestion: typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
export const SchemaOrgRecipe: typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
export const SchemaOrgReview: typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
export const SchemaOrgVideo: typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
export const SchemaOrgWebPage: typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
export const SchemaOrgWebSite: typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
export const SchemaOrgMovie: typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
export const SchemaOrgCourse: typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
export const SchemaOrgItemList: typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
export const SchemaOrgBook: typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
export const SchemaOrgSoftwareApp: typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAboutSection: LazyComponent<typeof import("../app/components/AboutSection.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../app/components/ContactSection.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../app/components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../app/components/Header.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../app/components/HeroSection.vue")['default']>
export const LazyServicesSection: LazyComponent<typeof import("../app/components/ServicesSection.vue")['default']>
export const LazyWhatsAppButton: LazyComponent<typeof import("../app/components/WhatsAppButton.vue")['default']>
export const LazyContatoContactFormSection: LazyComponent<typeof import("../app/components/contato/ContactFormSection.vue")['default']>
export const LazyContatoHeaderSection: LazyComponent<typeof import("../app/components/contato/HeaderSection.vue")['default']>
export const LazyMobileContatoMContactFormSection: LazyComponent<typeof import("../app/components/mobile/contato-m/ContactFormSection.vue")['default']>
export const LazyMobileContatoMHeaderSection: LazyComponent<typeof import("../app/components/mobile/contato-m/HeaderSection.vue")['default']>
export const LazyMobileIndexMAboutSection: LazyComponent<typeof import("../app/components/mobile/index-m/AboutSection.vue")['default']>
export const LazyMobileIndexMContactSection: LazyComponent<typeof import("../app/components/mobile/index-m/ContactSection.vue")['default']>
export const LazyMobileIndexMHeroSection: LazyComponent<typeof import("../app/components/mobile/index-m/HeroSection.vue")['default']>
export const LazyMobileIndexMServicesSection: LazyComponent<typeof import("../app/components/mobile/index-m/ServicesSection.vue")['default']>
export const LazyMobileProjetosMHeroSection: LazyComponent<typeof import("../app/components/mobile/projetos-m/HeroSection.vue")['default']>
export const LazyMobileProjetosMProjectsSection: LazyComponent<typeof import("../app/components/mobile/projetos-m/ProjectsSection.vue")['default']>
export const LazyMobileSobreMAboutSection: LazyComponent<typeof import("../app/components/mobile/sobre-m/AboutSection.vue")['default']>
export const LazyMobileSobreMHeroSection: LazyComponent<typeof import("../app/components/mobile/sobre-m/HeroSection.vue")['default']>
export const LazyMobileSobreMSkillsSection: LazyComponent<typeof import("../app/components/mobile/sobre-m/SkillsSection.vue")['default']>
export const LazyProjetosCTASection: LazyComponent<typeof import("../app/components/projetos/CTASection.vue")['default']>
export const LazyProjetosHeroSection: LazyComponent<typeof import("../app/components/projetos/HeroSection.vue")['default']>
export const LazyProjetosProjectsSection: LazyComponent<typeof import("../app/components/projetos/ProjectsSection.vue")['default']>
export const LazySobreAboutSection: LazyComponent<typeof import("../app/components/sobre/AboutSection.vue")['default']>
export const LazySobreHeroSection: LazyComponent<typeof import("../app/components/sobre/HeroSection.vue")['default']>
export const LazySobreSkillsSection: LazyComponent<typeof import("../app/components/sobre/SkillsSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyOgImage: LazyComponent<typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']>
export const LazyOgImageScreenshot: LazyComponent<typeof import("../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']>
export const LazySchemaOrgDebug: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
export const LazySchemaOrgArticle: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
export const LazySchemaOrgBreadcrumb: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
export const LazySchemaOrgComment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
export const LazySchemaOrgEvent: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
export const LazySchemaOrgFoodEstablishment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
export const LazySchemaOrgHowTo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
export const LazySchemaOrgImage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
export const LazySchemaOrgJobPosting: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
export const LazySchemaOrgLocalBusiness: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
export const LazySchemaOrgOrganization: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
export const LazySchemaOrgPerson: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
export const LazySchemaOrgProduct: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
export const LazySchemaOrgQuestion: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
export const LazySchemaOrgRecipe: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
export const LazySchemaOrgReview: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
export const LazySchemaOrgVideo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
export const LazySchemaOrgWebPage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
export const LazySchemaOrgWebSite: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
export const LazySchemaOrgMovie: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
export const LazySchemaOrgCourse: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
export const LazySchemaOrgItemList: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
export const LazySchemaOrgBook: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
export const LazySchemaOrgSoftwareApp: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
