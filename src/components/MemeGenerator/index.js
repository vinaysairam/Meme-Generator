/* eslint-disable prefer-const */
import {Component} from 'react'
import {
  Heading,
  DivContainer,
  LabelEl,
  InputEl,
  SelectEl,
  ButtonEl,
  DivContainer2,
  Div3,
  Pel,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    img: '',
    tpTxt: '',
    btmTxt: '',
    fontSz: '',
    imgUrl: '',
    topText: '',
    bottomText: '',
    fntSize: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {img, fontSz, tpTxt, btmTxt} = this.state
    this.setState({
      imgUrl: img,
      fntSize: fontSz,
      topText: tpTxt,
      bottomText: btmTxt,
    })
  }

  onImg = event => {
    this.setState({img: event.target.value})
  }

  onTpTxt = event => {
    this.setState({tpTxt: event.target.value})
  }

  btmTxt = event => {
    this.setState({btmTxt: event.target.value})
  }

  onFont = event => {
    this.setState({fontSz: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, fntSize} = this.state
    return (
      <DivContainer>
        <DivContainer2>
          <form onSubmit={this.onSubmit}>
            <Heading>Meme Generator</Heading>
            <LabelEl htmlFor="imageUrl">Image URL</LabelEl>
            <br />
            <InputEl
              id="imageUrl"
              placeholder="Enter the Image Url"
              type="text"
              onChange={this.onImg}
            />
            <br />
            <LabelEl htmlFor="topTxt">Top Text</LabelEl>
            <br />
            <InputEl
              placeholder="Enter the Top Text"
              type="text"
              id="topTxt"
              onChange={this.onTpTxt}
            />
            <br />
            <LabelEl htmlFor="bottomTxt">Bottom Text</LabelEl>
            <br />
            <InputEl
              placeholder="Enter the Bottom Text"
              type="text"
              id="bottomTxt"
              onChange={this.btmTxt}
            />
            <br />
            <LabelEl htmlFor="fontSize">Font Size</LabelEl>
            <br />
            <SelectEl id="fontSize" onChange={this.onFont}>
              {fontSizesOptionsList.map(l => (
                <option value={l.optionId} key={l.optionId}>
                  {l.displayText}
                </option>
              ))}
            </SelectEl>
            <br />
            <ButtonEl type="submit">Generate</ButtonEl>
          </form>
          <Div3 img={imgUrl} data-testid="meme">
            <Pel font={fntSize}>{topText}</Pel>
            <Pel font={fntSize}>{bottomText}</Pel>
          </Div3>
        </DivContainer2>
      </DivContainer>
    )
  }
}

export default MemeGenerator
