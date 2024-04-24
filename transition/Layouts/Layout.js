import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../Transition';

const Layout = ({ children }) => {
  return (
    <div>
      <TransitionProvider>
        <div className="content-container">
          <TransitionComponent>{children}</TransitionComponent>
        </div>
      </TransitionProvider>
    </div>
  );
};

export default Layout;
