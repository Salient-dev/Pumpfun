
'use client'
import Link from "next/link"
import { useState } from "react"
import ChatList from "../chart/ChatList"
import IconStar from "../elements/IconStar"
export default function Coinlist1() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    return (
        <>

            <section className="coin-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text">
                                <h3 className="heading">New coins</h3>
                                <Link className="btn-action-2" href="#">See All Coins</Link>
                            </div>
                            <div className="coin-list__main">
                                <div className="flat-tabs">
                                    
                                    <div className="d-flex">
                                        <Link href="#" className="btn-action2"><span>Filter ↓</span></Link>
                                        <div>45</div>
                                    </div>
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" />
                                                        <th scope="col">#</th>
                                                        <th scope="col">Pair info</th>
                                                        <th scope="col">Created</th>
                                                        <th scope="col">Liquidity</th>
                                                        <th scope="col">Progress</th>
                                                        <th scope="col">Txns</th>
                                                        <th scope="col">Volume</th>
                                                        <th scope="col">Audit results</th>
                                                        <th scope="col">King of the hill</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>1</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                <span>Bitcoin</span>
                                                                <span className="unit">BTC</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>2</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                                <span className="unit">ETH</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>3</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span>
                                                                <span className="unit">BNB/USD</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>4</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                                <span className="unit">USDT/USD</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>5</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-sol"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></span><span>Solana</span>
                                                                <span className="unit">SOL</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>6</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span><span>XRP</span> <span className="unit">XRP</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>7</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-ada"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /></span><span>Cardano</span>
                                                                <span className="unit">ADA</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>8</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                <span className="unit">AVAX</span></Link>
                                                        </td>
                                                        <td className="boild"><img src="/assets/images/icon/horloge-murale.png"/> 2h</td>
                                                        <td className="boild"><img src="/assets/images/icon/solana.png"/> 1.1B/$178B <br /><p className="color-success">+145782125%</p></td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '85%', backgroundColor:'green' }}
                                                                >85%</div>
                                                            </div>
                                                        </td>
                                                        <td className="boild">45 <br /><p><span className="color-success">25</span> / <span className="color-critical">20</span></p></td>
                                                        <td className="boild">$100k</td>
                                                        <td className="boild">
                                                            <div className="flex">
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Mint Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/checked.png" alt=""/></div>
                                                                    <div>Freeze Auth</div>
                                                                    <div>Disabled</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>LP</div>
                                                                    <div>Burned</div>
                                                                </div>
                                                                <div className="div">
                                                                    <div><img src="/assets/images/icon/cross.png" alt=""/></div>
                                                                    <div>Top 10</div>
                                                                    <div>Holders</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                                                    role="progressbar"
                                                                    style={{ width: '66%', backgroundColor:'orange' }}
                                                                >66%</div>
                                                            </div>
                                                        </td>
                                                        <td><Link href="#" className="btn">Quick Buy</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
