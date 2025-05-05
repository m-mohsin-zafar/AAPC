import "public/css/loading-screen.css";

const LoadingScreen = () => {
  return (
    <div className="loading_screen">
      <img src="/img/hi-final.png" alt="loading" />
    </div>
  );
};

// make sure the base wrapper or whatever it's in is position: relative, as we're doing position: fixed on the actual thing. test.

export default LoadingScreen;
