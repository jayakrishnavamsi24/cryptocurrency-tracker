import {Component} from 'react'
import './index.css'

const CryptoRow = props => {
  const {eachCrypto} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCrypto
  return (
    <li className="crypto-row">
      <div className="logo-cont col1">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p> {currencyName} </p>
      </div>
      <p className="col2"> {usdValue} </p>
      <p className="col3"> {euroValue} </p>
    </li>
  )
}

class CryptocurrencyItem extends Component {
  constructor(props) {
    super(props)
    this.state = {cryptoList: props.cryptoList}
  }

  componentDidMount() {
    this.trackerId = setInterval(this.update, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.trackerId)
  }

  update = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: formattedData})
  }

  render() {
    const {cryptoList} = this.state
    return (
      <>
        {cryptoList.map(eachCrypto => (
          <CryptoRow eachCrypto={eachCrypto} key={eachCrypto.id} />
        ))}
      </>
    )
  }
}

export default CryptocurrencyItem
