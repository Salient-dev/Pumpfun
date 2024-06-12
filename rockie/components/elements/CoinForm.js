// components/CoinForm.js
import { useState } from 'react';

export default function CoinForm() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="ticker" className="form-label">Ticker</label>
        <input type="text" className="form-control" id="ticker" placeholder="Enter ticker" required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="3" placeholder="Enter description" required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <input type="file" className="form-control" id="image" required />
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-link" onClick={handleToggleOptions}>
          {showMoreOptions ? 'Hide more options ↑' : 'Show more options ↓'}
        </button>
      </div>
      {showMoreOptions && (
        <div className="mt-3">
          <div className="mb-3">
            <label htmlFor="twitter" className="form-label">Twitter</label>
            <input type="text" className="form-control" id="twitter" placeholder="Enter Twitter handle" />
          </div>
          <div className="mb-3">
            <label htmlFor="telegram" className="form-label">Telegram</label>
            <input type="text" className="form-control" id="telegram" placeholder="Enter Telegram link" />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
            <input type="text" className="form-control" id="website" placeholder="Enter website URL" />
          </div>
        </div>
      )}
      <div className="mb-3">
        <button type="submit" className="btn btn-primary rounded-3">Create Coin</button>
      </div>
      <div className="mb-3">
        <span>Cost to deploy: ~0.02 SOL</span>
      </div>
    </form>
  );
}
