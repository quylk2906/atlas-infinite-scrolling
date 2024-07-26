const Loading = () => {
  return (
    <div
      className="ias-spinner"
      css={{
        textAlign: 'center',
        fontSize: 16,
        color: 'rgb(51, 51, 51)',
        display: 'block',
      }}
    >
      <img src="https://www.arielbath.com/media//sparsh/ajax_infinite_scroll/default/Spinner-1s-50px.gif" />
      <p />
      <p>
        <em>Loading - please wait...</em>
      </p>
      <p />
    </div>
  );
};

export default Loading;
