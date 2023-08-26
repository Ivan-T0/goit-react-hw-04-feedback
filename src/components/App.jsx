import { useState } from "react";
import Reviews from "./Reviews/Reviews";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section"
import Notification from "./Notification/Notification"

const App=()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const handleReviews = (e) => {
    switch (e) {
      case 'good': setGood(good + 1)
        break;
      case 'neutral': setNeutral(neutral + 1)
        break;
      case 'bad': setBad(bad + 1)
        break;
      default : return
    
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
  
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  
    
    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage;

    return (
      <>
        <Section title="Please leave your feedback:">
          <Reviews
          options={['good', 'neutral', 'bad']}
          handleReviewsOptions={handleReviews}
          
          />
        </Section >
        <Section title="Statistics:">
          

        {totalFeedback?(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
          />) : (<Notification
            message="There is no feedback yet."
          > </Notification>)}
        </Section>
      </>
    );
} 
  
  


export default App;

