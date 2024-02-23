import React from "react";

function PopupForm({isOpen, onClose}){
    return (
        isOpen && (
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={onClose}>
                  &times;
                </span>
                <form action="#" method="post">
                <div><h2>Your feedback</h2></div>
                <div>
                  <div>
                    <div className="form-group">
                      <input type="text" id="name" name="name" placeholder="Your first and last name" required />
                    </div>
                    <div className="form-group">
                      <input type="social media" id="social media" name="social media" placeholder="link to social media (optional)" />
                    </div>
                    <div className="form-group">
                      <input type="feedback" id="email" name="email" placeholder="Your feedback" />
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                  <div>
                    <div className="form-group">
                      <label htmlFor="photo">Select a Photo:</label>
                      <input type="file" id="photo" name="photo" accept="image/*" />
                     </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
    )
    ) 
}

export default PopupForm; 