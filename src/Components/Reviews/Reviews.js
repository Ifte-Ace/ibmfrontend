import React, { useState } from 'react';
import '../login/login.css'
import { Rating } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
export function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
      });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
          setShowWarning(false);
        } else {
          setShowWarning(true);
        }
  };
  return (
    <div>
      <h2>Form with Message</h2>
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
               {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div>
                   <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} className="form-control" onChange={handleChange} />
             </div>
                <div>
                 <label htmlFor="review">Review:</label>
                  <textarea id="review" name="review" value={formData.review} className="form-control" onChange={handleChange} />
                 </div>
                 <div>
                 <label htmlFor="review">Rating:</label>
                 <Rating
                    name="text-feedback"
                     value={5}
                     readOnly
                     precision={0.5}
                     emptyIcon={<StarRateIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                </div>
                <button type="button" className="form-control" disabled={true}>Submit</button>

               </form>
      
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
