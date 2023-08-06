import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { ErrorProvider } from './errorContext';

type Props = {
  onUnmount?: () => void;
  fallback?: ReactNode | undefined;
  onCatch?: (error: Error, errorInfo: ErrorInfo) => void;
};

type State = {
  error?: Error;
  hasError: boolean;
};

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: PropsWithChildren<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onCatch } = this.props;

    if (onCatch) {
      onCatch(error, errorInfo);
    }
  }

  componentWillUnmount(): void {
    const { onUnmount } = this.props;

    if (onUnmount) {
      onUnmount();
    }
  }

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback === undefined) {
        return null;
      }

      return <ErrorProvider value={error}>{fallback}</ErrorProvider>;
    }

    return children;
  }
}

// CHECKED 0.2.1
