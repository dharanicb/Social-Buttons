const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}> {buttonText} </button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <div className="flex-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="flex-content">
        <Button buttonText="Like" className="btn like-btn" />
        <Button buttonText="Comment" className="btn comment-btn" />
        <Button buttonText="Share" className="btn share-btn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
