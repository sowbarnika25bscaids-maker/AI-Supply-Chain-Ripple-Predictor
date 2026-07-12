import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {

    if (this.state.hasError) {

      return (
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold text-red-600">
            Something went wrong
          </h1>

          <button
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );

    }

    return this.props.children;
  }

}

export default ErrorBoundary;