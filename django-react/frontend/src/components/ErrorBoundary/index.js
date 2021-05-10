import React, {useState, useEffect, Component} from 'react'
import { Result } from 'antd';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
      
      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        console.log(error, errorInfo)
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
      
      render() {
        if (this.state.errorInfo) {
          // Error path
          return (
            <Result
            status="warning"
            title="Something went wrong."
            extra={
                <details style={{ whiteSpace: 'pre-wrap' }}>
                <u>{this.state.error && this.state.error.toString()}</u>
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            }
          />
          );
        }
        // Normally, just render children
        return this.props.children;
      }  
}

export default ErrorBoundary