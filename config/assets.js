import * as assets from "hanami-assets";
import postCssPlugin from "@deanc/esbuild-plugin-postcss"
import tailwindCss from "@tailwindcss/postcss"
// To provide additional esbuild (https://esbuild.github.io) options, use the following:
//
// Read more at: https://guides.hanamirb.org/assets/customization/
//
await assets.run({
  esbuildOptionsFn: (args, esbuildOptions) => {
    // Add to esbuildOptions here. Use `args.watch` as a condition for different options for
    // compile vs watch.
    const plugins = [...esbuildOptions.plugins, postCssPlugin({plugins: [tailwindCss]})]

    return {
      ...esbuildOptions,
      plugins
    }
  }
});
