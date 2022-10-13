
import "./Table.css"
import btcgraph from '../../images/BTCgraph.PNG';
import bnbgraph from '../../images/BNBgraph.PNG';
import ethicon from '../../images/ETHicon.PNG';
import btcicon from '../../images/BTCicon.PNG';
import bnbicon from '../../images/BNBicon.PNG';
import toparrow from '../../images/toparrow.png';
import downarrow from '../../images/downarrow.png';
import React, { useState, useEffect } from 'react';

function Table() {
    const [allCrypto, setAllCrypto] = useState([])
    var fallbackData = [{
        "name": "Bitcoin",
        "image": btcicon,
        "current_price": 18654.62,
        "price_change_percentage_24h": -2.58771,
    },
    {
        "name": "Ethereum",
        "image": ethicon,
        "current_price": 8654.62,
        "price_change_percentage_24h": -1.871,
    }
        , {
        "name": "BNB",
        "image": bnbicon,
        "current_price": 654.62,
        "price_change_percentage_24h": 2.08111,
    }];


    const getDataFromAPI = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,eos,cardano,polkadot,dogecoin,dai")
            .then(function (res) {
                return res.json();
            }).then(function (res) {
                setAllCrypto(res);
            }).catch(rej => {
                setAllCrypto(fallbackData)
            })
    }

    useEffect(() => {
        getDataFromAPI();
    }, [])

    return (
        <div className="main-div">
            <div className="table-width table-responsive">
                <table className="table table-borderless">
                    <thead className="table-sm">
                        <tr>
                            <th>Market</th>
                            <th>Price</th>
                            <th>Change 24H</th>
                            <th>Dynamic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCrypto.map((d, i) => {
                            return <tr key={i}>
                                <td><img src={d.image} alt="graph" width={'40px'} /><span className="space">{d.name}</span><span className="text">({d.name})</span></td>
                                <td>{d.current_price}</td>
                                <td>
                                    <span className={d.price_change_percentage_24h > 0 ? 'greenBox' : 'redBox'}>
                                        {d.price_change_percentage_24h}
                                        <img className="ml-3" src={d.price_change_percentage_24h > 0 ? toparrow : downarrow} alt="graph" width={'25px'} />
                                    </span>

                                </td>
                                <td><img src={d.price_change_percentage_24h > 0 ? bnbgraph : btcgraph} alt="graph" width={'200px'} /></td>
                            </tr>
                        })
                        }
                        {/* Loader */}
                        {allCrypto?.length === 0 && <tr>
                            <td colSpan={4}>
                                <div className="loader"></div>
                            </td>
                        </tr>}
                    </tbody >
                </table>
            </div>
        </div>

    )

}
export default Table;