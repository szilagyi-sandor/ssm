import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { ErrorProvider } from './errorContext_';

type Props = {
  fallback?: ReactNode | undefined;
  onCatch?: (error: Error, errorInfo: ErrorInfo) => void;
  onUnmount?: () => void;
};

type State = {
  hasError: boolean;
  error?: Error;
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
      return fallback !== undefined ? (
        <ErrorProvider value={error}>{fallback}</ErrorProvider>
      ) : null;
    }

    return children;
  }
}
