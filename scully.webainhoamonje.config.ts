import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  puppeteerLaunchOptions: {args: ['--no-sandbox', '--disable-setuid--sandbox']},
  projectRoot: "./src",
  projectName: "webainhoamonje",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
  }
};
