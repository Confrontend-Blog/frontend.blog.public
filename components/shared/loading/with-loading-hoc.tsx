import Loading from "./loading";

type WithLoadingProps = {
  isLoading: boolean;
};

/**
 * A higher-order component (HOC) that adds a loading state to the wrapped component.
 * Displays a loading spinner while the wrapped component is waiting for data or
 * performing some asynchronous action.
 *
 * @template P - The type of the wrapped component's props.
 * @param {(props: P) => JSX.Element} Component - The component to wrap.
 * @returns {((props: P & WithLoadingProps) => JSX.Element)} - A new component that accepts the same props as the wrapped component and an additional `isLoading` prop.
 */
const WithLoading = <P extends object>(
  Component: (props: P) => JSX.Element
): ((props: P & WithLoadingProps) => JSX.Element) => {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: WithLoadingProps & P) {
    if (isLoading) {
      return <Loading />;
    }

    return <Component {...(props as P)} />;
  };
};

export default WithLoading;
