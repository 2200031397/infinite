import './index.css';
import iconimg from '../../image/iconimg.png';
import deposit from '../../image/deposit.png';
import dasboard from '../../image/dashboard-line.png';

import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'January', earnings: 4000 },
  { name: 'February', earnings: 3000 },
  { name: 'March', earnings: 2000 },
  { name: 'April', earnings: 2780 },
  { name: 'May', earnings: 1890 },
  { name: 'June', earnings: 2390 },
  { name: 'July', earnings: 3490 },
  { name: 'August', earnings: 3000 },
  { name: 'September', earnings: 4000 },
  { name: 'October', earnings: 3200 },
  { name: 'November', earnings: 2500 },
  { name: 'December', earnings: 4500 },
];

const Home = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-min-card">
                    <img src={iconimg} className="image-icon" alt="icon"/>
                    <div className="navigationmenu">
                        
                        <div className='navigation-text-head'>
                        <p className='.navigation-text'>Dashboard</p>
                        </div>
                        
                        
                        <p className="navigation-text">CRM</p>
                        <p className="navigation-text">MAM</p>
                        <p className="navigation-text">PAMM</p>
                        <p className="navigation-text">Trade</p>
                        <p className="navigation-text">Wallet</p>
                        <p className="navigation-text">Accounts</p>
                        <p className="navigation-text">History</p>
                    </div>
                </div>
                <div className="sidebar-tools">
                    <p className="navigation-text">Notification</p>
                    <p className="navigation-text">Settings</p>
                    <p className="navigation-text">Help & Support</p>
                    <p className="navigation-text">Log Out</p>
                    <hr className="line" />
                    <div className="profile-container">
                        <div className="profile-card">
                            <p>Charan</p>
                            <p>charan@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="header">
                    <p className="header-text">Dashboard</p>
                    <div className="header-search-box">
                        <input type="text" className="header-search" placeholder="search??" />
                    </div>
                </div>
               <div className='dasboard-container'> 
                    <div>
                        <div className="quick-links-container">
                            <p className="quick-links-container-text">Quick Links</p>
                            <div className="quick-links-container-card">
                                <div className="quick-links-container-card-min">
                                    <img src={deposit}/>
                                    <p>Deposit</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Withdraw</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Settings</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Verification</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Bonuses</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>MT5</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Transfer</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>History</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Partner</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Exchange</p>
                                </div>
                                <div className="quick-links-container-card-min">
                                <img src={deposit}/>
                                    <p>Analytics</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='graph-container'>
                            <div className='graph-container-header'>
                                <p>Overview</p>
                                <p className='download'>Download Report</p>
                            </div>
                            <div className='year-month-container'>
                                <div className='month-container'><p>monthly</p></div>
                                <div className='year-container'><p>year</p></div>
                            </div>
                            <ResponsiveContainer width="70%" height={400}>
                                <ComposedChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" scale="band" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="earnings" barSize={20} fill="#413ea0" />
                                    <Line type="monotone" dataKey="earnings" stroke="#ff7300" />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                        
                    </div>
                    <div>
                    <div className='trading-container'>
                            <p className='trading-header'>Trading Accounts</p>
                            <div className='min-trading-container'>
                                    <p>Master Accounts</p>
                                    <div className='ctrade-container'>
                                        <p className='ctrade'>CTrader  </p>
                                        <p> #273728</p>
                                    </div>
                                    <div className='UCD'>
                                        <p>0.00 USD</p>
                                        <img src={deposit} className='img-icon'/>
                                    </div>
                            </div>
                            <div className='min-trading-container'>
                                    <p>Master Accounts</p>
                                    <div className='ctrade-container'>
                                        <p className='ctrade'>CTrader </p>
                                        <p> #273728</p>
                                    </div>
                                    <div className='UCD'>
                                        <p>0.00 USD</p>
                                        <img src={deposit} className='img-icon'/>
                                    </div>
                            </div>
                    </div>
                    <div className='trades-container'>
                            <p className='trades-header'>Open Trades</p>
                            <div className='trades-min-container'>
                                    <div className='trades-container-min'>
                                        <p>GBPUSD
                                            <span>Long</span>
                                        </p>
                                        <p>0.12</p>
                                        
                                    </div>
                                    <div className='trades-USD'>+56.00 <span>USD</span></div>
                            </div>
                            <div className='trades-min-container'>
                                    <div className='trades-container-min'>
                                        <p>GBPUSD
                                            <span>Long</span>
                                        </p>
                                        <p>0.12</p>
                                        
                                    </div>
                                    <div className='trades-USD'>+56.00 <span>USD</span></div>
                            </div>
                            <div className='trades-min-container'>
                                    <div className='trades-container-min'>
                                        <p>GBPUSD
                                            <span>Long</span>
                                        </p>
                                        <p>0.12</p>
                                        
                                    </div>
                                    <div className='trades-USD'>+56.00 <span>USD</span></div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
