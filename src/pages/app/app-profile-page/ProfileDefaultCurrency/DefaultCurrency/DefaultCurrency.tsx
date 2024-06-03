import "./DefaultCurrency.css";
import reset from "../../../../../assets/images/reset.svg";
import search from "../../../../../assets/images/search.png";
import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import tickyes from "../../../../../assets/images/tickyes.svg";

const DefaultCurrency = () => {
    return (
        <>
            <div className="defaultCurrency">
                <div className="defaultCurrencyHeader">
                    <img src={reset} alt="" />
                    <p>Default Currency</p>
                </div>
                <div className="currencyInstruction">
                    <p>Select the currency you want to trade in by default</p>
                </div>
                <div className="searchBar">
                    <img src={search} alt="" />
                    <input type="" placeholder="Search" />
                </div>

                <div className="defaultCurrencyWrapper">
                    <ProfileBrowse text="Nigerian Naira - NGN" img={tickyes} />
                    <ProfileBrowse text="US Dollar - USD" img={tickyes} display="hide" />
                    <ProfileBrowse text="Canadian Dollar - CAD" img={tickyes} display="hide" />
                    <ProfileBrowse text="Australian Dollar - AUD" img={tickyes} display="hide" />
                    <ProfileBrowse text="Euro - EUR" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghana Cedis - GHC" img={tickyes} display="hide" />
                </div>
            </div>
        </>
    )
}

export default DefaultCurrency
