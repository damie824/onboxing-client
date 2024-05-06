import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import twilight from "react-syntax-highlighter/dist/cjs/styles/prism/twilight";

export default function ProductContents() {
  const markdown = `
  ## 춘식이
  춘식이를 소개할게요!
  > 춘식

  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  [안녕](https://google.com)

  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  
  [안녕](https://google.com)
  `;

  return (
    <ReactMarkdown
      children={markdown}
      className="product-markdown"
      components={{
        a: LinkRenderer,
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              style={{
                ...twilight,
                'pre[class*="language-"]': {
                  ...twilight['pre[class*="language-"]'],
                  border: "0",
                  backgroundColor: "rgba(255, 255, 255, 0.041)",
                  boxShadow: "none",
                  textShadow: "none",
                },
              }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={"markdown-default " + className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_" rel="noreferrer">
      {props.children}
    </a>
  );
}
