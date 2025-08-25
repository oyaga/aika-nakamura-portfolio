import { createConsola } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/consola/dist/index.mjs';
import { execa } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/nuxt-og-image/node_modules/execa/index.js';
import playwrightCore from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/playwright-core/index.mjs';
import { createError } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/h3/dist/index.mjs';
import { joinURL, withQuery } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ufo/dist/index.mjs';
import { toValue } from 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/index.mjs';
import { a as useOgImageRuntimeConfig, G as useNitroOrigin } from './nitro.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unocss/core/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/devalue/index.js';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/kirap/OneDrive/%C3%81rea%20de%20Trabalho/aika-nakamura-portfolio/node_modules/vue/server-renderer/index.mjs';

let installedChromium = false;
let installChromiumPromise;
async function createBrowser() {
  if (installChromiumPromise)
    await installChromiumPromise;
  if (!installedChromium) {
    installChromiumPromise = new Promise((_resolve) => {
      const logger = createConsola().withTag("Nuxt OG Image");
      logger.info("Installing Chromium install for og:image generation...");
      const installChromeProcess = execa("npx", ["playwright", "install", "chromium"], {
        stdio: "pipe"
      });
      if (installChromeProcess.stderr) {
        installChromeProcess.stderr.pipe(process.stderr);
      }
      if (installChromeProcess.stdout) {
        installChromeProcess.stdout.pipe(process.stdout);
      }
      new Promise((resolve) => {
        installChromeProcess.on("exit", (e) => {
          if (e !== 0)
            logger.error("Failed to install Playwright dependency for og:image generation. Trying anyway...");
          resolve();
        });
      }).then(() => {
        installChromeProcess.kill();
        logger.info("Installed Chromium install for og:image generation.");
        _resolve();
      });
    }).then(() => {
      installedChromium = true;
    });
  }
  return await playwrightCore.chromium.launch({
    headless: true
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (true && !options.html) {
      options.html = await e.$fetch(path).catch(() => void 0);
    }
    await page.setViewportSize({
      width: toValue(options.width) || 1200,
      height: toValue(options.height) || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

export { ChromiumRenderer as default };
//# sourceMappingURL=renderer2.mjs.map
