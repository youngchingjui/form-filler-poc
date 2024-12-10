import React, { useState } from 'react';

export function ResultsPage() {
  const [data, setData] = useState({
    originalStrategy: {
      finalWealth: -200000,
      returns: 1.6,
      drawdown: 1.0,
      volatility: 0,
    },
    optimalAllocation: {
      finalWealth: 1300000,
      returns: 6.7,
      drawdown: 36.0,
      volatility: -23,
    },
    prescientStrategy: {
      finalWealth: 2600000,
      returns: 7.8,
      drawdown: 16.0,
      volatility: -6,
    },
  });

  const [report, setReport] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const generateReport = async () => {
    // Simulate AI processing
    const reportText = `
      In terms of final wealth, your current strategy means you are likely to be bankrupt given the investment returns are too low.
      By going to your optimal allocation, your returns, your final wealth will be approximately 1.3m. This does however come with an increase of maximum drawdown and downside volatility.
      By going with the Prescient Strategy, not only is the returns enhanced, but downside is significantly reduced. Final wealth is likely to be closer to 2.6m, yet the drawdowns and downside volatility are significantly reduced.
      Please contact us for more details.
    `;
    setReport(reportText);

    // Simulate generating audio
    const audioBlob = new Blob([reportText], { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    setAudioUrl(audioUrl);
  };

  return (
    <div data-component="ResultsPage">
      <h1>Financial Analysis Summary</h1>
      <button onClick={generateReport}>Generate Report</button>
      {report && (
        <div>
          <h2>Report</h2>
          <p>{report}</p>
          {audioUrl && <audio controls src={audioUrl} />}
        </div>
      )}
    </div>
  );
}
