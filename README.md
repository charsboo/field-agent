# Field Agent

Custom stylesheet that supplements (not replaces) the [Visual Studio Code Markdown preview](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) styles.

Mainly adjusts font sizes and spacing between elements. You'll have to scroll more, but it makes the text easier to scan.

## Usage

Follow the instructions for ["Using your own CSS"](https://code.visualstudio.com/docs/getstarted/settings) on the Visual Studio Code docs to link to the `field-agent.min.css` file in the `dist` folder.

Note that you cannot link directly to a GitHub-hosted raw file as it [responds with an `X-Frame-Options: DENY` HTTP response header](https://github.com/Microsoft/vscode/issues/8287#issuecomment-230021773). Instead, use a service that serves the file with the proper headers.

E.G.: [**jsDeliver**](https://www.jsdelivr.com/?docs=gh) (https://cdn.jsdelivr.net/gh/charsboo/field-agent@1.0/dist/field-agent.min.css)

## License

This package is available under the [MIT License](https://opensource.org/licenses/MIT).