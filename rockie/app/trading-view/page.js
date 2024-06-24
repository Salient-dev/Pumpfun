'use client'

import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

const jsonRpcUrlMap = {
  1: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
};

const tokenList = 'https://tokens.coingecko.com/uniswap/all.json';

export default function TradingView() {
  useEffect(() => {
    console.log('jsonRpcUrlMap:', jsonRpcUrlMap);
    console.log('tokenList:', tokenList);
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Trading view">
        <div className="Uniswap">
          <SwapWidget 
            jsonRpcUrlMap={jsonRpcUrlMap} 
            tokenList={tokenList}
            onError={(error) => console.error('Error fetching trade:', error)}
          />
        </div>
      </Layout>
    </>
  );
}
