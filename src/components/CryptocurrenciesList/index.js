import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <>
      <div className="top-container">
        <h1 className="title"> Cryptocurrency Tracker </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="all-crypto-img"
        />
      </div>
      <div className="bottom-container">
        <ul className="values-card">
          <div className="header">
            <h1 className="col1"> Coin Type </h1>
            <h1 className="col2"> USD </h1>
            <h1 className="col3"> EURO </h1>
          </div>
          <CryptocurrencyItem cryptoList={cryptoList} />
        </ul>
      </div>
    </>
  )
}

export default CryptocurrenciesList
