import Search from "../../../../components/Search/Search";
import TransactionCard from "../../../../components/TransactionCard/TransactionCard";
import "./AppWalletTransactions.css"

function AppWalletTransactions() {
  return (
    <>
      <div className="walletTransactionBody">
        <p className="title">Recent Transactions</p>
        <Search />
        <div className="walletTransactions">
        <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Green" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Red" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Green" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Red" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Red" time="4:34 PM"/>
            <TransactionCard currency="USDT" date="October 26" price="-20.09" style="Red" time="4:34 PM"/>
            <TransactionCard currency="USDT" date="October 26" price="-20.09" style="Red" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Green" time="4:34 PM"/>
            <TransactionCard currency="BTC" date="October 26" price="-0.02" style="Green" time="4:34 PM"/>
        </div>
      </div>
    </>
  );
}

export default AppWalletTransactions;
