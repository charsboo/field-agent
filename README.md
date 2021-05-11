# Field Agent

> Custom stylesheet that supplements (not replaces) the [Visual Studio Code Markdown preview](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) styles.

[![license][img-license]][url-license]

## Usage

Follow the instructions for ["Using your own CSS"](https://code.visualstudio.com/docs/getstarted/settings) on the Visual Studio Code docs to link to the `field-agent.min.css` file in the `dist` folder.

You cannot link directly to a GitHub-hosted raw file as it [responds with an `X-Frame-Options: DENY` HTTP response header](https://github.com/Microsoft/vscode/issues/8287#issuecomment-230021773). Instead, use a service that serves the file with the proper headers.

E.G.: [**jsDeliver**](https://www.jsdelivr.com/?docs=gh) (https://cdn.jsdelivr.net/npm/@charsboo/field-agent@1.1.1/dist/field-agent.min.css)

## Details

Mainly adjusts font sizes and spacing between elements. You'll have to scroll more, but it makes the text easier to scan.

## License

Provided under [MIT License](https://opensource.org/licenses/MIT).

[img-license]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[url-license]: LICENSE
