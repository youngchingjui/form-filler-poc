import { useState, useEffect } from 'react';

export function ResultsPage() {
  // Sample data
  const data = {
    originalStrategy: {
      finalWealth: -200000,
      investmentReturns: 1.6,
      maxDrawdown: 1.0,
      downsideVolatility: 0,
    },
    optimalAllocation: {
      finalWealth: 1300000,
      investmentReturns: 6.7,
      maxDrawdown: 36.0,
      downsideVolatility: -23,
    },
    prescientStrategy: {
      finalWealth: 2600000,
      investmentReturns: 7.8,
      maxDrawdown: 16.0,
      downsideVolatility: -6,
    },
  };

  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    // Simulate sending data to AI and receiving a response
    const fetchAIResponse = async () => {
      // Here you would send the data to your AI service
      // For demonstration, we'll simulate a response
      const responseText = `
        In terms of final wealth, your current strategy means you are likely
        to be bankrupt given the investment returns are too low.
        By going to your optimal allocation, your returns, your final wealth
        will be approximately 1.3m. This does however come with an increase of
        maximum drawdown and downside volatility.
        By going with the Prescient Strategy, not only is the returns
        enhanced, but downside is significantly reduced. Final wealth is
        likely to be closer to 2.6m, yet the drawdowns and downside volatility
        are significantly reduced.
        Please contact us for more details.
      `;
      setAiResponse(responseText);

      // Simulate audio response
      const audioResponseUrl = '/path/to/simulated/audio.mp3'; // Replace with actual audio URL
      setAudioUrl(audioResponseUrl);
    };

    fetchAIResponse();
  }, []);

  return (
    <div data-component="ResultsPage">
      <h1>Financial Analysis Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Final Wealth</th>
            <th>Investment Returns</th>
            <th>Maximum Drawdown</th>
            <th>Downside Volatility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Original Strategy</td>
            <td>{data.originalStrategy.finalWealth.toLocaleString()}</td>
            <td>{data.originalStrategy.investmentReturns}%</td>
            <td>{data.originalStrategy.maxDrawdown}%</td>
            <td>{data.originalStrategy.downsideVolatility}%</td>
          </tr>
          <tr>
            <td>Optimal Allocation</td>
            <td>{data.optimalAllocation.finalWealth.toLocaleString()}</td>
            <td>{data.optimalAllocation.investmentReturns}%</td>
            <td>{data.optimalAllocation.maxDrawdown}%</td>
            <td>{data.optimalAllocation.downsideVolatility}%</td>
          </tr>
          <tr>
            <td>Prescient Strategy</td>
            <td>{data.prescientStrategy.finalWealth.toLocaleString()}</td>
            <td>{data.prescientStrategy.investmentReturns}%</td>
            <td>{data.prescientStrategy.maxDrawdown}%</td>
            <td>{data.prescientStrategy.downsideVolatility}%</td>
          </tr>
        </tbody>
      </table>
      {aiResponse && (
        <div>
          <h2>AI Response</h2>
          <p>{aiResponse}</p>
          {audioUrl && <audio controls src={audioUrl} />}
        </div>
      )}
    </div>
  );
}
