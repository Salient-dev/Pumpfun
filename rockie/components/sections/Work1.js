
import Link from "next/link"

export default function Work1() {
    return (
        <>

            <section className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">How It Work</h3>
                                <p className="fs-20 desc">
                                    Pump prevents rugs by making sure that all created tokens are safe. Each coin on pump is a fair-launch with no presale and no team allocation.
                                </p>
                            </div>
                            <div className="work__main">
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Cloud.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 1</p>
                                        <Link href="#" className="title">Download</Link>
                                        <p className="text">
                                            pick a coin that you like
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Wallet.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 2</p>
                                        <Link href="#" className="title">Connect wallet</Link>
                                        <p className="text">
                                            buy the coin on the bonding curve
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Mining.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 3</p>
                                        <Link href="#" className="title">Start trading</Link>
                                        <p className="text">
                                            sell at any time to lock in your profits or losses
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Comparison.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 4</p>
                                        <Link href="#" className="title">Earn money</Link>
                                        <p className="text">
                                            when enough people buy on the bonding curve it reaches a market cap of $69k
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Mining.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 5</p>
                                        <Link href="#" className="title">Start trading</Link>
                                        <p className="text">
                                            $12k of liquidity is then deposited in raydium and burned
                                        </p>
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
