
'use client'
import Link from "next/link"
import { useState } from "react"
export default function Crypto1() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    return (
        <>

            <section className="crypto" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="crypto__main">
                                <div className="flat-tabs">
                                    <div className="center">
                                        <h1>King of the hill</h1>
                                    </div>
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${flatTabs === 1 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <div className="progress-container">
                                                        <strong>King of the Hill</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '66%', backgroundColor:'orange' }}
                                                            >66%</div>
                                                        </div>
                                                        <strong>Bonding Curve</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '85%', backgroundColor:'green' }}
                                                            >85%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <div className="progress-container">
                                                        <strong>King of the Hill</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '66%', backgroundColor:'orange' }}
                                                            >66%</div>
                                                        </div>
                                                        <strong>Bonding Curve</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '85%', backgroundColor:'green' }}
                                                            >85%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <div className="progress-container">
                                                        <strong>King of the Hill</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '66%', backgroundColor:'orange' }}
                                                            >66%</div>
                                                        </div>
                                                        <strong>Bonding Curve</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '85%', backgroundColor:'green' }}
                                                            >85%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <div className="progress-container">
                                                        <strong>King of the Hill</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '66%', backgroundColor:'orange' }}
                                                            >66%</div>
                                                        </div>
                                                        <strong>Bonding Curve</strong>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                                role="progressbar"
                                                                style={{ width: '85%', backgroundColor:'green' }}
                                                            >85%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 2 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 3 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 4 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 5 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 6 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 7 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 46,168.95</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <p className="sale critical">-0.79%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD $3,480.04</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale success">+10.55%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 1.00</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-0.01%%</div>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 443.56</h6>
                                                <div className="bottom">
                                                    <p>36,641.20</p>
                                                    <div className="sale critical">-1.24%</div>
                                                </div>
                                            </div>
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
