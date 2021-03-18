import styled from 'styled-components'
import {useState} from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
  const Title = styled.h1`
    font-size: 40px;
    text-align: center;
  `
  const [text, setText] = useState(
    `# Rendering H1
## Rendering H2
Rendering [Link](https://www.freecodecamp.org/qiross)
\`<div>Rendering inline code</div>\`
Rendering multi line code:
\`\`\`
function example(){
  const something=0;
  return example;
}
\`\`\`
Rendering List:
1. First
2. Second
>Rendering Block Quotes!
Rendering Images:
![Rendering Image](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf03kt_qKesp7031heNz-yjM9FVChMSmVaAw&usqp=CAU)
And finally **bold text**
`
)

  return (
    <>
      <Title>QIRoss Markdown Previewer</Title>
      <h2 id="link"><a href="https://github.com/QIRoss/qirossfccmarkdownpreviewer">Link to solution</a></h2>

      <textarea id="editor" name="Editor" rows="10" cols="60" value={text} onChange={e => setText(e.target.value)}/>

      <Preview markdown={text}/>
    </>
  );
}

function Preview({markdown}) {
  return ( <div dangerouslySetInnerHTML={ { __html: marked(markdown, {renderer: renderer}), } } id="preview"></div> );
}

export default App;