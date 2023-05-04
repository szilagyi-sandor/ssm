import {
  Suspense,
  useEffect,
  ReactElement,
  SuspenseProps,
  PropsWithChildren,
} from 'react';

type Props = {
  setSuspenseActive: (active: boolean) => void;
};

function FallbackWrapper({
  children,
  setSuspenseActive,
}: PropsWithChildren<Props>) {
  useEffect(() => {
    setSuspenseActive(true);
  }, [setSuspenseActive]);

  useEffect(() => {
    return () => {
      setSuspenseActive(false);
    };
  }, [setSuspenseActive]);

  return children as ReactElement;
}

function ChildrenWrapper({
  children,
  setSuspenseActive,
}: PropsWithChildren<Props>) {
  useEffect(() => {
    setSuspenseActive(false);
  }, [setSuspenseActive]);
  return children as ReactElement;
}

function CustomSuspense({
  children,
  fallback,
  setSuspenseActive,
}: PropsWithChildren<SuspenseProps & Props>) {
  return (
    <Suspense
      fallback={
        <FallbackWrapper setSuspenseActive={setSuspenseActive}>
          {fallback}
        </FallbackWrapper>
      }
    >
      <ChildrenWrapper setSuspenseActive={setSuspenseActive}>
        {children}
      </ChildrenWrapper>
    </Suspense>
  );
}

export { CustomSuspense };
