import "./Home.css"
// import myimage from '../../images/myimage.png';

function Home() {
    return (
        <div className="home-container row">
            <div className="left-panel col-12 col-md-6">
                <p className="pre-header"><span>0%</span> trading commission</p>
                <h1 className="header">Join the best cryptocurrency exchange</h1>
                <p className="details">Trade with over 740 different cryptocurrency and fiat
                    currency pairs, including Bitcoin, Ethereum, BNB pairs
                </p>
                <button className="btn primary-btn btn-lg" type="button">START TRADING</button>
            </div>
            <div className="right-panel col-12 col-md-6" />
        </div>
    )
}
export default Home;