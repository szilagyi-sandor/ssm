import {
  Suspense,
  useEffect,
  ReactElement,
  SuspenseProps,
  PropsWithChildren,
} from 'react';

type Props = {
  setSuspense: (active: boolean) => void;
};

function FallbackWrapper({ children, setSuspense }: PropsWithChildren<Props>) {
  useEffect(() => {
    setSuspense(true);
  }, [setSuspense]);

  useEffect(() => {
    return () => {
      setSuspense(false);
    };
  }, [setSuspense]);

  return children as ReactElement;
}

function ChildrenWrapper({ children, setSuspense }: PropsWithChildren<Props>) {
  useEffect(() => {
    setSuspense(false);
  }, [setSuspense]);

  return children as ReactElement;
}

function CustomSuspense({
  children,
  fallback,
  setSuspense,
}: PropsWithChildren<SuspenseProps & Props>) {
  return (
    <Suspense
      fallback={
        <FallbackWrapper setSuspense={setSuspense}>{fallback}</FallbackWrapper>
      }
    >
      <ChildrenWrapper setSuspense={setSuspense}>{children}</ChildrenWrapper>
    </Suspense>
  );
}

export { CustomSuspense };

// CHECKED 0.2.0
